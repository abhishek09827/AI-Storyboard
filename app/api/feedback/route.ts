import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL || ""
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ""

    // Create a Supabase client with the service role key for server operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get the form data from the request
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message || !data.rating) {
      return NextResponse.json({ error: "Please fill in all required fields" }, { status: 400 })
    }

    // Insert the feedback into Supabase
    const { error } = await supabase.from("feedback").insert([
      {
        name: data.name,
        email: data.email,
        feedback_type: data.feedback_type,
        rating: data.rating,
        message: data.message,
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 })
  }
}
