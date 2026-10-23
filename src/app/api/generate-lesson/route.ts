import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      subject,
      studentAge,
      topic,
      lessonLength,
      level,
      difficulties,
    } = body;

    if (!subject || !topic) {
      return NextResponse.json(
        { error: "Please provide a subject and topic." },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-5-mini",
      instructions:
        "You are LessonLoop, a helpful AI lesson-planning assistant for private tutors. Create practical, personalised, age-appropriate lessons. Include clear learning objectives, a timed lesson structure, activities, resources, assessment questions, and a short plenary. Match the total duration requested. Use clear headings and teacher-friendly language.",
      input: `Create a tutoring lesson using these details:

Subject: ${subject}
Student age or school year: ${studentAge || "Not specified"}
Topic: ${topic}
Lesson length: ${lessonLength || 45} minutes
Student level: ${level || "Developing"}
Learning difficulties or needs: ${difficulties || "None specified"}

Make the lesson practical and ready for a tutor to use.`,
    });

    return NextResponse.json({
      lesson: response.output_text,
    });
  } catch (error) {
    console.error("LessonLoop generation error:", error);

    return NextResponse.json(
      {
        error:
          "We couldn't generate your lesson just now. Please try again.",
      },
      { status: 500 }
    );
  }
}

