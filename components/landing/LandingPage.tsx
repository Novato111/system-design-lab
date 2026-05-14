"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Bot,
  Box,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Cloud,
  FileText,
  Gauge,
  ImageIcon,
  Layers,
  LinkIcon,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  MessageSquareText,
  Network,
  Phone,
  Play,
  Save,
  ServerCrash,
  ShoppingCart,
  Sparkles,
  Star,
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

const steps = [
  {
    title: "Pick a Problem",
    text: "Choose from real-world system design challenges.",
    icon: Sparkles,
    tone: "text-fuchsia-300 bg-fuchsia-500/15",
  },
  {
    title: "Design",
    text: "Drag components onto the canvas and connect them.",
    icon: Box,
    tone: "text-blue-300 bg-blue-500/15",
  },
  {
    title: "Simulate & Evaluate",
    text: "Run evaluations to see how your system performs.",
    icon: Play,
    tone: "text-emerald-300 bg-emerald-500/15",
  },
  {
    title: "Get AI Help",
    text: "Ask the AI tutor for hints and trade-off guidance.",
    icon: MessageSquareText,
    tone: "text-violet-300 bg-violet-500/15",
  },
  {
    title: "Save & Improve",
    text: "Save designs and iterate toward production-ready thinking.",
    icon: Save,
    tone: "text-amber-300 bg-amber-500/15",
  },
];

const features = [
  {
    title: "Interactive Canvas",
    text: "React Flow drag-and-drop board with system components.",
    icon: Network,
    bullets: ["12+ Components", "Smart Connections", "Auto Layout", "Real-time Validation"],
  },
  {
    title: "Evaluation Engine",
    text: "In-depth analysis of architecture choices and risk areas.",
    icon: Gauge,
    bullets: ["DFS Path Detection", "SPOF Checks", "Security Best Practices", "Score & Feedback"],
  },
  {
    title: "Failure Simulator",
    text: "Simulate real-world pressure and learn where designs break.",
    icon: ServerCrash,
    bullets: ["Crash Events", "Latency Events", "Traffic Visualization", "Bottleneck Detection"],
  },
  {
    title: "AI Tutor",
    text: "Context-aware coaching that nudges without giving away answers.",
    icon: Bot,
    bullets: ["Powered by Gemini", "Board-aware Hints", "Socratic Guidance", "Interview Coaching"],
  },
  {
    title: "Design Persistence",
    text: "Never lose your work. Save, load, and resume anytime.",
    icon: Cloud,
    bullets: ["Cloud Sync", "Version-ready Flow", "Share & Export", "Access Anywhere"],
  },
];

