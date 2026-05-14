import Link from "next/link";
import { ArrowLeft, Box, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ComingSoonPage() {
  return (
    <main className="relative grid min-h-screen overflow-hidden bg-[#050505] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_30%,rgba(249,115,22,0.13),transparent_34%),radial-gradient(circle_at_50%_72%,rgba(255,255,255,0.06),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      <section className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center justify-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.08] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-orange-400">
          <Sparkles className="size-3.5" />
          Launching Soon
        </div>

        <div className="grid size-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_rgba(0,0,0,0.5)]">
          <Box className="size-8 text-white" />
        </div>

        <h1 className="mt-7 max-w-[680px] text-4xl font-extrabold leading-[1.05] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
          Thank you for showing interest.
        </h1>
        <p className="mt-5 max-w-[540px] text-base leading-7 text-zinc-400 sm:text-lg">
          SysDesign Lab is getting ready for launch. We are polishing the practice experience and will open access soon.
        </p>

        <Button
          asChild
          className="mt-9 h-11 rounded-[12px] bg-white px-5 text-sm font-bold text-black shadow-[0_0_28px_rgba(255,255,255,0.16)] hover:bg-zinc-200"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>
      </section>
    </main>
  );
}
