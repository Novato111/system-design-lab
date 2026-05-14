"use client";

import Image from "next/image";
import Link from "next/link";

import { animate, motion } from "framer-motion";
import {
  ArrowRight,
  

  Star,


  Users as UsersIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

// Snappy, fast easing curve for that premium Apple/Vercel feel
const snappyEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Fast wave effect between elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: snappyEase,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative isolate flex w-full items-center justify-center overflow-hidden bg-[#050505] px-4 pb-14 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-36">
      
      {/* --- BULLETPROOF ROW/COL LINE GRID (Fade in smoothly) --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      >
        {/* Pure CSS Grid - Guaranteed to render */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)'
          }}
        />

        {/* Soft White Ambient Spotlights */}
        <div className="absolute left-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-white opacity-[0.03] blur-[100px]" />
        <div className="absolute right-[15%] top-[25%] h-[600px] w-[600px] rounded-full bg-white opacity-[0.03] blur-[120px]" />

        {/* Bottom fade out so the grid ends exactly where the hero ends */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
      </motion.div>
      {/* ------------------------------------------------ */}

      {/* Animated Grid Layout Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-[2] mx-auto grid w-full max-w-[1180px] items-center gap-8 lg:grid-cols-[410px_minmax(520px,1fr)] xl:gap-12"
      >
        
        {/* LEFT COLUMN: Content */}
        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          
          <motion.div
          //@ts-expect-error
            variants={itemVariants}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-300 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:mb-6 sm:text-[10px]"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9BE870] opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#9BE870]"></span>
            </span>
            <span>Practice. Visualize. Master.</span>
          </motion.div>
          
          <motion.h1
            //@ts-expect-error
            variants={itemVariants}
            className="max-w-[680px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-[42px] lg:text-[52px]"
          >
            Practice System Design Like It&apos;s{" "}
            <span className="text-[#9BE870]">Production.</span>
          </motion.h1>
          
          <motion.p
            //@ts-expect-error
            variants={itemVariants}
            className="mt-5 max-w-[430px] text-sm leading-7 text-zinc-400 sm:text-base"
          >
            Build real-world architectures on an interactive canvas, simulate failures, get AI feedback, and level up for your next system design interview.
          </motion.p>
          
          <motion.form
            //@ts-expect-error
            variants={itemVariants}
            className="mt-7 grid w-full max-w-[430px] gap-2.5 sm:grid-cols-[1fr_auto]"
          >
            <label className="sr-only" htmlFor="hero-email">Email</label>
            <input
              id="hero-email"
              className="h-11 min-w-0 flex-1 rounded-[10px] border border-white/10 bg-[#111111]/50 px-4 text-sm text-white outline-none backdrop-blur-md transition placeholder:text-zinc-500 focus:border-white/30 focus:ring-1 focus:ring-white/30 sm:h-12"
              placeholder="Enter your email"
            />
            <Button
              asChild
              size="lg"
              className="h-11 shrink-0 rounded-[10px] bg-white px-5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-[1.02] hover:bg-zinc-200 sm:h-12"
            >
              <Link href="/problems">
                Start Designing for Free <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.form>

          <motion.div
            //@ts-expect-error
            variants={itemVariants}
            className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <div className="flex -space-x-3">
              {[["AS", "#8b5e3c"], ["RK", "#334155"], ["PM", "#7c2d12"], ["NJ", "#52525b"]].map(([initial, color]) => (
                <div
                  key={initial}
                  className="grid size-9 place-items-center rounded-full border-2 border-[#050505] text-[10px] font-bold text-white shadow-sm"
                  style={{ backgroundColor: color }}
                >
                  {initial}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-xs font-medium text-zinc-500 sm:text-[13px]">Upvoted by 25+ engineers worldwide</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Animated Image Card */}
        <motion.div 
          //@ts-expect-error
          variants={itemVariants}
          className="relative flex w-full min-w-0 items-center justify-center"
        >
          <div
            className="relative w-full max-w-[640px] overflow-hidden rounded-[16px] border border-white/10 bg-[#0B0B0C] p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl perspective-[1000px] lg:max-w-none"
          >
            <div className="absolute inset-x-0 top-0 z-20 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="absolute inset-x-0 top-0 z-10 h-[6px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[2px]" />
            
            <Image
              src="/hero.jpg"
              alt="SysDesign Lab dashboard"
              width={1240}
              height={800}
              priority
              unoptimized
              className="h-auto max-h-[320px] w-full rounded-[12px] object-cover object-left-top ring-1 ring-white/10 sm:max-h-[420px] lg:max-h-none"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}