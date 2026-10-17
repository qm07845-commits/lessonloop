"use client";

export default function GeneratorPage() {
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
                placeholder="e.g. Equivalent fractions"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Lesson length
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3">
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>60 minutes</option>
                <option>90 minutes</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Student level
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3">
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
                placeholder="e.g. Struggles to understand fractions visually…"
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="button"
              className="mt-2 w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              onClick={() => alert("LessonLoop is working! 🎉")}
            >
              Generate my lesson 🤖
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
