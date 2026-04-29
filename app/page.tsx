import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-50 text-zinc-900">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">
          System Design Practice Lab
        </h1>
        <p className="text-xl text-zinc-600">
          Build architectures, simulate traffic, and get evaluated by AI. Master
          system design through hands-on practice, not just reading.
        </p>
        <div className="pt-4">
          <Link
            href="/problems"
            className="px-8 py-4 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors inline-block"
          >
            Start Practicing
          </Link>
        </div>
      </div>
    </main>
  );
}
