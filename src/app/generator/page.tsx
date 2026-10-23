
"use client";

import { useState } from "react";

export default function GeneratorPage() {
  const [subject, setSubject] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [topic, setTopic] = useState("");
  const [lessonLength, setLessonLength] = useState("45");
  const [level, setLevel] = useState("Developing");
  const [difficulties, setDifficulties] = useState("");
  const [lesson, setLesson] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setError("");
    setLesson("");

    if (!subject.trim() || !topic.trim()) {
      setError("Please enter a subject and topic first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate-lesson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          studentAge,
          topic,
          lessonLength,
          level,
          difficulties,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "We couldn't generate your lesson. Please try again."
        );
      }

      if (!data.lesson) {
        throw new Error("No lesson was returned. Please try again.");
      }

      setLesson(data.lesson);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <a
          href="/"
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          LessonLoop
        </a>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">
            Create your lesson
          </h1>

          <p className="mt-2 text-slate-600">
            Tell us a little about your student and we'll build the lesson for
            you.
          </p>

          <div className="mt-8 grid gap-6">
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="e.g. Maths"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Student age / year
              </label>
              <input
                type="text"
                value={studentAge}
                onChange={(event) => setStudentAge(event.target.value)}
                placeholder="e.g. Year 6"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Topic
              </label>
              <input
                type="text"
                value={topic}
                onChange={(event) => setTopic(event.target.value)}
                placeholder="e.g. Equivalent fractions"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Lesson length
              </label>
              <select
                value={lessonLength}
                onChange={(event) => setLessonLength(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              >
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
                <option value="90">90 minutes</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Student level
              </label>
              <select
                value={level}
                onChange={(event) => setLevel(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              >
                <option>Beginner</option>
                <option>Developing</option>
                <option>Confident</option>
                <option>Advanced</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Any difficulties or things to work on?
              </label>
              <textarea
                value={difficulties}
                onChange={(event) => setDifficulties(event.target.value)}
                placeholder="e.g. Struggles to understand fractions visually…"
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="button"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              onClick={handleGenerate}
            >
              {loading ? "Creating your lesson..." : "Generate my lesson 🤖"}
            </button>

            {error && (
              <p role="alert" className="whitespace-pre-wrap text-sm text-red-600">
                {error}
              </p>
            )}

            {lesson && (
              <section
                aria-live="polite"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h2 className="text-xl font-bold text-slate-900">
                  Your generated lesson
                </h2>
                <div className="mt-4 whitespace-pre-wrap leading-7 text-slate-700">
                  {lesson}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

