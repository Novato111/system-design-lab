"use client";

import Link from "next/link";
import { Box, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#050505] pt-20">
      {/* Radial Glow Behind Content */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center">
        <div className="h-[300px] w-[600px] -translate-y-1/2 rounded-full bg-[#ff5c00]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center px-5 text-center lg:px-8">
        
        {/* Minimal Branding */}
        <div className="mb-5 grid size-12 place-items-center rounded-xl border border-[#ff5c00]/30 bg-[#ff5c00]/10 text-[#ff5c00]">
          <Box className="size-6" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">SysDesign Lab</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
          The modern system design simulator. Drop your email below to get early access when we launch.
        </p>

        {/* Basic Email Collector */}
        <form className="mx-auto mt-8 flex w-full max-w-md items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] shadow-sm transition-colors focus-within:border-[#ff5c00]/50 focus-within:bg-white/[0.04] focus-within:ring-1 focus-within:ring-[#ff5c00]/50">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <div className="grid place-items-center pl-4 text-zinc-500">
            <Mail className="size-4" />
          </div>
          <input
            id="email"
            type="email"
            required
            className="w-full min-w-0 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-zinc-600"
            placeholder="hello@example.com"
          />
          <button
            type="submit"
            className="flex h-full shrink-0 items-center justify-center bg-white px-5 text-sm font-bold text-black transition-colors hover:bg-zinc-200 sm:px-6"
          >
            Notify Me
          </button>
        </form>

        {/* Minimal Bottom Links */}
        <div className="mt-20 flex w-full flex-col items-center justify-between gap-4 pb-8 text-xs text-zinc-600 sm:flex-row sm:text-sm">
          <p>© 2026 SysDesign Lab. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="transition-colors hover:text-white">Twitter</Link>
            <Link href="#" className="transition-colors hover:text-white">GitHub</Link>
          </div>
        </div>
      </div>

      {/* Fast Marquee "Launching Soon" Bottom Bar */}
      <div className="relative flex h-14 w-full items-center overflow-hidden bg-gradient-to-r from-[#e65300] via-[#ff5c00] to-[#ff7a1a]">
        {/* Subtle Construction Stripes Overlay */}
        
        {/* Marquee Animation Container */}
        <motion.div
          className="relative z-10 flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 15, // Lower this number to make it scroll even faster
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {/* Half 1 */}
          <div className="flex">
            {[...Array(12)].map((_, i) => (
              <span key={`first-${i}`} className="mx-6 text-xs font-black uppercase tracking-[0.3em] text-white/95 drop-shadow-md sm:text-sm">
                Launching soon !
              </span>
            ))}
          </div>
          {/* Half 2 (Exact duplicate for seamless looping) */}
          <div className="flex">
            {[...Array(12)].map((_, i) => (
              <span key={`second-${i}`} className="mx-6 text-xs font-black uppercase tracking-[0.3em] text-white/95 drop-shadow-md sm:text-sm">
                Launching soon !
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}