"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = ["Features", "How It Works", "Problems", "Pricing"];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-[100] px-3 sm:top-6 sm:px-4">
      {/* 
        Added `overflow-hidden` so the shine doesn't spill out, 
        and `relative` to contain the absolute shine layer.
      */}
      <div className="relative mx-auto flex h-[58px] max-w-[1120px] items-center justify-between overflow-hidden rounded-[16px] border border-white/[0.1] bg-[#111111]/85 px-3 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_16px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:h-[64px] sm:px-4 lg:h-[68px]">
        
        {/* --- SHINE EFFECT --- */}
        <motion.div
          className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["-100%", "400%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 5, 
            ease: "linear",
            repeatDelay: 1 // Slight pause between sweeps
          }}
        />

        <Link href="/" className="relative z-10 flex min-w-0 items-center gap-2.5">
          <div className="grid size-8 shrink-0 place-items-center rounded-[10px] border border-[#ff5c00]/30 bg-[#ff5c00]/10 transition-colors hover:bg-[#ff5c00]/20 sm:size-9">
           <svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <radialGradient id="blobGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2A2A2A" />
      <stop offset="100%" stop-color="#050505" />
    </radialGradient>

    <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <path
    d="M24.5 4C33 4 41 10 42.8 18.5C44.8 28 40.5 39 30.5 42.5C20.8 45.8 9.8 41.2 6 31.5C2.2 22 5.5 10.5 15 6.2C18 4.8 21.2 4 24.5 4Z"
    fill="url(#blobGradient)"
    filter="url(#blurGlow)"
  />
</svg>
          </div>
          <div>
            <div className="text-[14px] font-bold tracking-[-0.01em] text-white sm:text-[15px]">
              Kernel
            </div>
           
          </div>
        </Link>

        {/* Cleaned up Nav items */}
        <nav className="relative z-10 hidden items-center gap-9 text-sm font-medium text-white/70 lg:flex">
          {navItems.map((item) => (
            <Link key={item} href={`#${slugify(item)}`} className="transition-colors hover:text-white">
              {item}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            className="hidden h-11 rounded-[10px] px-5 text-white/70 hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            <Link href="/coming-soon">Log in</Link>
          </Button>
          <Button
            asChild
            className="h-9 rounded-[10px] bg-white px-3 text-xs font-semibold text-black shadow-[0_0_28px_rgba(255,255,255,0.18)] transition-all hover:scale-105 hover:bg-zinc-200 sm:h-10 sm:px-4 sm:text-sm lg:h-11 lg:px-5"
          >
            <Link href="/coming-soon">
              Start for Free <ArrowRight className="ml-1.5 size-3.5 sm:size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}