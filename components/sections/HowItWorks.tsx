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
  Database,
  Server,
  MonitorSmartphone,
  ShieldAlert,
} from "lucide-react";

const workflowSteps = [
  {
    title: "Pick a Problem",
    text: "Choose from curated problems with real interview difficulty.",
  },
  {
    title: "Build Your Architecture",
    text: "Drag components onto the canvas, connect them, think through your design.",
  },
  {
    title: "Run the Simulation",
    text: "Watch your system handle traffic spikes, crashes, and failures in real time.",
  },
  {
    title: "Get Evaluated",
    text: "Receive a detailed score, detected traffic paths, issues, and suggestions.",
  },
];

// High-fidelity internal UI for the cards
function StepCardUI({ index }: { index: number }) {
  // 1. Problem Library
  if (index === 0) {
    return (
      <div className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <h4 className="text-sm font-semibold text-white">Problem Library</h4>
          <Search className="size-4 text-zinc-500" />
        </div>
        <div className="flex-1 space-y-2.5">
          {[
            { name: "Design Uber", diff: "Hard", tone: "text-red-400 bg-red-400/10", time: "45m", icon: Globe2 },
            { name: "Design Twitter", diff: "Hard", tone: "text-red-400 bg-red-400/10", time: "60m", icon: MessageSquare },
            { name: "URL Shortener", diff: "Medium", tone: "text-orange-400 bg-orange-400/10", time: "30m", icon: LinkIcon },
            { name: "Instagram Feed", diff: "Medium", tone: "text-orange-400 bg-orange-400/10", time: "50m", icon: ImageIcon },
            { name: "Notification Sys", diff: "Medium", tone: "text-orange-400 bg-orange-400/10", time: "40m", icon: Bell },
          ].map((item) => (
            <div key={item.name} className="flex cursor-pointer items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-3 transition hover:bg-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="grid size-8 place-items-center rounded-md bg-black/40 border border-white/5 text-zinc-400">
                  <item.icon className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-200">{item.name}</div>
                  <div className="mt-0.5 text-[10px] text-zinc-500">{item.time} estimated</div>
                </div>
              </div>
              <span className={`rounded-md px-2 py-1 text-[10px] font-semibold ${item.tone}`}>{item.diff}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 2. Build Architecture (Canvas Mock)
  if (index === 1) {
    return (
      <div className="relative flex h-full items-center justify-center p-6">
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative h-[280px] w-full max-w-[340px]">
          {/* Edges */}
          <div className="absolute left-[50%] top-[15%] h-12 w-px bg-white/20" />
          <div className="absolute left-[30%] top-[40%] h-px w-[40%] bg-white/20" />
          <div className="absolute left-[30%] top-[40%] h-12 w-px bg-white/20" />
          <div className="absolute left-[70%] top-[40%] h-12 w-px bg-white/20" />
          <div className="absolute left-[30%] top-[65%] h-10 w-px bg-white/20" />
          <div className="absolute left-[70%] top-[65%] h-10 w-px bg-white/20" />

          {/* Nodes */}
          <MockNode className="left-[50%] top-[10%] text-orange-400" label="Load Balancer" icon={Network} />
          <MockNode className="left-[50%] top-[35%] text-sky-400" label="API Gateway" icon={Server} />
          <MockNode className="left-[30%] top-[58%] text-indigo-400" label="Auth Service" icon={ShieldAlert} />
          <MockNode className="left-[70%] top-[58%] text-indigo-400" label="User Service" icon={UsersIcon} />
          <MockNode className="left-[30%] top-[82%] text-emerald-400" label="Redis Cache" icon={Database} />
          <MockNode className="left-[70%] top-[82%] text-violet-400" label="PostgreSQL" icon={Database} />
        </div>
      </div>
    );
  }

  // 3. Simulation Mock
  if (index === 2) {
    return (
      <div className="flex h-full flex-col p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
           <h4 className="text-sm font-semibold text-white">Live Simulation</h4>
           <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
             <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Running
           </span>
        </div>
        
        {/* Mock Chart */}
        <div className="mt-4 flex-1 rounded-lg border border-white/5 bg-black/40 p-4 relative overflow-hidden">
           <div className="absolute top-3 left-3 text-[10px] font-medium text-zinc-500">Traffic (req/s)</div>
           <div className="absolute top-3 right-3 text-[10px] font-medium text-orange-400">14,203 Spike</div>
           <div className="absolute inset-x-0 bottom-0 h-24">
             <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,80 L10,75 L20,80 L30,60 L40,65 L50,85 L60,20 L70,30 L80,50 L90,45 L100,50" fill="none" stroke="rgba(249, 115, 22, 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0,80 L10,75 L20,80 L30,60 L40,65 L50,85 L60,20 L70,30 L80,50 L90,45 L100,50 L100,100 L0,100 Z" fill="url(#orange-glow)" opacity="0.2" />
                <defs>
                  <linearGradient id="orange-glow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
             </svg>
           </div>
        </div>

        {/* Mock Logs */}
        <div className="mt-4 space-y-2">
           {[
             { time: "00:14", event: "Traffic spiked to 14k req/s", tone: "text-orange-400" },
             { time: "00:18", event: "Database connection saturated", tone: "text-red-400" },
             { time: "00:22", event: "API Gateway latency increased", tone: "text-orange-400" },
           ].map((log, i) => (
             <div key={i} className="flex items-center gap-3 rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 text-[11px]">
               <span className="text-zinc-500">{log.time}</span>
               <span className={log.tone}>{log.event}</span>
             </div>
           ))}
        </div>
      </div>
    );
  }

  // 4. Evaluation Score
  return (
    <div className="flex h-full flex-col p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <div className="flex items-center gap-4">
          <div className="relative grid size-16 place-items-center rounded-full border-4 border-zinc-800">
            <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="none" stroke="#22c55e" strokeWidth="8" strokeDasharray="289" strokeDashoffset="52" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-bold text-white">82</span>
          </div>
          <div>
            <div className="text-sm font-bold text-white">System Score</div>
            <div className="text-[11px] text-zinc-500">Good, but needs optimization</div>
          </div>
        </div>
      </div>
      
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          { label: "Reliability", score: "18/20", color: "text-emerald-400" },
          { label: "Scalability", score: "16/20", color: "text-emerald-400" },
          { label: "Performance", score: "17/20", color: "text-orange-400" },
          { label: "Security", score: "15/20", color: "text-orange-400" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-white/5 bg-black/20 p-3">
             <div className="text-[10px] text-zinc-500">{stat.label}</div>
             <div className={`mt-1 text-sm font-semibold ${stat.color}`}>{stat.score}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
         <h4 className="text-xs font-semibold text-zinc-300 mb-3">Detected Issues</h4>
         <div className="space-y-2">
            <div className="flex items-center justify-between rounded-md border border-red-500/20 bg-red-500/10 px-3 py-2 text-[11px]">
               <span className="flex items-center gap-2 text-zinc-200"><ServerCrash className="size-3 text-red-400"/> Single Point of Failure</span>
               <span className="text-red-400 font-medium">High</span>
            </div>
            <div className="flex items-center justify-between rounded-md border border-orange-500/20 bg-orange-500/10 px-3 py-2 text-[11px]">
               <span className="flex items-center gap-2 text-zinc-200"><Database className="size-3 text-orange-400"/> Missing Cache Layer</span>
               <span className="text-orange-400 font-medium">Medium</span>
            </div>
         </div>
      </div>
    </div>
  );
}

function MockNode({ className, label, icon: Icon, tone }: any) {
  return (
    <div className={`absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 ${className}`}>
      <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-black text-inherit shadow-lg">
        <Icon className="size-5" />
      </div>
      <span className="text-[9px] font-medium text-zinc-300">{label}</span>
    </div>
  );
}


/* =========================================================================
   HOW IT WORKS SECTION 
   Refactored for perfect sizing, constrained width, and premium dark cards.
   ========================================================================= */

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      
      if (scrollable <= 0) return;

      const nextProgress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const nextStep = Math.min(
        workflowSteps.length - 1,
        Math.max(0, Math.round(nextProgress * (workflowSteps.length - 1)))
      );

      setScrollProgress(nextProgress);
      setActiveStep(nextStep);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToStep = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const scrollable = section.offsetHeight - window.innerHeight;

    window.scrollTo({
      top: sectionTop + scrollable * (index / (workflowSteps.length - 1)),
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative bg-[#050505] px-4 py-16 text-white sm:px-6 lg:h-[400vh] lg:py-0"
    >
      {/* 
        CRITICAL FIX: 
        Constrained max-w-[1080px] instead of full width. 
        Centered with mx-auto to leave perfectly proportioned space left and right.
      */}
      <div className="mx-auto max-w-[1080px] lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-16">
        
        {/* Centered Mobile/Tablet Header */}
        <div className="mx-auto max-w-[640px] text-center lg:mb-12 lg:text-left lg:mx-0">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#ff5c00] sm:text-sm">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:mt-4 lg:text-[42px]">
            Simple workflow. Deep practice.
          </h2>
        </div>

        {/* 
          MOBILE LAYOUT: Simple stacked cards 
        */}
        <div className="mt-10 grid gap-6 lg:hidden">
          {workflowSteps.map((step, index) => (
            <article key={step.title} className="flex flex-col gap-4">
              <div className="flex items-center gap-3 px-2">
                <span className="grid size-8 place-items-center rounded-lg border border-[#ff5c00]/30 bg-[#ff5c00]/10 text-xs font-bold text-[#ff5c00]">
                  0{index + 1}
                </span>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
              </div>
              <p className="px-2 text-sm text-zinc-400">{step.text}</p>
              
              {/* Mobile Premium Card */}
              <div className="relative h-[380px] overflow-hidden rounded-[16px] border border-white/[0.09] bg-[#050505] [background-image:linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_24px_80px_rgba(0,0,0,0.4)]">
                 <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                 <StepCardUI index={index} />
              </div>
            </article>
          ))}
        </div>

        {/* 
          DESKTOP LAYOUT: Left navigation, Right fixed sticky-card 
          Grid uses tighter proportions (380px left menu, remaining space right)
        */}
        <div className="hidden lg:grid lg:grid-cols-[360px_1fr] lg:items-center lg:gap-16 xl:grid-cols-[400px_1fr]">
          
          {/* Left Navigation */}
          <aside className="relative">
            <div className="absolute left-[22px] top-6 h-[calc(100%-48px)] w-px bg-white/10" />
            <div
              className="absolute left-[22px] top-6 w-px bg-[#ff5c00]"
              style={{ height: `${scrollProgress * 100}%` }}
            />

            <div className="space-y-6">
              {workflowSteps.map((step, index) => {
                const active = activeStep === index;
                const complete = activeStep > index;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => scrollToStep(index)}
                    className={`relative w-full rounded-xl py-4 pl-16 pr-4 text-left transition-all ${
                      active ? "bg-white/[0.03]" : "bg-transparent hover:bg-white/[0.02]"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-[18px] grid size-11 place-items-center rounded-full border-2 bg-[#050505] text-sm font-bold transition-all ${
                        active || complete
                          ? "border-[#ff5c00] text-[#ff5c00] shadow-[0_0_0_4px_rgba(255,92,0,0.1)]"
                          : "border-white/10 text-zinc-500"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <h3 className={`text-base font-bold transition-colors ${active ? "text-white" : "text-zinc-300"}`}>
                      {step.title}
                    </h3>
                    <p className={`mt-2 text-sm leading-6 transition-colors ${active ? "text-zinc-400" : "text-zinc-500"}`}>
                      {step.text}
                    </p>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right Floating Card Stack (Sleek, constrained size) */}
          <div className="relative mx-auto h-[440px] w-full max-w-[540px]">
            {workflowSteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 h-full w-full transition-all duration-500 ease-in-out ${
                    isActive
                      ? "opacity-100 translate-y-0 z-10 pointer-events-auto scale-100"
                      : "opacity-0 translate-y-8 z-0 pointer-events-none scale-95"
                  }`}
                >
                  {/* Premium Feature Card Wrapper */}
                  <div className="relative h-full w-full overflow-hidden rounded-[16px] border border-white/[0.09] bg-[#050505] [background-image:linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_24px_80px_rgba(0,0,0,0.4)]">
                     {/* Glossy top border & radial glow */}
                     <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_28%)]" />
                     <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                     
                     <StepCardUI index={index} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}