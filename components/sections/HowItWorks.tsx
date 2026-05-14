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

// Reusable premium easing curve for that "shadcn" feel
const premiumEase = [0.06, 1, 0.3, 1] as const;

function StepCardUI({ index }: { index: number }) {
  // Card 1: Problem Library
  if (index === 0) {
    return (
      <div className="flex h-full flex-col justify-between space-y-4 rounded-xl border border-white/5 bg-[#16161a] p-6">
        <h4 className="text-sm font-semibold text-slate-300">Problem Library</h4>
        <div className="space-y-3">
          {[
            { name: "Design Uber", diff: "Hard", color: "text-red-400 bg-red-400/10", time: "45 min" },
            { name: "Design Twitter Feed", diff: "Hard", color: "text-red-400 bg-red-400/10", time: "60 min" },
            { name: "Design URL Shortener", diff: "Medium", color: "text-orange-400 bg-orange-400/10", time: "30 min" },
            { name: "Design Instagram Feed", diff: "Medium", color: "text-orange-400 bg-orange-400/10", time: "50 min" },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-lg border border-white/5 p-3 hover:bg-white/5">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-200">{item.name}</span>
                <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${item.color}`}>{item.diff}</span>
              </div>
              <span className="text-sm text-slate-500">{item.time}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm font-medium text-orange-500 hover:text-orange-400 cursor-pointer">
          View all problems →
        </p>
      </div>
    );
  }

  // Card 2: Build Architecture Canvas Mock
  if (index === 1) {
    return (
      <div className="relative flex h-full items-center justify-center rounded-xl border border-white/5 bg-[#0d0d10] p-6 shadow-inner overflow-hidden">
        {/* Mock Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative flex flex-col items-center gap-8">
          <div className="rounded-md border border-orange-500/30 bg-orange-500/10 px-6 py-2 text-sm text-orange-400">Load Balancer</div>
          <div className="h-8 w-px bg-slate-700"></div>
          <div className="rounded-md border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm text-blue-400">API Gateway</div>
          <div className="flex gap-8">
             <div className="flex flex-col items-center gap-6 mt-6">
                <div className="h-6 w-px bg-slate-700"></div>
                <div className="rounded-md border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm text-blue-400">Auth Service</div>
                <div className="h-6 w-px bg-slate-700"></div>
                <div className="rounded-md border border-green-500/30 bg-green-500/10 px-6 py-2 text-sm text-green-400">Redis Cache</div>
             </div>
             <div className="flex flex-col items-center gap-6 mt-6">
                <div className="h-6 w-px bg-slate-700"></div>
                <div className="rounded-md border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm text-blue-400">User Service</div>
                <div className="h-6 w-px bg-slate-700"></div>
                <div className="rounded-md border border-purple-500/30 bg-purple-500/10 px-6 py-2 text-sm text-purple-400">PostgreSQL</div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  // Card 3: Simulation Mock
  if (index === 2) {
    return (
      <div className="flex h-full flex-col gap-4 rounded-xl border border-white/5 bg-[#16161a] p-6">
        <div className="flex justify-between items-center">
           <h4 className="text-sm font-semibold text-slate-300">Simulation in progress</h4>
           <span className="flex items-center gap-2 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
             <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span> Live
           </span>
        </div>
        
        <div className="flex-1 rounded-lg border border-white/5 bg-[#0d0d10] p-4 flex items-center justify-center relative">
           <div className="absolute top-1/2 left-1/4 rounded-md border border-red-500/50 bg-red-500/10 px-4 py-1.5 text-xs text-red-400">High Latency</div>
           <div className="absolute top-1/3 right-1/4 rounded-md border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs text-green-400">Operational</div>
        </div>

        <div className="h-24 rounded-lg border border-white/5 p-4">
           <p className="text-xs text-slate-500 mb-2">Traffic (6,432 req/s)</p>
           {/* Mock line chart using a simple SVG curve */}
           <svg className="w-full h-8 stroke-blue-500 fill-none" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,20 Q10,5 20,15 T40,10 T60,18 T80,5 T100,10" strokeWidth="2" />
              <circle cx="80" cy="5" r="2" className="fill-orange-500 stroke-none" />
           </svg>
        </div>
      </div>
    );
  }

  // Card 4: Evaluation Score
  return (
    <div className="flex h-full flex-col gap-6 rounded-xl border border-white/5 bg-[#16161a] p-6">
      <div className="flex items-center gap-8 border-b border-white/5 pb-6">
         <div className="flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-green-500 text-3xl font-bold text-white shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            82
         </div>
         <div className="flex-1 space-y-3">
            {[
              { label: "Reliability", score: "18/20", color: "text-green-400" },
              { label: "Scalability", score: "16/20", color: "text-green-400" },
              { label: "Performance", score: "17/20", color: "text-yellow-400" },
              { label: "Security", score: "15/20", color: "text-yellow-400" },
            ].map((stat) => (
              <div key={stat.label} className="flex justify-between text-sm">
                 <span className="text-slate-400">{stat.label}</span>
                 <span className={`font-medium ${stat.color}`}>{stat.score}</span>
              </div>
            ))}
         </div>
      </div>
      <div>
         <h4 className="text-sm font-semibold text-slate-300 mb-3">Detected Issues</h4>
         <div className="space-y-3">
            <div className="flex justify-between text-sm">
               <span className="text-slate-400 flex items-center gap-2"><span className="text-red-500">●</span> Single Point of Failure</span>
               <span className="text-red-500">High</span>
            </div>
            <div className="flex justify-between text-sm">
               <span className="text-slate-400 flex items-center gap-2"><span className="text-yellow-500">●</span> Missing Cache Layer</span>
               <span className="text-yellow-500">Medium</span>
            </div>
         </div>
      </div>
    </div>
  );
}

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
      // Switching the whole section to match the image's dark theme looks cleaner
      className="relative bg-[#09090b] px-4 py-16 text-white sm:px-6 lg:h-[430vh] lg:px-10 lg:py-0"
    >
      <div className="mx-auto max-w-[1440px] lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-24">
        <div className="mx-auto max-w-[740px] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-orange-500 sm:text-sm">
            How It Works
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.06] tracking-[-0.055em] text-white sm:text-4xl lg:mt-5 lg:text-5xl">
            Simple workflow. Deep practice.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-sm leading-7 text-slate-400 sm:text-base lg:mt-5 lg:text-lg lg:leading-8">
            From picking a problem to getting evaluated — everything you need to master system design.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:hidden">
          {workflowSteps.map((step, index) => (
            <article
              key={step.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e11] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-sm font-bold text-orange-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold tracking-[-0.02em] text-white">{step.title}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-400">{step.text}</p>
              <div className="mt-5 h-[250px] overflow-hidden rounded-xl sm:h-[300px]">
                <StepCardUI index={index} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 hidden gap-10 lg:grid lg:grid-cols-[400px_1fr] lg:items-center">
          <aside className="hidden lg:block">
            <div className="relative pl-16">
              <div className="absolute left-6 top-7 h-[calc(100%-56px)] w-px bg-white/10" />
              <div
                className="absolute left-6 top-7 w-px bg-orange-500"
                style={{ height: `${scrollProgress * 100}%` }}
              />

              <div className="space-y-8">
                {workflowSteps.map((step, index) => {
                  const active = activeStep === index;
                  const complete = activeStep > index;
                  return (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => scrollToStep(index)}
                      className={`relative w-full rounded-xl p-6 text-left transition-all ${
                        active ? "bg-white/5" : "bg-transparent hover:bg-white/[0.02]"
                      }`}
                    >
                      <span
                        className={`absolute -left-[66px] top-6 grid size-10 place-items-center rounded-full border-2 bg-[#09090b] text-sm font-bold transition-all ${
                          active || complete
                            ? "border-orange-500 text-orange-500 shadow-[0_0_0_4px_rgba(234,88,12,0.1)]"
                            : "border-white/20 text-slate-500"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                      <p className="mt-4 text-[15px] leading-7 text-slate-400">{step.text}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* THE FIX: Relative container with fixed height, cards absolute positioned inside */}
          <div className="relative h-[600px] w-full overflow-hidden rounded-2xl">
            {workflowSteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full p-4 transition-all duration-500 ease-in-out ${
                    isActive
                      ? "opacity-100 translate-y-0 z-10 pointer-events-auto"
                      : "opacity-0 translate-y-8 z-0 pointer-events-none"
                  }`}
                >
                  <div className="h-full w-full rounded-2xl bg-[#0e0e11] border border-white/10 p-6 shadow-2xl">
                     <div className="mb-6 flex justify-between">
                        <span className="text-3xl font-bold text-orange-500">{String(index + 1).padStart(2, "0")}</span>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                     <p className="text-slate-400 mb-8">{step.text}</p>
                     
                     {/* Render the specific inner UI mock for this card */}
                     <div className="h-[300px]">
                        <StepCardUI index={index} />
                     </div>
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

function WorkflowSectionEdge({ position }: { position: "top" | "bottom" }) {
  const isTop = position === "top";

  return (
    <svg
      className={`pointer-events-none absolute inset-x-0 ${isTop ? "top-0" : "bottom-0"} z-10 h-12 w-full text-slate-300/80`}
      preserveAspectRatio="none"
      viewBox="0 0 1200 48"
      aria-hidden="true"
    >
      <path
        d={isTop ? "M0 1H468L490 28H710L732 1H1200" : "M0 47H468L490 20H710L732 47H1200"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function WorkflowStepCard({
  index,
  progress,
}: {
  index: number;
  title: string;
  text: string;
  progress: number;
}) {
  const stackProgress = progress * (workflowSteps.length - 1);
  const offset = index - stackProgress;
  const translateY = Math.max(0, offset * 96) + Math.min(0, offset * 18);
  const scale = 1 - Math.max(0, -offset) * 0.025;
  const opacity = offset > 1.1 ? 0 : 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: premiumEase }}
      className="min-w-[86vw] snap-center sm:min-w-[680px] lg:absolute lg:inset-0 lg:min-w-0 lg:will-change-transform"
      style={{
        zIndex: index + 1,
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity,
      }}
    >
      <WorkflowInterviewPanel step={index} />
    </motion.div>
  );
}

function WorkflowInterviewPanel({ step }: { step: number }) {
  const activeProblem = [
    "Design Instagram Feed",
    "Design Uber Backend",
    "Traffic Spike Simulation",
    "Architecture Report",
  ][step];

  return (
    <div className="rounded-[18px] border border-slate-200 bg-white/86 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12),0_0_0_1px_rgba(255,255,255,0.8)] backdrop-blur-xl">
      <div className="rounded-[14px] border border-slate-200 bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <div className="grid min-h-[430px] gap-8 lg:grid-cols-[310px_1fr]">
          <div className="border-b border-slate-200 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-base font-bold text-[#080b18]">Problem Library</h3>
              <span className="grid size-9 place-items-center rounded-lg bg-[#f3edff] text-[#7c3cff]">
                {step === 0 ? <ImageIcon className="size-5" /> : step === 1 ? <Network className="size-5" /> : step === 2 ? <Activity className="size-5" /> : <Gauge className="size-5" />}
              </span>
            </div>
            <div className="mb-4 flex h-10 items-center rounded-lg border border-slate-200 px-3 text-sm text-slate-400">
              Search problems...
              <Search className="ml-auto size-4" />
            </div>
            {[
              ["Design Twitter Feed", "Hard"],
              ["Design Uber Backend", "Hard"],
              ["Design Instagram Feed", "Medium"],
              ["Design URL Shortener", "Medium"],
              ["Design Chat System", "Medium"],
            ].map(([name, difficulty]) => {
              const selected = name === activeProblem || (step > 1 && name === "Design Instagram Feed");
              return (
                <div
                  key={name}
                  className={`mb-3 flex items-center justify-between rounded-lg border px-3 py-4 text-sm transition ${
                    selected
                      ? "border-[#8b5cf6] bg-[#fbf8ff] text-[#080b18] shadow-[0_12px_30px_rgba(124,60,255,0.12)]"
                      : "border-transparent bg-slate-50 text-slate-700"
                  }`}
                >
                  <span className="font-semibold">{name}</span>
                  <span className={`rounded-md px-2 py-1 text-xs font-semibold ${difficulty === "Hard" ? "bg-red-50 text-[#7c3cff]" : "bg-[#f1e8ff] text-[#7c3cff]"}`}>
                    {difficulty}
                  </span>
                  {selected && <ChevronRight className="size-4 text-[#7c3cff]" />}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-4">
              <div className="grid size-11 place-items-center rounded-lg bg-[#7c3cff] text-white">
                {step === 2 ? <Activity className="size-5" /> : step === 3 ? <Gauge className="size-5" /> : <ImageIcon className="size-5" />}
              </div>
              <h3 className="text-xl font-bold text-[#080b18]">
                {step === 1 ? "Build Uber Backend" : step === 2 ? "Run Traffic Simulation" : step === 3 ? "Get Evaluated" : "Design Instagram Feed"}
              </h3>
              <span className="ml-auto rounded-lg bg-[#f1e8ff] px-3 py-1 text-sm font-semibold text-[#7c3cff]">
                {step === 3 ? "82/100" : "Medium"}
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              {step === 0 &&
                "Design the backend for Instagram feed. The system should be able to support millions of users and high read volume."}
              {step === 1 &&
                "Place core services, connect traffic paths, and model the data flow before you ever run an evaluation."}
              {step === 2 &&
                "Watch traffic spikes, database pressure, and latency events play through the architecture in real time."}
              {step === 3 &&
                "Review score breakdowns, bottlenecks, missing components, and concrete next steps for improving the design."}
            </p>

            {step < 2 && (
              <div className="mt-8 grid gap-3 sm:grid-cols-4">
                {[
                  [UsersIcon, "Users", "100M+"],
                  [TrendingUp, "Read QPS", "1M+"],
                  [ImageIcon, "Media", "Photos & Videos"],
                  [Globe2, "Regions", "Global"],
                ].map(([Icon, label, value]) => (
                  <div key={String(label)} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mb-4 grid size-8 place-items-center rounded-lg bg-[#f1e8ff] text-[#7c3cff]">
                      <Icon className="size-4" />
                    </div>
                    <div className="text-sm text-slate-500">{label as string}</div>
                    <div className="mt-1 text-sm font-bold text-[#080b18]">{value as string}</div>
                  </div>
                ))}
              </div>
            )}

            {step === 2 && <LightSimulationPanel />}
            {step === 3 && <LightEvaluationPanel />}

            <div className="mt-8">
              <div className="mb-4 text-sm font-bold text-[#080b18]">
                {step === 2 ? "Simulation Events" : step === 3 ? "Actionable Issues" : "Requirements"}
              </div>
              <div className="space-y-3 text-sm text-slate-700">
                {[
                  "Users can post photos and videos.",
                  "Users can follow/unfollow other users.",
                  "Users can like and comment on posts.",
                  "The feed should be personalized and real-time.",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="size-4 rounded-full border border-[#7c3cff] p-0.5 text-[#7c3cff]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Button
              asChild
              className="mt-auto h-12 self-end rounded-lg bg-[#070b18] px-8 font-semibold text-white shadow-[0_16px_35px_rgba(7,11,24,0.2)] hover:bg-[#111827]"
            >
              <Link href="/problems">
                Start Problem <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LightSimulationPanel() {
  return (
    <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center gap-3 text-xs">
        <span className="rounded-md bg-white px-3 py-2 font-semibold text-slate-700">Users</span>
        <span className="h-px flex-1 bg-emerald-400" />
        <span className="rounded-md bg-white px-3 py-2 font-semibold text-slate-700">API Gateway</span>
        <span className="h-px flex-1 bg-red-400" />
        <span className="rounded-md bg-red-50 px-3 py-2 font-semibold text-red-500">Database</span>
      </div>
      <div className="mt-5 space-y-3 text-sm text-slate-600">
        {["00:00 Simulation started", "00:12 Traffic spike", "00:24 Database crash"].map((item) => (
          <div key={item} className="flex items-center justify-between">
            <span>{item}</span>
            <span className="h-px w-28 bg-[#7c3cff]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function LightEvaluationPanel() {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-[120px_1fr]">
      <div className="grid size-28 place-items-center rounded-full border-[8px] border-[#7c3cff] text-center">
        <div>
          <div className="text-4xl font-bold text-[#080b18]">82</div>
          <div className="text-xs text-slate-500">/100</div>
        </div>
      </div>
      <div className="space-y-3 text-sm text-slate-600">
        {["Reliability 18/20", "Scalability 16/20", "Performance 17/20", "Security 15/20"].map((item) => (
          <div key={item} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
            <span>{item.split(" ")[0]}</span>
            <span className="font-semibold text-[#7c3cff]">{item.split(" ")[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowProblemPreview() {
  return (
    <div className="ml-auto w-full max-w-[360px] rounded-xl border border-white/10 bg-[#101113]/80 p-4 shadow-2xl">
      <div className="mb-4 flex items-center justify-between text-sm font-semibold text-white">
        Problem Library
        <Box className="size-4 text-zinc-500" />
      </div>
      {[
        ["Design Uber", "Hard", "45 min", "text-red-300 bg-red-500/15"],
        ["Design Twitter Feed", "Hard", "60 min", "text-red-300 bg-red-500/15"],
        ["Design URL Shortener", "Medium", "30 min", "text-amber-300 bg-amber-500/15"],
        ["Design Instagram Feed", "Medium", "50 min", "text-amber-300 bg-amber-500/15"],
      ].map(([name, difficulty, time, tone]) => (
        <div key={name} className="mb-3 flex items-center justify-between rounded-lg border border-white/8 bg-black/20 px-3 py-3 text-sm last:mb-0">
          <span className="text-white">{name}</span>
          <span className={`rounded px-2 py-0.5 text-xs ${tone}`}>{difficulty}</span>
          <span className="text-zinc-500">{time}</span>
        </div>
      ))}
      <Link href="/problems" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ff5c00]">
        View all problems <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

function WorkflowArchitecturePreview() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-xl border border-white/10 bg-black/15">
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute left-6 top-8 grid gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3">
        {[Network, Box, Clock, LinkIcon, MessageSquare].map((Icon, index) => (
          <div key={index} className="grid size-9 place-items-center rounded-md text-zinc-300">
            <Icon className="size-5" />
          </div>
        ))}
      </div>
      <FeatureNode className="left-[55%] top-[12%] border-orange-500/50 text-orange-300" label="Load Balancer" />
      <FeatureNode className="left-[55%] top-[34%] border-sky-500/50 text-sky-300" label="API Gateway" />
      <FeatureNode className="left-[38%] top-[55%] border-sky-500/50 text-sky-300" label="User Service" />
      <FeatureNode className="left-[73%] top-[55%] border-sky-500/50 text-sky-300" label="User Service" />
      <FeatureNode className="left-[38%] top-[78%] border-emerald-500/50 text-emerald-300" label="Redis Cache" />
      <FeatureNode className="left-[73%] top-[78%] border-violet-500/50 text-violet-300" label="PostgreSQL" />
      <div className="absolute left-[55%] top-[22%] h-10 w-px bg-white/30" />
      <div className="absolute left-[55%] top-[44%] h-px w-[18%] bg-white/25" />
      <div className="absolute left-[38%] top-[44%] h-px w-[18%] bg-white/25" />
      <div className="absolute left-[38%] top-[64%] h-12 w-px bg-white/25" />
      <div className="absolute left-[73%] top-[64%] h-12 w-px bg-white/25" />
    </div>
  );
}

function WorkflowSimulationPreview() {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-5">
      <div className="mb-5 flex items-center justify-end gap-2 text-sm font-semibold text-emerald-400">
        <span className="size-2 rounded-full bg-emerald-400" />
        Live
      </div>
      <div className="mb-6 flex items-center gap-3 text-xs">
        <FeaturePill label="Users" />
        <div className="h-px flex-1 bg-emerald-500/40" />
        <FeaturePill tone="border-orange-500/50 text-orange-300" label="Load Balancer" />
        <div className="h-px flex-1 bg-sky-500/40" />
        <FeaturePill tone="text-sky-300" label="API Gateway" />
        <div className="h-px flex-1 bg-red-500/60" />
        <FeaturePill tone="border-red-500/50 text-red-300" label="Database" />
        <span className="text-xs font-semibold text-red-500">CRASHED</span>
      </div>
      <div className="space-y-5 text-sm text-zinc-300">
        {[
          ["00:00", "Simulation started", "bg-zinc-600"],
          ["00:12", "Traffic spike", "bg-red-500"],
          ["00:24", "Database crash", "bg-red-500"],
          ["00:32", "Latency spike", "bg-orange-400"],
        ].map(([time, label, tone]) => (
          <div key={label} className="grid grid-cols-[56px_1fr_180px] items-center gap-5">
            <span className="text-zinc-500">{time}</span>
            <span>{label}</span>
            <span className={`h-px ${tone}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowEvaluationPreview() {
  return (
    <div className="ml-auto w-full max-w-[420px] rounded-xl border border-white/10 bg-[#101113]/85 p-6 shadow-2xl">
      <div className="grid grid-cols-[120px_1fr] gap-7">
        <div className="grid size-28 place-items-center rounded-full border-[8px] border-emerald-400 text-center">
          <div>
            <div className="text-4xl font-bold text-white">82</div>
            <div className="text-xs text-zinc-500">/100</div>
          </div>
        </div>
        <div className="space-y-3 text-sm text-zinc-300">
          {[
            ["Reliability", "18/20", "text-emerald-400"],
            ["Scalability", "16/20", "text-emerald-400"],
            ["Performance", "17/20", "text-amber-400"],
            ["Security", "15/20", "text-orange-400"],
            ["Best Practices", "16/20", "text-amber-400"],
          ].map(([label, value, tone]) => (
            <div key={label} className="flex justify-between gap-5">
              <span>{label}</span>
              <span className={tone}>{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7 text-sm font-semibold text-white">Detected Issues</div>
      <div className="mt-4 space-y-3 text-sm">
        {[
          ["Single Point of Failure (Database)", "High", "text-red-400"],
          ["Missing Cache Layer", "Medium", "text-amber-400"],
          ["No Rate Limiting", "Low", "text-emerald-400"],
        ].map(([issue, level, tone]) => (
          <div key={issue} className="flex justify-between gap-5 text-zinc-300">
            <span>{issue}</span>
            <span className={tone}>{level}</span>
          </div>
        ))}
      </div>
      <Link href="/problems" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#ff5c00]">
        View full report <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

function FeatureNode({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return (
    <div className={`absolute grid h-12 w-32 -translate-x-1/2 place-items-center rounded-lg border bg-black/35 text-xs font-medium ${className}`}>
      {label}
    </div>
  );
}

function FeaturePill({
  label,
  tone = "text-white",
}: {
  label: string;
  tone?: string;
}) {
  return (
    <span className={`rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-xs font-medium ${tone}`}>
      {label}
    </span>
  );
}
