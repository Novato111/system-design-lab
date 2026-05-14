"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  BarChart3,
  Bell,
  Box,
  Check,
  ChevronDown,
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

const navItems = ["Features", "How It Works", "Problems", "Pricing", "About"];

const companies = [
  "Google",
  "Stripe",
  "Netflix",
  "Airbnb",
  "Uber",
  "Datadog",
  "LinkedIn",
  "Microsoft",
];

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

const testimonials = [
  {
    quote:
      "This simulator is a game changer. The visual canvas, evaluations, and AI tutor helped me crack Amazon SDE-II.",
    name: "Ankit Sharma",
    role: "SDE II @ Amazon",
    mark: "a",
  },
  {
    quote:
      "The failure simulation shows exactly where your architecture breaks. It feels like having a senior engineer by your side.",
    name: "Priya N.",
    role: "Staff Engineer @ Google",
    mark: "G",
  },
  {
    quote:
      "Best tool I have used for system design prep. Clean UI, realistic problems, and helpful hints.",
    name: "Rohit Verma",
    role: "Engineering Manager @ Microsoft",
    mark: "M",
  },
];

// Reusable premium easing curve for that "shadcn" feel
const premiumEase = [0.06, 1, 0.3, 1] as const;

export default function LandingPage() {
  return (
    <main className="relative min-h-screen  text-white">
      <SiteHeader />
      <HeroSection />
      <TrustBar />
      <ProblemLibrary />
      <FeatureGrid />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <FinalCta />
      <SiteFooter />

    </main>
  );
}

