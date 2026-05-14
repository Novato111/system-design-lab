"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  BarChart3,
  Bell,
  Box,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cloud,
  FileText,
  Gauge,
  GitBranch,
  HelpCircle,
  ImageIcon,
  Layers,
  Leaf,
  LinkIcon,
  Mail,
  MessageSquare,
  Network,
  Phone,
  Save,
  Search,
  Send,
  ServerCrash,
  ShoppingCart,
  Star,
  TrendingUp,
  Globe2,
  Zap,
  Users as UsersIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const problemStats = [
  { value: "25+", label: "Interview Problems", icon: Box, tone: "text-[#ff5c00]" },
  { value: "10-60", label: "Est. Time Range", icon: Clock, tone: "text-sky-400" },
  { value: "6", label: "Categories", icon: Layers, tone: "text-emerald-400" },
  { value: "3", label: "Difficulty Levels", icon: Gauge, tone: "text-violet-400" },
];

const problemData = [
  {
    title: "Design Uber",
    description: "Design Uber ride-hailing system. Handle matching, pricing, tracking, and payments at scale.",
    brand: "Uber",
    difficulty: "Hard",
    diffColor: "text-red-300 border-red-400/20 bg-red-500/15",
    time: "45 min",
    category: "Distributed Systems",
    iconTone: "border-white/10 bg-black text-white",
  },
  {
    title: "Design Twitter",
    description: "Design Twitter feed and timeline system. Scale tweets, timelines, and real-time updates.",
    icon: MessageSquare,
    difficulty: "Hard",
    diffColor: "text-red-300 border-red-400/20 bg-red-500/15",
    time: "60 min",
    category: "Distributed Systems",
    iconTone: "border-sky-400/40 bg-sky-500/15 text-sky-400",
  },
  {
    title: "Design WhatsApp",
    description: "Design real-time messaging system with 1-on-1 and group chats, delivery, and presence.",
    icon: Phone,
    difficulty: "Hard",
    diffColor: "text-red-300 border-red-400/20 bg-red-500/15",
    time: "50 min",
    category: "Distributed Systems",
    iconTone: "border-emerald-400/45 bg-emerald-500/15 text-emerald-300",
  },
  {
    title: "Design Netflix",
    description: "Design video streaming platform with recommendation, playback, and content delivery.",
    brand: "N",
    difficulty: "Medium",
    diffColor: "text-amber-300 border-amber-400/20 bg-amber-500/15",
    time: "60 min",
    category: "Streaming",
    iconTone: "border-red-500/45 bg-red-500/10 text-red-500",
  },
  {
    title: "Design URL Shortener",
    description: "Design a URL shortener like bit.ly with analytics and custom aliases.",
    icon: LinkIcon,
    difficulty: "Easy",
    diffColor: "text-emerald-300 border-emerald-400/20 bg-emerald-500/15",
    time: "30 min",
    category: "Web Services",
    iconTone: "border-violet-400/45 bg-violet-500/15 text-violet-300",
  },
  {
    title: "Design Pastebin",
    description: "Design Pastebin clone with syntax highlighting, expiration, and private pastes.",
    icon: FileText,
    difficulty: "Medium",
    diffColor: "text-amber-300 border-amber-400/20 bg-amber-500/15",
    time: "40 min",
    category: "Storage",
    iconTone: "border-blue-400/45 bg-blue-500/15 text-blue-300",
  },
  {
    title: "Design Instagram Feed",
    description: "Design Instagram news feed system with ranking, caching, and media loading.",
    icon: ImageIcon,
    difficulty: "Medium",
    diffColor: "text-amber-300 border-amber-400/20 bg-amber-500/15",
    time: "50 min",
    category: "Distributed Systems",
    iconTone: "border-orange-400/45 bg-gradient-to-br from-fuchsia-500/30 via-red-500/20 to-amber-400/20 text-white",
  },
  {
    title: "Design Notification System",
    description: "Design a notification system with real-time delivery, retries, and preferences.",
    icon: Bell,
    difficulty: "Medium",
    diffColor: "text-amber-300 border-amber-400/20 bg-amber-500/15",
    time: "45 min",
    category: "Messaging",
    iconTone: "border-orange-400/45 bg-orange-500/15 text-orange-300",
  },
  {
    title: "Design E-commerce Store",
    description: "Design e-commerce platform with catalog, cart, orders, and payment flow.",
    icon: ShoppingCart,
    difficulty: "Hard",
    diffColor: "text-red-300 border-red-400/20 bg-red-500/15",
    time: "60 min",
    category: "Distributed Systems",
    iconTone: "border-violet-400/45 bg-violet-500/15 text-violet-300",
  },
];