const problems = [
  { title: "Design Uber", icon: "🚘" },
  { title: "Design Instagram", icon: "📸" },
  { title: "Design YouTube", icon: "▶" },
  { title: "Design Twitter (X)", icon: "𝕏" },
  { title: "Design ChatGPT", icon: "◎" },
  { title: "Explore All", icon: "▦" },
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
const premiumEase = [0.16, 1, 0.3, 1];

export default function LandingPage() {
  return (
    <main className="relative min-h-screen  text-white">
      <SiteHeader />
      <HeroSection />
      <TrustBar />
      <ProblemLibrary />
      <FeatureGrid />
      <HowItWorks />

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

function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Workflow"
        title="From Problem to Production"
        text="A hands-on workflow that mirrors real system design interviews."
      />
      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: premiumEase }}
            key={step.title}
            className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]"
          >
            <div className={`mb-8 grid size-12 place-items-center rounded-xl transition-transform group-hover:scale-110 group-hover:shadow-lg ${step.tone}`}>
              <step.icon className="size-6" />
            </div>
            <h3 className="text-base font-bold text-white/90">
              {index + 1}. {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section id="features" className="mx-auto grid max-w-[1760px] gap-12 px-6 py-24 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-20">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: premiumEase }}
        className="flex flex-col justify-center"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
          Powerful Features
        </p>
        <h2 className="max-w-xs text-4xl font-bold leading-tight tracking-[-0.03em] text-white">
          Everything you need to crush interviews.
        </h2>
        <Link href="#features" className="mt-8 inline-flex items-center text-sm font-medium text-violet-300 transition-colors hover:text-violet-200">
          Explore all features <ArrowRight className="ml-2 size-4" />
        </Link>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, i) => (
          <motion.article 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: premiumEase }}
            key={feature.title} 
            className="group rounded-2xl border border-white/[0.06] bg-[#0A0A0A]/80 p-7 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-[#111]"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-violet-300 shadow-sm transition-transform group-hover:scale-110">
                <feature.icon className="size-5" />
              </div>
              <h3 className="font-bold text-white/90">{feature.title}</h3>
            </div>
            <p className="min-h-[80px] text-sm leading-relaxed text-slate-400">{feature.text}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              {feature.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <div className="flex size-4 items-center justify-center rounded-full bg-violet-500/10">
                    <Check className="size-3 text-violet-300" />
                  </div>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
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


const problemData = [
  { title: "Design Uber", brand: "Uber", difficulty: "Hard", diffColor: "text-red-400 border-red-400/20 bg-red-400/10", time: "45 min", category: "Distributed Systems" },
  { title: "Design Twitter", icon: MessageSquare, difficulty: "Hard", diffColor: "text-red-400 border-red-400/20 bg-red-400/10", time: "60 min", category: "Distributed Systems" },
  { title: "Design WhatsApp", icon: Phone, difficulty: "Hard", diffColor: "text-red-400 border-red-400/20 bg-red-400/10", time: "50 min", category: "Distributed Systems" },
  { title: "Design Netflix", brand: "N", difficulty: "Medium", diffColor: "text-amber-400 border-amber-400/20 bg-amber-400/10", time: "60 min", category: "Streaming" },
  { title: "Design URL Shortener", icon: LinkIcon, difficulty: "Easy", diffColor: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10", time: "30 min", category: "Web Services" },
  { title: "Design Pastebin", icon: FileText, difficulty: "Medium", diffColor: "text-amber-400 border-amber-400/20 bg-amber-400/10", time: "40 min", category: "Storage" },
  { title: "Design Instagram Feed", icon: ImageIcon, difficulty: "Medium", diffColor: "text-amber-400 border-amber-400/20 bg-amber-400/10", time: "50 min", category: "Distributed Systems" },
  { title: "Design Notification System", icon: Bell, difficulty: "Medium", diffColor: "text-amber-400 border-amber-400/20 bg-amber-400/10", time: "45 min", category: "Messaging" },
  { title: "Design E-commerce Store", icon: ShoppingCart, difficulty: "Hard", diffColor: "text-red-400 border-red-400/20 bg-red-400/10", time: "60 min", category: "Distributed Systems" },
  { title: "Design Chat System", icon: MessageCircle, difficulty: "Medium", diffColor: "text-amber-400 border-amber-400/20 bg-amber-400/10", time: "45 min", category: "Messaging" },
  { title: "Design File Storage", icon: Cloud, difficulty: "Easy", diffColor: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10", time: "40 min", category: "Storage" },
  { title: "Design Google Maps", icon: MapPin, difficulty: "Hard", diffColor: "text-red-400 border-red-400/20 bg-red-400/10", time: "60 min", category: "Geospatial" },
];

function ProblemLibrary() {
  return (
    <section id="problems" className="relative border-t border-white/5 bg-[#050505] px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] items-start gap-16 lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr]">
        
        {/* LEFT COLUMN: Sticky Header Content */}
        <div className="sticky top-32 flex flex-col items-start">
          {/* Subtle background grid trapped only in the left column */}
          <div 
            className="absolute -inset-x-6 -inset-y-24 -z-10 opacity-[0.04]"
            style={{ 
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse 80% 80% at 0% 50%, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 0% 50%, black 40%, transparent 100%)'
            }}
          />

          <div className="mb-6 flex items-center gap-2 text-sm font-bold tracking-[0.15em] text-[#ff5c00]">
            <Layers className="size-5" />
            PROBLEM LIBRARY
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[52px]">
            <span className="text-[#ff5c00]">25+</span> Real Interview Problems, Ready to Solve.
          </h2>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-zinc-400">
            These are the exact problems asked at FAANG — Uber, Twitter, WhatsApp, Netflix, URL Shortener, Pastebin, Instagram Feed, Notification System, and more.<br/><br/>
            Each with difficulty tags.
          </p>
        </div>

        {/* RIGHT COLUMN: Scrolling Card Grid */}
        <div className="flex flex-col">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {problemData.map((problem, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                key={problem.title}
                className="group relative flex cursor-pointer flex-col rounded-[16px] border border-white/5 bg-[#0C0C0C] p-5 transition-all hover:border-white/10 hover:bg-[#111111]"
              >
                {/* Card Top: Icon, Title, Badge */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    {/* App Icon Box */}
                    <div className="grid size-[46px] shrink-0 place-items-center rounded-xl bg-white/5 text-zinc-300 transition-colors group-hover:bg-white/10 group-hover:text-white">
                      {problem.brand ? (
                        <span className="text-sm font-bold tracking-tight">{problem.brand}</span>
                      ) : (
                        problem.icon && <problem.icon className="size-5" />
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-[15px] font-semibold text-white/90 transition-colors group-hover:text-white">
                        {problem.title}
                      </h3>
                      {/* Difficulty Badge */}
                      <div className={`mt-2 w-fit rounded-[4px] border px-1.5 py-[2px] text-[10px] font-semibold tracking-wide ${problem.diffColor}`}>
                        {problem.difficulty}
                      </div>
                    </div>
                  </div>
                  
                  {/* Chevron Right */}
                  <ChevronRight className="size-5 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-zinc-400" />
                </div>

                {/* Card Bottom: Time & Category */}
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs font-medium text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {problem.time}
                  </div>
                  <div>{problem.category}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Action */}
          <div className="mt-12 flex justify-center">
            <Link 
              href="/problems" 
              className="group flex items-center gap-2 text-sm font-semibold text-[#ff5c00] transition-colors hover:text-[#ff7a33]"
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

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}