function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: premiumEase }}
      className="fixed inset-x-0 top-6 z-50 px-4"
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between rounded-[20px] border border-white/[0.08] bg-[#111111]/60 px-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:px-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-[12px] border border-white/20 bg-white/[0.03] transition-colors hover:bg-white/[0.08]">
            <Box className="size-6 text-white" />
          </div>
          <div>
            <div className="text-[15px] font-bold tracking-[-0.01em]">SysDesign Lab</div>
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
              Simulator
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium text-white/70 lg:flex">
          {navItems.slice(0, 4).map((item) => (
            <Link key={item} href={`#${slugify(item)}`} className="transition-colors hover:text-white">
              {item}
            </Link>
          ))}
          <Link href="#" className="flex items-center gap-1 transition-colors hover:text-white">
            Resources <ChevronDown className="size-3" />
          </Link>
          <Link href="#" className="transition-colors hover:text-white">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            className="hidden h-11 rounded-[10px] px-5 text-white/70 hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            <Link href="/problems">Log in</Link>
          </Button>
          <Button
            asChild
            className="h-11 rounded-[10px] bg-white px-5 font-semibold text-black shadow-[0_0_28px_rgba(255,255,255,0.18)] transition-all hover:scale-105 hover:bg-zinc-200"
          >
            <Link href="/problems">
              Start for Free <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

function HeroSection() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden pb-20 pt-40 ">
      
      {/* --- BULLETPROOF ROW/COL LINE GRID --- */}
      <div className="absolute inset-0 -z-10 h-full w-full">
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
      </div>
      {/* ------------------------------------------------ */}

      {/* Grid Layout Container */}
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-[500px_minmax(600px,1fr)] lg:px-10 xl:gap-20 xl:px-0">
        
        {/* LEFT COLUMN: Content */}
        <div className="z-10 mt-10 flex flex-col items-start text-left lg:mt-0 lg:pl-6">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9BE870] opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#9BE870]"></span>
            </span>
            <span>Practice. Visualize. Master.</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[44px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[64px]"
          >
            Practice System Design Like It&apos;s{" "}
            <span className="text-[#9BE870]">Production.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-[480px] text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Build real-world architectures on an interactive canvas, simulate failures, get AI feedback, and level up for your next system design interview.
          </motion.p>
          
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid w-full max-w-[480px] gap-3 sm:grid-cols-[1fr_auto]"
          >
            <label className="sr-only" htmlFor="hero-email">Email</label>
            <input
              id="hero-email"
              className="h-14 min-w-0 flex-1 rounded-[10px] border border-white/10 bg-[#111111]/50 px-5 text-sm text-white outline-none backdrop-blur-md transition placeholder:text-zinc-500 focus:border-white/30 focus:ring-1 focus:ring-white/30"
              placeholder="Enter your email"
            />
            <Button
              asChild
              size="lg"
              className="h-14 shrink-0 rounded-[10px] bg-white px-7 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-[1.02] hover:bg-zinc-200"
            >
              <Link href="/problems">
                Start Designing for Free <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <div className="flex -space-x-3">
              {[["AS", "#8b5e3c"], ["RK", "#334155"], ["PM", "#7c2d12"], ["NJ", "#52525b"]].map(([initial, color]) => (
                <div
                  key={initial}
                  className="grid size-11 place-items-center rounded-full border-2 border-[#050505] text-[11px] font-bold text-white shadow-sm"
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
              <p className="mt-1 text-sm font-medium text-zinc-500">Loved by 10,000+ engineers worldwide</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Image */}
        <div className="relative z-20 flex w-full items-center justify-center lg:pr-6">
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95, rotateY: -5, rotateX: 5 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full overflow-hidden rounded-[20px] border border-white/10 bg-[#0B0B0C] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_100px_rgba(0,0,0,0.7)] backdrop-blur-xl perspective-[1000px]"
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
              className="h-auto w-full rounded-[14px] object-cover ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function TrustBar() {
  // Reusable vertical divider to exactly match the image
  const Divider = () => <div className="hidden h-6 w-px bg-white/10 lg:block" />;

  return (
    <section className="relative z-10 bg-[#050505] px-6 pb-20 pt-12 lg:px-10">
      
      {/* --- STRONG SHINY TOP BORDER --- */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/5" />
      <div className="absolute inset-x-0 top-0 mx-auto h-[1px] w-[70%] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />
      <div className="absolute inset-x-0 top-0 mx-auto h-[10px] w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 blur-[6px]" />
      {/* ------------------------------- */}

      <div className="mx-auto max-w-[1340px]">
        {/* Exact Typography Header */}
        <div className="mb-10 flex items-center justify-center">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Trusted by engineers at
          </p>
        </div>

        {/* Muted Grayscale Logos WITH Vertical Dividers */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 opacity-[0.65] grayscale transition-all duration-500 hover:opacity-100 lg:justify-between lg:gap-x-0">
          
          <div className="text-[22px] font-semibold tracking-tighter text-white">Google</div>
          <Divider />
          
          <div className="flex flex-col items-center justify-center pt-1">
            <span className="leading-none text-[22px] font-bold tracking-tight text-white">amazon</span>
            <svg viewBox="0 0 100 20" className="mt-1 h-[10px] w-14 fill-white">
              <path d="M10,5 Q50,20 90,5 Q50,15 10,5" stroke="white" strokeWidth="2" fill="transparent" />
              <polygon points="88,2 94,5 88,8" />
            </svg>
          </div>
          <Divider />
          
          <div className="flex items-center gap-2 text-[22px] font-semibold text-white">
            <div className="grid grid-cols-2 gap-[2px]">
              <div className="size-2 bg-white" />
              <div className="size-2 bg-white" />
              <div className="size-2 bg-white" />
              <div className="size-2 bg-white" />
            </div>
            Microsoft
          </div>
          <Divider />

          <div className="scale-y-110 transform text-[22px] font-black tracking-widest text-white">
            NETFLIX
          </div>
          <Divider />

          <div className="flex items-center gap-2 text-[22px] font-bold tracking-tight text-white">
            <svg viewBox="0 0 24 24" className="h-7 w-7 stroke-white fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
              <path d="M12 3c-4.5 0-7 3.5-7 7.5 0 3 2 5.5 4 8L12 21l3-2.5c2-2.5 4-5 4-8C19 6.5 16.5 3 12 3zm0 9a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
            airbnb
          </div>
          <Divider />

          <div className="text-[22px] font-bold tracking-tighter text-white">stripe</div>
          <Divider />

          <div className="flex items-center gap-1 text-[22px] font-bold tracking-tight text-white">
            Linked
            <div className="flex h-[22px] items-center justify-center rounded-[2px] bg-white px-1 text-[18px] text-black">
              in
            </div>
          </div>
          <Divider />

          <div className="font-serif text-[28px] font-normal tracking-tight text-white">Uber</div>
          <Divider />

          <div className="flex items-center gap-2 text-[20px] font-bold tracking-tight text-white">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
               <path d="M12 2C8 2 4 5 4 10c0 4 3 7 7 8v2h2v-2c4-1 7-4 7-8 0-5-4-8-8-8zm-2 7h-2V7h2v2zm6 0h-2V7h2v2z" />
            </svg>
            Datadog
          </div>

        </div>
      </div>
    </section>
  );
}






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
 function HowItWorks() {
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
      className="relative bg-[#09090b] px-6 py-24 text-white lg:h-[430vh] lg:px-10 lg:py-0"
    >
      <div className="mx-auto max-w-[1440px] lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-24">
        <div className="mx-auto max-w-[740px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-orange-500">
            How It Works
          </p>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-[-0.055em] text-white sm:text-5xl">
            Simple workflow. Deep practice.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-lg leading-8 text-slate-400">
            From picking a problem to getting evaluated — everything you need to master system design.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[400px_1fr] lg:items-center">
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
                        active ? "bg-white/5" : "bg-transparent hover:bg-white-[0.02]"
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
          <div className="relative h-[480px] w-full lg:h-[600px] overflow-hidden rounded-2xl">
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

function FeatureGrid() {
  return (
  
    <section id="features" className="relative overflow-hidden bg-[#050505] px-6 py-24 lg:px-10">
         
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_12%,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_18%_40%,rgba(255,255,255,0.045),transparent_30%)]" />
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5c00]"
        >
          Features
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: premiumEase }}
          className="max-w-[860px] text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl"
        >
          Built for serious system design practice.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
          className="mt-5 max-w-[460px] text-base leading-7 text-zinc-300/80"
        >
          Every feature is engineered to mirror real-world complexity and help you think like a systems engineer.
        </motion.p>

        <div className="mt-6 grid gap-4 lg:grid-cols-12">
          <FeatureCard className="lg:col-span-5">
            <div className="flex h-full min-h-[390px] flex-col">
              <FeatureNumber value="01" />
              <div className="mt-8 grid flex-1 gap-8 md:grid-cols-[220px_1fr]">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">Interactive Canvas</h3>
                  <p className="mt-5 text-[15px] leading-7 text-zinc-300/80">
                    Drag and drop 12 system components. Connect them with edges. Build architectures that mirror real production systems.
                  </p>
                  <div className="mt-24 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <ServerCrash className="size-4 text-white" />
                    React Flow powered
                  </div>
                </div>

                <div className="relative min-h-[300px] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:14px_14px]" />
                  <div className="absolute right-4 top-2 grid size-12 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-white">
                    <Network className="size-5" />
                  </div>
                  <div className="absolute left-2 top-16 w-28 rounded-lg border border-white/10 bg-[#121317] p-4 shadow-2xl">
                    {["Load Balancer", "API Gateway", "Web Server", "Database", "Cache"].map((item) => (
                      <div key={item} className="mb-4 flex items-center gap-2 text-[11px] text-zinc-300 last:mb-0">
                        <Box className="size-3 text-zinc-400" />
                        {item}
                      </div>
                    ))}
                    <div className="mt-3 text-lg leading-none text-white">...</div>
                  </div>
                  <FeatureNode className="left-[55%] top-[20%] border-orange-500/50 text-orange-300" label="Load Balancer" />
                  <FeatureNode className="left-[55%] top-[42%] border-sky-500/50 text-sky-300" label="API Gateway" />
                  <FeatureNode className="left-[36%] top-[64%] border-sky-500/50 text-sky-300" label="Web Server" />
                  <FeatureNode className="left-[74%] top-[64%] border-sky-500/50 text-sky-300" label="Web Server" />
                  <FeatureNode className="left-[38%] top-[84%] border-emerald-500/50 text-emerald-300" label="Cache" />
                  <FeatureNode className="left-[76%] top-[84%] border-violet-500/50 text-violet-300" label="Database" />
                  <div className="absolute left-[55%] top-[31%] h-8 w-px bg-white/35" />
                  <div className="absolute left-[55%] top-[53%] h-px w-[19%] bg-white/25" />
                  <div className="absolute left-[36%] top-[53%] h-px w-[19%] bg-white/25" />
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard className="lg:col-span-3">
            <FeatureNumber value="02" />
            <div className="absolute right-5 top-5 grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
              <BarChart3 className="size-5" />
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">Evaluation Engine</h3>
            <p className="mt-4 text-[15px] leading-7 text-zinc-300/80">
              Rule-based validator that runs DFS path detection on your graph. Detects SPOFs, missing cache layers, security gaps, floating components. Scores you out of 100 with a full breakdown.
            </p>
            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="grid grid-cols-[110px_1fr] gap-4">
                <div className="grid size-24 place-items-center rounded-full border-[7px] border-emerald-400 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">82</div>
                    <div className="text-xs text-zinc-500">/100</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-zinc-300">
                  {[
                    ["Reliability", "18/20", "text-emerald-400"],
                    ["Scalability", "16/20", "text-emerald-400"],
                    ["Performance", "17/20", "text-amber-400"],
                    ["Security", "15/20", "text-orange-400"],
                    ["Best Practices", "16/20", "text-amber-400"],
                  ].map(([label, value, tone]) => (
                    <div key={label} className="flex justify-between gap-3">
                      <span>{label}</span>
                      <span className={tone}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {["DFS Path Detection", "Security Gap Analysis", "SPOF Detection", "Floating Component Check", "Cache Layer Validation"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="size-4 rounded-full bg-emerald-400/10 p-0.5 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </FeatureCard>

          <FeatureCard className="lg:col-span-4">
            <FeatureNumber value="03" />
            <div className="absolute right-5 top-5 grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
              <Activity className="size-5" />
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">Failure Simulator</h3>
            <p className="mt-4 max-w-[320px] text-[15px] leading-7 text-zinc-300/80">
              Scripted event engine that animates crashes, latency spikes, and traffic overloads on your canvas in real time. See exactly which parts of your design break first.
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs">
              <FeaturePill tone="text-sky-300" label="Web Server" />
              <div className="h-px flex-1 bg-gradient-to-r from-sky-400/40 to-orange-400/40" />
              <FeaturePill tone="text-sky-300" label="API Gateway" />
              <div className="h-px flex-1 bg-gradient-to-r from-orange-400/40 to-red-400/70" />
              <FeaturePill tone="border-red-500/50 text-red-300" label="Database" />
              <span className="ml-2 text-xs font-semibold text-red-500">CRASHED</span>
            </div>
            <div className="mt-6 space-y-4 border-t border-white/10 pt-5 text-sm text-zinc-300">
              {[
                ["00:00", "Simulation started", "bg-zinc-600"],
                ["00:12", "Traffic spike", "bg-red-500"],
                ["00:24", "Database crash", "bg-red-500"],
                ["00:32", "Latency spike", "bg-orange-400"],
              ].map(([time, label, tone]) => (
                <div key={label} className="grid grid-cols-[56px_1fr_150px] items-center gap-4">
                  <span className="text-zinc-500">{time}</span>
                  <span>{label}</span>
                  <span className={`h-px ${tone}`} />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between border-t border-white/10 pt-4 text-xs text-zinc-500">
              <span>00:00</span>
              <span>00:45</span>
            </div>
          </FeatureCard>

          <FeatureCard className="lg:col-span-5">
            <div className="grid min-h-[280px] gap-8 md:grid-cols-[230px_1fr]">
              <div>
                <FeatureNumber value="04" />
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">AI Tutor</h3>
                <p className="mt-4 text-[15px] leading-7 text-zinc-300/80">
                  Context-aware coach that reads your current graph and gives Socratic hints. It knows what you built, what you&apos;re missing, and where to nudge you. Not generic advice — specific to your design.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4 text-sm font-semibold text-white">
                  AI Tutor
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400" /> Online
                  </span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4 text-sm leading-6 text-zinc-200">
                  Your design is missing a cache layer between the API and DB. This could lead to high DB load.
                  <br />
                  <br />
                  Consider adding Redis or Memcached to improve performance.
                </div>
                <div className="mt-4 flex items-center rounded-lg border border-white/10 bg-black/25 p-2 text-sm text-zinc-500">
                  <span className="flex-1 px-2">Ask a follow-up...</span>
                  <button className="grid size-9 place-items-center rounded-md bg-white/[0.08] text-white" type="button">
                    <Send className="size-4" />
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-zinc-300">
                  <div className="flex items-center justify-center gap-2 rounded-lg border border-white/10 py-3">
                    <HelpCircle className="size-4" /> Socratic hints
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-lg border border-white/10 py-3">
                    <GitBranch className="size-4" /> Graph-aware
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard className="lg:col-span-7">
            <div className="grid min-h-[280px] gap-8 md:grid-cols-[260px_1fr_280px]">
              <div>
                <FeatureNumber value="05" />
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">Design Persistence</h3>
                <p className="mt-4 text-[15px] leading-7 text-zinc-300/80">
                  Your designs are saved and synced. Pick up where you left off. Share your design link. Export and compare with others.
                </p>
              </div>
              <div>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.035]">
                  {["Auto-saved to cloud", "Shareable link", "Export as image / JSON", "Compare with community", "Sync across devices"].map((item) => (
                    <div key={item} className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-sm text-zinc-300 last:border-b-0">
                      {item}
                      <Check className="size-4 text-emerald-400" />
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-4 gap-3">
                  {[Cloud, LinkIcon, Save, UsersIcon].map((Icon, index) => (
                    <div key={index} className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
                      <Icon className="size-5" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                <div className="mb-4 flex items-center justify-between text-sm font-semibold text-white">
                  Your Designs
                  <Link href="/problems" className="text-xs font-medium text-sky-400">
                    View all
                  </Link>
                </div>
                {["Twitter Feed System", "Uber Backend", "Notification Service"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 border-b border-white/10 py-3 last:border-b-0">
                    <div className="grid size-12 place-items-center rounded-md border border-white/10 bg-black/30 text-zinc-500">
                      <GitBranch className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{item}</div>
                      <div className="mt-1 text-xs text-zinc-500">Updated {index === 0 ? "2h" : `${index}d`} ago</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>

    </section>
  );
}

function FeatureCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: premiumEase }}
      className={`relative overflow-hidden rounded-[14px] border border-white/[0.09] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_24px_80px_rgba(0,0,0,0.28)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.07),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.article>
  );
}

function FeatureNumber({ value }: { value: string }) {
  return <div className="text-sm font-semibold tracking-[0.06em] text-[#ff5c00]">{value}</div>;
}

function FeatureNode({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return (
    <div
      className={`absolute grid h-10 w-[104px] place-items-center rounded-md border bg-black/35 text-[10px] font-medium shadow-lg ${className}`}
    >
      {label}
    </div>
  );
}

function FeaturePill({
  label,
  tone = "text-zinc-300",
}: {
  label: string;
  tone?: string;
}) {
  return (
    <div className={`rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 font-medium ${tone}`}>
      {label}
    </div>
  );
}

const pricingPlans = [
  {
    name: "Free",
    description: "Start practicing at no cost.",
    price: "$0",
    suffix: "/month",
    icon: Leaf,
    accent: "green",
    cta: "Get started for free",
    footnote: "",
    features: ["Access to 5 problems", "Basic evaluation", "Community support", "No credit card required"],
  },
  {
    name: "Pro",
    description: "Everything you need to ace system design interviews.",
    price: "$12",
    suffix: "/month",
    icon: Zap,
    accent: "orange",
    cta: "Start Pro Trial",
    footnote: "7-day free trial. Cancel anytime.",
    features: [
      "All 25+ problems",
      "Full evaluation engine",
      "Failure simulator",
      "AI tutor with real-time hints",
      "Design history",
      "Shareable design links",
    ],
  },
  {
    name: "Team",
    description: "For teams that want to practice and improve together.",
    price: "$29",
    suffix: "/seat/month",
    icon: UsersIcon,
    accent: "violet",
    cta: "Start Team Plan",
    footnote: "Minimum 2 seats.",
    features: [
      "Everything in Pro",
      "Team leaderboards",
      "Shared problem sets",
      "Company-specific mock problems",
      "Team analytics & insights",
    ],
  },
];

const pricingFaqs = [
  {
    question: "Is the free tier really free?",
    answer: "Yes! You get full access to 5 problems and basic evaluation — forever.",
    tone: "green",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. No contracts. Cancel anytime and you won’t be charged again.",
    tone: "orange",
  },
  {
    question: "Does the AI tutor use my designs to train models?",
    answer: "No. Your designs are private and never used to train our models.",
    tone: "violet",
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#050505] px-6 py-24 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_52%_48%,rgba(249,115,22,0.10),transparent_22%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.2] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="mx-auto max-w-[1340px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: premiumEase }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#ff5c00]">
            Pricing
          </p>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl">
            Simple pricing. Serious value.
          </h2>
          <p className="mt-5 text-xl text-zinc-400">Choose the plan that fits your journey.</p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-center lg:[perspective:1400px]">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <div className="mx-auto mt-10 overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#0b0d10]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_70px_rgba(0,0,0,0.35)]">
          {pricingFaqs.map((faq) => (
            <div
              key={faq.question}
              className="grid gap-4 border-b border-white/[0.08] px-6 py-5 last:border-b-0 md:grid-cols-[420px_1fr_auto] md:items-center"
            >
              <div className="flex items-center gap-5">
                <span
                  className={`grid size-10 place-items-center rounded-xl border text-xl font-bold ${
                    faq.tone === "green"
                      ? "border-green-400/30 bg-green-500/10 text-green-400"
                      : faq.tone === "orange"
                        ? "border-orange-400/30 bg-orange-500/10 text-orange-400"
                        : "border-violet-400/30 bg-violet-500/10 text-violet-400"
                  }`}
                >
                  ?
                </span>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">{faq.question}</h3>
              </div>
              <p className="text-base text-zinc-400">{faq.answer}</p>
              <ChevronDown className="hidden size-5 text-white md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof pricingPlans)[number];
  index: number;
}) {
  const isPro = plan.name === "Pro";
  const isTeam = plan.name === "Team";
  const tone =
    plan.accent === "green"
      ? "text-green-400 border-green-500/30 bg-green-500/10"
      : plan.accent === "violet"
        ? "text-violet-400 border-violet-500/30 bg-violet-500/10"
        : "text-[#ff5c00] border-[#ff5c00]/40 bg-[#ff5c00]/12";
  const checkTone =
    plan.accent === "green" ? "text-green-400" : plan.accent === "violet" ? "text-violet-400" : "text-[#ff5c00]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, rotate: index === 0 ? -3 : index === 2 ? 3 : 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -2 : index === 2 ? 3 : 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: premiumEase }}
      className={`group relative min-h-[560px] overflow-hidden rounded-[18px] border p-8 transition-transform duration-500 hover:-translate-y-2 ${
        isPro
          ? "border-[#ff5c00] bg-[#0b0d10]/92 shadow-[0_0_0_1px_rgba(255,92,0,0.25),0_0_70px_rgba(255,92,0,0.22)] lg:scale-105"
          : "border-white/[0.1] bg-[#0b0d10]/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_80px_rgba(0,0,0,0.42)]"
      } ${isTeam ? "lg:translate-y-2" : ""}`}
    >
      <div className={`absolute inset-0 -z-10 ${isTeam ? "opacity-[0.11]" : "opacity-[0.22]"} [background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:18px_18px]`} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_30%)]" />
      {isTeam && (
        <div className="absolute inset-0 -z-10 opacity-[0.14] [background-image:linear-gradient(135deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:22px_22px]" />
      )}
      {isPro && (
        <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 items-center gap-2 rounded-b-xl border-x border-b border-[#ff5c00]/40 bg-[#2a1508] px-7 py-3 text-base font-bold text-[#ff7a1a]">
          <Star className="size-4" />
          Most Popular
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col pt-6">
        <div className={`mb-6 grid size-14 place-items-center rounded-xl border ${tone}`}>
          <plan.icon className="size-7" />
        </div>

        <h3 className="text-3xl font-bold tracking-[-0.04em] text-white">{plan.name}</h3>
        <p className="mt-3 min-h-[52px] max-w-[300px] text-base leading-7 text-zinc-300">{plan.description}</p>

        <div className="my-8 h-px bg-white/10" />

        <div className="flex items-end gap-2">
          <span className="text-4xl font-extrabold tracking-[-0.04em] text-white">{plan.price}</span>
          <span className="pb-1 text-base text-zinc-400">{plan.suffix}</span>
        </div>
        {isTeam && <p className="mt-3 text-sm text-zinc-400">or $299/month flat for up to 10 seats</p>}

        <ul className="mt-8 space-y-3 text-base text-zinc-200">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <Check className={`size-5 rounded-full border p-0.5 ${checkTone}`} />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={`mt-auto h-12 rounded-lg text-base font-bold ${
            isPro
              ? "bg-gradient-to-r from-[#f45b00] to-[#ff7a00] text-white shadow-[0_15px_40px_rgba(255,92,0,0.28)] hover:from-[#ff6a00] hover:to-[#ff8a1f]"
              : isTeam
                ? "border border-violet-500/80 bg-transparent text-violet-300 hover:bg-violet-500/10"
                : "border border-green-500/35 bg-transparent text-white hover:bg-green-500/10"
          }`}
        >
          <Link href="/problems">{plan.cta}</Link>
        </Button>
        {plan.footnote && <p className="mt-4 text-center text-sm text-zinc-500">{plan.footnote}</p>}
      </div>
    </motion.article>
  );
}



function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-32 lg:px-8">
      <SectionHeading
        eyebrow="Wall of Love"
        title="Cracking Top Tech Interviews"
        text=""
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: premiumEase }}
            key={testimonial.name} 
            className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-8"
          >
            <div>
              <div className="mb-6 text-5xl font-serif text-violet-400/50">"</div>
              <p className="text-base leading-relaxed text-slate-300">{testimonial.quote}</p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-slate-800 to-black text-lg font-black text-white shadow-inner border border-white/10">
                {testimonial.mark}
              </div>
              <div>
                <div className="font-bold text-white/90">{testimonial.name}</div>
                <div className="text-xs font-medium text-slate-500">{testimonial.role}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: premiumEase }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#151515] to-[#0A0A0A] p-10 md:p-16"
      >
        {/* Subtle glow effect behind CTA */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-start gap-8">
            <div className="hidden size-16 shrink-0 place-items-center rounded-2xl border border-violet-500/30 bg-violet-500/10 text-violet-300 md:grid shadow-[0_0_30px_rgba(139,92,246,0.15)]">
              <Box className="size-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to master system design?
              </h2>
              <p className="mt-4 max-w-xl text-lg text-slate-400">
                Join thousands of engineers and build the skills to design scalable,
                reliable systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-300">
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-violet-400" /> Free forever plan
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-violet-400" /> No credit card
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <Button
              asChild
              size="lg"
              className="h-14 w-full sm:w-auto rounded-xl bg-white px-8 text-base font-bold text-black shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all hover:scale-105 hover:bg-slate-200"
            >
              <Link href="/problems">
                Start for Free <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#020202] px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr]">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg border border-white/20 bg-white/5">
              <Box className="size-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-white">SysDesign Lab</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                Simulator
              </div>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-500">
            The modern system design simulator to practice, visualize, and master
            scalable architectures.
          </p>
        </div>
        <FooterColumn title="Product" items={["Features", "Simulator", "Practice", "Roadmap", "Pricing"]} />
        <FooterColumn title="Resources" items={["Blog", "System Design 101", "Tutorials", "Cheatsheets", "FAQ"]} />
        <FooterColumn title="Company" items={["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service"]} />
        <div>
          <h3 className="mb-5 text-sm font-bold text-white">Stay Updated</h3>
          <p className="mb-6 text-sm leading-relaxed text-slate-500">
            Get the latest updates and resources delivered to your inbox.
          </p>
          <form className="flex overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] focus-within:border-white/30 focus-within:ring-1 focus-within:ring-white/30 transition-all">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <div className="grid place-items-center pl-4 text-slate-500">
              <Mail className="size-4" />
            </div>
            <input
              id="email"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-slate-600"
              placeholder="hello@example.com"
            />
            <button className="grid w-14 place-items-center bg-white text-black transition-colors hover:bg-slate-200" type="button">
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl items-center justify-between border-t border-white/[0.05] pt-8 text-sm text-slate-600">
        <p>© 2026 SysDesign Lab. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: premiumEase }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-violet-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-slate-400">{text}</p>}
    </motion.div>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-bold text-white">{title}</h3>
      <ul className="space-y-4 text-sm text-slate-500">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="transition-colors hover:text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


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

function ProblemLibrary() {
  return (
    <section id="problems" className="relative overflow-hidden border-t border-white/5 bg-[#050505] px-6 py-24 lg:px-10">
      <div
        className="absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 78% 70% at 50% 45%, black 35%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 78% 70% at 50% 45%, black 35%, transparent 100%)",
        }}
      />
      <div className="absolute left-[12%] top-20 -z-10 size-[420px] rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="absolute right-[10%] top-10 -z-10 size-[520px] rounded-full bg-white/[0.035] blur-[130px]" />

      <div className="mx-auto grid max-w-[1440px] items-start gap-16 lg:grid-cols-[390px_1fr] xl:grid-cols-[430px_1fr]">
        
        {/* LEFT COLUMN: Sticky Header Content */}
        <div className="sticky top-32 flex flex-col items-start">
          <div className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.13em] text-[#ff5c00]">
            <Box className="size-5" />
            PROBLEM LIBRARY
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.22] tracking-[-0.035em] text-white sm:text-5xl lg:text-[52px]">
            <span className="text-[#ff5c00]">25+</span> Real Interview Problems, Ready to Solve.
          </h2>

          <p className="mt-8 max-w-[410px] text-lg leading-9 text-zinc-400">
            These are the exact problems asked at FAANG — Uber, Twitter, WhatsApp, Netflix, URL Shortener, Pastebin, Instagram Feed, Notification System, and more.
            <br />
            Each with difficulty tags.
          </p>

          <div className="mt-16 grid w-full grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-4">
            {problemStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative pr-5 ${index > 0 ? "border-l border-white/10 pl-5" : ""}`}
              >
                <stat.icon className={`mb-3 size-5 ${stat.tone}`} />
                <div className="text-2xl font-semibold tracking-[-0.03em] text-white">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none relative mt-16 hidden h-44 w-full opacity-30 lg:block">
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
        </div>

        {/* RIGHT COLUMN: Scrolling Card Grid */}
        <div className="flex flex-col">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {problemData.map((problem, i) => (
              <motion.article
                initial={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                key={problem.title}
                className="group relative flex min-h-[244px] cursor-pointer flex-col overflow-hidden rounded-[14px] border border-white/[0.11] bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_24px_60px_rgba(0,0,0,0.32)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.065]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-70" />

                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-5">
                    <div className={`grid size-16 shrink-0 place-items-center rounded-[10px] border text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${problem.iconTone}`}>
                      {problem.brand ? (
                        <span className={problem.brand === "N" ? "text-4xl font-black tracking-[-0.08em]" : "text-lg font-medium tracking-[-0.08em]"}>
                          {problem.brand}
                        </span>
                      ) : (
                        problem.icon && <problem.icon className="size-8" />
                      )}
                    </div>
                    
                    <div>
                      <h3 className="max-w-[170px] text-lg font-semibold leading-6 tracking-[-0.02em] text-white/95 transition-colors group-hover:text-white">
                        {problem.title}
                      </h3>
                      <div className={`mt-2 w-fit rounded-[6px] border px-2 py-1 text-sm font-medium leading-none ${problem.diffColor}`}>
                        {problem.difficulty}
                      </div>
                    </div>
                  </div>
                  
                  <ChevronRight className="mt-1 size-5 shrink-0 text-zinc-300 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </div>

                <p className="mt-6 min-h-[78px] text-[15px] leading-7 text-zinc-300/80">
                  {problem.description}
                </p>

                <div className="mt-auto flex items-center gap-6 border-t border-white/10 pt-4 text-sm font-medium text-zinc-300/80">
                  <div className="flex items-center gap-1.5">
                    <Clock className="size-4" />
                    {problem.time}
                  </div>
                  <div className="h-6 w-px bg-white/10" />
                  <div>{problem.category}</div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Action */}
          <div className="mt-4 flex justify-center rounded-[14px] border border-white/[0.08] bg-white/[0.025] py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <Link 
              href="/problems" 
              className="group flex items-center gap-3 text-lg font-medium text-[#ff5c00] underline underline-offset-4 transition-colors hover:text-[#ff7a33]"
            >
              View all 25 problems 
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
      
    </section>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}