const orbitProblems = [
  { ...problemData[0], logo: "uber", x: 50, y: 9 },
  { ...problemData[1], logo: "twitter", x: 78, y: 18 },
  { ...problemData[2], logo: "whatsapp", x: 92, y: 42 },
  { ...problemData[4], logo: "link", x: 90, y: 64 },
  { ...problemData[5], logo: "file", x: 76, y: 83 },
  { ...problemData[8], logo: "cart", x: 50, y: 91 },
  { ...problemData[7], logo: "bell", x: 24, y: 83 },
  { ...problemData[6], logo: "instagram", x: 10, y: 63 },
  { ...problemData[3], logo: "netflix", x: 11, y: 40 },
  { ...problemData[4], logo: "link", x: 25, y: 20 },
];

/* =========================================================================
   DARK FEATURE CARD WRAPPER
   Fully opaque, strictly matches the dark textured Feature UI cards
   ========================================================================= */
function DarkFeatureCard({
  children,
  className = "",
  rounded = "rounded-[16px]",
}: {
  children: ReactNode;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-white/[0.09] bg-[#050505] [background-image:linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_24px_80px_rgba(0,0,0,0.4)] ${rounded} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.07),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
}

export function ProblemLibrary() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: direction === "left" ? -carousel.clientWidth * 0.86 : carousel.clientWidth * 0.86,
      behavior: "smooth",
    });
  };

  return (
    <section id="problems" className="relative isolate overflow-hidden border-t border-white/5 bg-[#050505] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 78% 70% at 50% 45%, black 35%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 78% 70% at 50% 45%, black 35%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute left-[12%] top-20 z-0 size-[300px] rounded-full bg-blue-500/5 blur-[100px] sm:size-[420px] sm:blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] top-10 z-0 size-[340px] rounded-full bg-white/[0.035] blur-[110px] sm:size-[520px] sm:blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-[1180px] items-start gap-10 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr]">
        
        {/* LEFT COLUMN: Sticky Header Content */}
        <div className="flex min-w-0 flex-col items-start lg:sticky lg:top-24">
          <div className="mb-5 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.13em] text-[#ff5c00]">
            <Box className="size-4" />
            PROBLEM LIBRARY
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-white sm:text-4xl lg:text-[42px]">
            <span className="text-[#ff5c00]">25+</span> Real Interview Problems, Ready to Solve.
          </h2>

          <p className="mt-5 max-w-[520px] text-sm leading-7 text-zinc-400 sm:text-base lg:max-w-[360px]">
            These are the exact problems asked at FAANG — Uber, Twitter, WhatsApp, Netflix, URL Shortener, Pastebin, Instagram Feed, Notification System, and more.
            <br />
            Each with difficulty tags.
          </p>

          <div className="mt-8 grid w-full grid-cols-2 gap-y-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {problemStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative pr-3 ${index % 2 === 1 ? "border-l border-white/10 pl-4 sm:border-l lg:border-l" : "sm:border-l sm:border-white/10 sm:pl-4 lg:border-l-0 lg:pl-0 xl:border-l xl:pl-4"} ${index === 0 ? "sm:border-l-0 sm:pl-0" : ""}`}
              >
                <stat.icon className={`mb-2 size-4 ${stat.tone}`} />
                <div className="text-xl font-semibold tracking-[-0.03em] text-white">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none relative mt-10 hidden h-36 w-full opacity-30 lg:block">
            <div className="absolute left-0 top-10 h-px w-72 bg-white/10" />
            <div className="absolute left-12 top-6 grid h-11 w-20 place-items-center rounded-lg border border-white/10 text-[10px] text-zinc-600">
              Users
            </div>
            <div className="absolute left-36 top-24 grid h-11 w-24 place-items-center rounded-lg border border-white/10 text-[10px] text-zinc-600">
              API Gateway
            </div>
            <div className="absolute right-6 top-0 grid h-11 w-24 place-items-center rounded-lg border border-white/10 text-[10px] text-zinc-600">
              Notification
            </div>
            <div className="absolute right-4 bottom-0 grid h-14 w-20 place-items-center rounded-lg border border-white/10 text-[10px] text-zinc-600">
              Storage
            </div>
          </div>

          <div className="mt-8 hidden w-full lg:flex">
            <Link
              href="/problems"
              className="group flex h-14 w-full max-w-[310px] items-center justify-center gap-3 rounded-[12px] border border-white/[0.08] bg-white/[0.025] text-base font-semibold text-[#ff5c00] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-[#ff5c00]/35 hover:bg-[#ff5c00]/5"
            >
              View all 25 problems
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Orbit on desktop, carousel on smaller screens */}
        <div className="hidden min-w-0 lg:block">
          <ProblemOrbit />
        </div>

        <div className="min-w-0 lg:hidden">
          <div className="mb-3 flex items-center justify-between sm:hidden">
            <p className="text-xs font-medium text-zinc-500">Swipe or use arrows</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous problem"
                onClick={() => scrollCarousel("left")}
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:bg-white/[0.08]"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next problem"
                onClick={() => scrollCarousel("right")}
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:bg-white/[0.08]"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="-mx-4 flex min-w-0 snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0"
          >
            {problemData.map((problem, i) => (
              <motion.article
                initial={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                key={problem.title}
                className="group relative flex min-h-[190px] w-[82vw] max-w-[340px] shrink-0 snap-center cursor-pointer flex-col overflow-hidden rounded-[12px] border border-white/[0.11] bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.065] md:min-h-[208px] md:w-auto md:max-w-none md:p-5"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-70" />

                <div className="flex min-w-0 items-start justify-between gap-3">
                  <div className="flex min-w-0 items-start gap-3.5">
                    <div className={`grid size-12 shrink-0 place-items-center rounded-[10px] border text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:size-14 ${problem.iconTone}`}>
                      {problem.brand ? (
                        <span className={problem.brand === "N" ? "text-3xl font-black tracking-[-0.08em]" : "text-base font-medium tracking-[-0.08em]"}>
                          {problem.brand}
                        </span>
                      ) : (
                        problem.icon && <problem.icon className="size-6 sm:size-7" />
                      )}
                    </div>
                    
                    <div className="min-w-0">
                      <h3 className="max-w-full text-base font-semibold leading-5 tracking-[-0.02em] text-white/95 transition-colors group-hover:text-white sm:text-[17px] sm:leading-6">
                        {problem.title}
                      </h3>
                      <div className={`mt-2 w-fit rounded-[6px] border px-2 py-1 text-xs font-medium leading-none ${problem.diffColor}`}>
                        {problem.difficulty}
                      </div>
                    </div>
                  </div>
                  
                  <ChevronRight className="mt-1 size-4 shrink-0 text-zinc-300 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </div>

                <p className="mt-4 min-h-[58px] text-[13px] leading-6 text-zinc-300/80 sm:mt-5">
                  {problem.description}
                </p>

                <div className="mt-auto flex min-w-0 items-center gap-3 border-t border-white/10 pt-3.5 text-xs font-medium text-zinc-300/80">
                  <div className="flex shrink-0 items-center gap-1.5">
                    <Clock className="size-4" />
                    {problem.time}
                  </div>
                  <div className="h-6 w-px bg-white/10" />
                  <div className="min-w-0 truncate">{problem.category}</div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Action */}
          <div className="mt-3.5 flex justify-center rounded-[12px] border border-white/[0.08] bg-white/[0.025] py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <Link 
              href="/problems" 
              className="group flex items-center gap-2.5 text-sm font-medium text-[#ff5c00] underline underline-offset-4 transition-colors hover:text-[#ff7a33] sm:text-base"
            >
              View all 25 problems 
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
      
    </section>
  );
}

function ProblemOrbit() {
  return (
    <div className="relative ml-auto aspect-square w-full max-w-[620px] xl:max-w-[680px]">
      
      {/* Animated Rotating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[10%] rounded-full border border-dashed border-white/10 shadow-[0_0_70px_rgba(148,163,184,0.12)]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[29%] rounded-full border border-dashed border-white/[0.07]"
      />
      <div className="absolute inset-[19%] rounded-full border border-white/[0.04]" />
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.16),transparent_34%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.055),transparent_12%)]" />

      {/* SVG Flow Lines */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <filter id="orbitGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {orbitProblems.map((problem, index) => (
          <g key={`${problem.title}-${index}`} filter="url(#orbitGlow)">
            
            <path
              className="orbit-flow-line"
              d={`M${problem.x} ${problem.y} C ${(50 + problem.x) / 2 + (index % 2 === 0 ? 2.4 : -2.4)} ${(50 + problem.y) / 2 - 2}, ${(50 + problem.x) / 2 + (index % 3 === 0 ? -2.8 : 2.8)} ${(50 + problem.y) / 2 + 2}, 50 50`}
              stroke="rgba(226,232,240,0.72)"
              strokeWidth="0.36"
              strokeDasharray="1.35 1.8"
              strokeDashoffset="0"
              fill="none"
              strokeLinecap="round"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-6.3" dur="1.4s" repeatCount="indefinite" />
            </path>
          </g>
        ))}
      </svg>

      {/* Pulsing Center Hub with Opaque Dark Feature Card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <DarkFeatureCard className="h-[128px] w-[128px] xl:h-[160px] xl:w-[160px]" rounded="rounded-[24px]">
            <div className="text-center relative z-10">
              <Layers className="mx-auto size-11 text-slate-200 xl:size-14" />
              <div className="mt-3 text-sm font-bold text-white xl:text-base">System Design</div>
            </div>
          </DarkFeatureCard>
        </motion.div>
      </div>

      {/* Floating Company Nodes with Opaque Dark Feature Card */}
      {orbitProblems.map((problem, index) => (
        <motion.div
          key={`${problem.title}-node-${index}`}
          className="absolute  flex w-[112px]  -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center xl:w-[122px]"
          style={{ left: `${problem.x}%`, top: `${problem.y}%` }}
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4, // Staggered floating effect
          }}
        >
          {/* Note: Removed 'problem.iconTone' here to enforce the dark textured base strictly */}
          <DarkFeatureCard 
            className="h-[52px] w-[52px] xl:h-[60px] xl:w-[60px]" 
            rounded="rounded-[15px]"
          >
            <OrbitLogo type={problem.logo} />
          </DarkFeatureCard>

          <div className="mt-3 text-xs  font-bold leading-4 text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] xl:text-[13px]">
            {problem.title}
          </div>
          <div className={`mt-1.5 w-fit rounded-[6px] border px-1.5 py-0.5 text-[10px] font-medium leading-none shadow-lg ${problem.diffColor}`}>
            {problem.difficulty}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function OrbitLogo({ type }: { type?: string }) {
  if (type === "uber") {
    return <span className="text-base font-medium tracking-[-0.08em] text-white xl:text-lg">Uber</span>;
  }

  if (type === "netflix") {
    return <span className="text-3xl font-black tracking-[-0.08em] text-red-500 xl:text-4xl">N</span>;
  }

  if (type === "twitter") {
    return (
      <svg viewBox="0 0 24 24" className="size-7 fill-sky-400 xl:size-8" aria-hidden="true">
        <path d="M21.5 5.7c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.6.8-2.6 1-1.5-1.6-4.2-.8-4.7 1.4-.1.4-.1.8 0 1.1-3.2-.2-6-1.7-7.9-4-.4.7-.6 1.5-.4 2.4.2 1 .8 1.8 1.6 2.3-.6 0-1.2-.2-1.7-.5 0 1.8 1.3 3.3 3 3.6-.5.1-1.1.2-1.7.1.5 1.5 1.9 2.6 3.6 2.7-1.6 1.3-3.6 2-5.8 2h-.7c2.1 1.3 4.5 2.1 7.1 2.1 8.5 0 13.3-7.2 13-13.6.9-.6 1.5-1.3 2.1-2.1Z" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className="size-7  pfill-none stroke-emerald-400 stroke-[2.2] xl:size-8" aria-hidden="true">
        <path className="h-2 " d="M4.7 19.4 6 15.7A7.4 7.4 0 1 1 9 18.6l-4.3.8Z" />
      <path d="M9.1 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3 0 .5.4.8 1.2 1.6 2.1 2.1.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .6-.4 1.4-.9 1.6-.8.3-2 .1-3.5-.7-1.9-1-3.5-2.6-4.4-4.4-.5-1-.7-1.7-.5-2.2Z"
 />
      </svg>
    );
  }

  if (type === "instagram") {
    return <ImageIcon className="size-6 text-fuchsia-400 xl:size-7" />;
  }

  if (type === "link") return <LinkIcon className="size-6 text-violet-300 xl:size-7" />;
  if (type === "file") return <FileText className="size-6 text-blue-300 xl:size-7" />;
  if (type === "cart") return <ShoppingCart className="size-6 text-violet-300 xl:size-7" />;
  if (type === "bell") return <Bell className="size-6 text-orange-300 xl:size-7" />;

  return <Box className="size-6 text-white xl:size-7" />;
}