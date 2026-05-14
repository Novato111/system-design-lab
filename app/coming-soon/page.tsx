import Link from "next/link";
import { ArrowLeft, Box, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ComingSoonPage() {
  return (
    <main className="relative grid min-h-[100svh] overflow-hidden bg-[#050505] px-4 py-6 text-white sm:px-6 sm:py-10 lg:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:36px_36px] sm:[background-size:52px_52px]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_50%_22%,rgba(249,115,22,0.13),transparent_34%),radial-gradient(circle_at_50%_76%,rgba(255,255,255,0.055),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050505] to-transparent sm:h-40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] to-transparent sm:h-40" />

      <section className="relative z-10 mx-auto flex w-full max-w-[680px] flex-col items-center justify-center text-center">
        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-orange-400 sm:mb-6 sm:text-[11px]">
          <Sparkles className="size-3.5" />
          Launching Soon
        </div>

        <div className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_rgba(0,0,0,0.5)] sm:size-16">
          <Box className="size-7 text-white sm:size-8" />
        </div>

        <h1 className="mt-6 max-w-[640px] text-[34px] font-extrabold leading-[1.06] tracking-[-0.045em] text-white sm:mt-7 sm:text-5xl lg:text-[56px]">
          Thank you for showing interest.
        </h1>
        <p className="mt-4 max-w-[520px] text-sm leading-6 text-zinc-400 sm:mt-5 sm:text-base sm:leading-7">
          SysDesign Lab is getting ready for launch. We are polishing the practice experience and will open access soon.
        </p>

        <Button
          asChild
          className="mt-8 h-11 w-full max-w-[220px] rounded-[12px] bg-white px-5 text-sm font-bold text-black shadow-[0_0_28px_rgba(255,255,255,0.16)] hover:bg-zinc-200 sm:mt-9"
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
