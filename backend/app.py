import streamlit as st
import torch
from PIL import Image
from io import BytesIO
import os
import torchvision.transforms as transforms
from sklearn.metrics.pairwise import cosine_similarity

import open_clip
from diffusers import DiffusionPipeline

def compute_clip_scores(image_prompt_pairs, model, preprocess, tokenizer, device='cpu'):
    results = []

    for img_path, prompt in image_prompt_pairs:
        image = preprocess(Image.open(img_path).convert("RGB")).unsqueeze(0).to(device)
        text = tokenizer([prompt]).to(device)

        with torch.no_grad():
            image_features = model.encode_image(image)
            text_features = model.encode_text(text)

        image_features /= image_features.norm(dim=-1, keepdim=True)
        text_features /= text_features.norm(dim=-1, keepdim=True)

        clip_score = (image_features @ text_features.T).item()
        cosine_score = cosine_similarity(image_features.cpu().numpy(), text_features.cpu().numpy())[0][0]

        results.append({
            'image_path': img_path,
            'prompt': prompt,
            'clip_score': clip_score,
            'cosine_similarity': cosine_score
        })

    return results

def load_diffusion_pipeline(model_id="fill-in-base-model", lora_weights="ankitColab/Trial", device="cpu"):
    pipe = DiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16 if device == "cuda" else torch.float32)
    pipe.to(device)
    pipe.load_lora_weights(lora_weights)
    return pipe


def load_clip_model(model_name="ViT-B-32", pretrained="openai"):
    import open_clip
    import torch

    model, _, preprocess = open_clip.create_model_and_transforms(model_name, pretrained=pretrained)
    tokenizer = open_clip.get_tokenizer(model_name)
    model.eval()
    return model, preprocess, tokenizer

def main():
    st.title("Image Generation and Similarity Scoring App")
    
    device = "cuda" if torch.cuda.is_available() else "cpu"
    
    # Load models
    with st.spinner("Loading models..."):
        diffusion_pipe = load_diffusion_pipeline("stabilityai/stable-diffusion-xl-base-1.0", "ankitColab/Trial", device)
        clip_model, preprocess, tokenizer = load_clip_model()
        clip_model = clip_model.to(device)
    
    st.sidebar.header("Input Prompts")
    prompts = st.sidebar.text_area("Enter prompts (one per line)", "").splitlines()
    
    if st.sidebar.button("Generate and Score Images"):
        if prompts:
            results = []
            output_dir = "outputs"
            os.makedirs(output_dir, exist_ok=True)

            for i, prompt in enumerate(prompts):
                # Generate image
                with st.spinner(f"Generating image for prompt: '{prompt}'..."):
                    image = diffusion_pipe(prompt).images[0]
                    img_path = os.path.join(output_dir, f"generated_{i}.png")
                    image.save(img_path)

                # Preprocess image and text
                image_tensor = preprocess(image).unsqueeze(0).to(device)
                text_tensor = tokenizer([prompt]).to(device)

                # Compute scores
                with torch.no_grad():
                    image_features = clip_model.encode_image(image_tensor)
                    text_features = clip_model.encode_text(text_tensor)

                # Normalize
                image_features /= image_features.norm(dim=-1, keepdim=True)
                text_features /= text_features.norm(dim=-1, keepdim=True)

                # Compute scores
                clip_score = (image_features @ text_features.T).item()
                cosine_score = compute_clip_scores([(img_path, prompt)], clip_model, preprocess, tokenizer, device)[0]['cosine_similarity']

                results.append({
                    'prompt': prompt,
                    'image_path': img_path,
                    'clip_score': clip_score,
                    'cosine_similarity': cosine_score
                })

            # Display results
            for r in results:
                st.image(r['image_path'], caption=f"Prompt: {r['prompt']}", use_column_width=True)
                st.write(f"CLIP Score: {r['clip_score']:.4f}, Cosine Similarity: {r['cosine_similarity']:.4f}")
        else:
            st.warning("Please enter at least one prompt.")

if __name__ == "__main__":
    main()