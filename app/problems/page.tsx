"use client";

import Link from "next/link";
import problems from "@/data/problems.json";
import posthog from "posthog-js";

export default function ProblemsPage() {
  return (
    <main className="min-h-screen p-12 bg-zinc-50">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            Problem Library
          </h1>
          <p className="text-zinc-600 mt-2">
            Select an architecture challenge to begin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-zinc-900">
                  {problem.title}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    problem.difficulty === "Hard"
                      ? "bg-red-100 text-red-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {problem.difficulty}
                </span>
              </div>

              <p className="text-zinc-600 text-sm mb-6 h-12">
                {problem.description}
              </p>

              <Link
                href={`/canvas/${problem.id}`}
                className="inline-flex w-full justify-center px-4 py-2 bg-zinc-100 text-zinc-900 rounded-md font-medium hover:bg-zinc-200 transition-colors"
                onClick={() =>
                  posthog.capture("problem_selected", {
                    problem_id: problem.id,
                    problem_title: problem.title,
                    difficulty: problem.difficulty,
                  })
                }
              >
                Launch Simulator
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
