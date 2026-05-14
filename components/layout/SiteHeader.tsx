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
           <div className="grid size-8 shrink-0 place-items-center rounded-[10px] border border-white/20 bg-white/[0.04] transition-colors hover:bg-white/[0.08] sm:size-9">
        <Box className="size-5 text-white" />
          </div>
          <div>
            <div className="text-[14px] font-bold tracking-[-0.01em] text-white sm:text-[15px]">
              Kernel.io
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