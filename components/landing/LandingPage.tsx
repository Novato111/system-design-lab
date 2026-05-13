import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  Box,
  Check,
  ChevronDown,
  Cloud,
  Database,
  Gauge,
  GitBranch,
  Grid3X3,
  Layers3,
  Lock,
  Mail,
  MessageSquareText,
  Network,
  Play,
  Save,
  ServerCrash,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = ["Features", "How It Works", "Problems", "Pricing", "About"];

const stats = [
  { value: "50,000+", label: "Designs Created", icon: Box },
  { value: "98.7%", label: "Satisfaction Rate", icon: Zap },
  { value: "25K+", label: "Engineers Learning", icon: Grid3X3 },
  { value: "4.9/5", label: "From 2,000+ Reviews", icon: Star },
];

const companies = [
  "Google",
  "Amazon",
  "Microsoft",
  "Netflix",
  "Airbnb",
  "Disney+",
  "Stripe",
  "LinkedIn",
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

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02070d] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_72%_18%,rgba(59,130,246,0.12),transparent_26%),radial-gradient(circle_at_16%_24%,rgba(14,165,233,0.08),transparent_28%),linear-gradient(180deg,#02070d_0%,#050d16_52%,#02070d_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] [background-size:32px_32px]" />

      <SiteHeader />
      <HeroSection />
      <TrustBar />
      <FeatureGrid />
      <FinalCta />
      <HowItWorks />
      <ProblemLibrary />
      <Testimonials />
      <SiteFooter />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#02070d]/82 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-[1760px] items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-md border border-white/85 bg-white/[0.02]">
            <Box className="size-6 text-white" />
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-[-0.02em]">SysDesign Lab</div>
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
              Simulator
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-11 text-sm font-medium text-white/90 lg:flex">
          {navItems.slice(0, 4).map((item) => (
            <Link key={item} href={`#${slugify(item)}`} className="hover:text-white">
              {item}
            </Link>
          ))}
          <Link href="#" className="flex items-center gap-1 hover:text-white">
            Resources <ChevronDown className="size-3" />
          </Link>
          <Link href="#" className="hover:text-white">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="hidden h-11 rounded-md border-white/15 bg-transparent px-5 text-white hover:bg-white/10 sm:inline-flex"
          >
            <Link href="/problems">Log in</Link>
          </Button>
          <Button
            asChild
            className="h-11 rounded-md bg-white px-6 font-semibold text-black hover:bg-slate-200"
          >
            <Link href="/problems">
              Start for Free <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative mx-auto grid max-w-[1760px] gap-12 px-6 pb-8 pt-16 lg:grid-cols-[510px_minmax(0,1fr)] lg:px-20 lg:pb-12 lg:pt-20">
      <div className="flex flex-col justify-center">
        <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/[0.025] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-200">
          <span className="grid size-4 place-items-center rounded-full border border-blue-300/70">
            <span className="size-1.5 rounded-full bg-blue-300" />
          </span>
          Practice. Visualize. Master.
        </div>
        <h1 className="max-w-xl text-5xl font-extrabold leading-[1.08] tracking-[-0.045em] text-white md:text-[64px]">
          Practice System Design Like It&apos;s{" "}
          <span className="text-[#7f95ff]">Production.</span>
        </h1>
        <p className="mt-7 max-w-lg text-lg leading-8 text-slate-300">
          Build real-world architectures on an interactive canvas, simulate
          failures, get AI feedback, and level up for your next system design
          interview.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-md bg-white px-7 text-base font-semibold text-black hover:bg-slate-200"
          >
            <Link href="/problems">
              Start Designing for Free <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 rounded-md border-white/20 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10"
          >
            <Link href="/problems">Explore Problems</Link>
          </Button>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <div className="flex -space-x-2">
            {["A", "P", "R", "S", "N"].map((initial, index) => (
              <div
                key={initial}
                className="grid size-10 place-items-center rounded-full border-2 border-[#02070d] bg-slate-700 text-xs font-bold"
                style={{
                  backgroundColor: [
                    "#475569",
                    "#0f766e",
                    "#7c3aed",
                    "#b45309",
                    "#0369a1",
                  ][index],
                }}
              >
                {initial}
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-1 text-amber-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-sm text-slate-400">Loved by 10,000+ engineers worldwide</p>
          </div>
        </div>
      </div>

      <div className="relative min-h-[610px]">
        <DashboardMockup />
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="px-6 pb-8 pt-2 lg:px-20">
      <div className="mx-auto max-w-[1260px]">
        <div className="grid grid-cols-2 gap-8 text-center text-xl font-semibold text-slate-400/90 sm:grid-cols-4 lg:grid-cols-8">
          {companies.map((company) => (
            <div key={company}>{company}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-2xl border border-white/14 bg-[#050a10]/95 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3">
        <div className="flex items-center gap-3">
          <button className="grid size-9 place-items-center rounded-md border border-white/8 bg-white/[0.03] text-slate-400">
            <Grid3X3 className="size-4" />
          </button>
          <div className="h-7 w-px bg-white/10" />
          <div className="flex items-center gap-2 text-sm font-medium">
            <Database className="size-4 text-slate-400" />
            Design Uber
            <ChevronDown className="size-3 text-slate-500" />
          </div>
          <span className="ml-3 text-xs text-emerald-300">✓ Auto-saved</span>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          {["Share", "Export"].map((item) => (
            <button key={item} className="rounded-md border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-slate-300">
              {item}
            </button>
          ))}
          <button className="rounded-md bg-[#1f2a5d] px-4 py-2 text-xs font-semibold text-white">
            Run Evaluation
          </button>
        </div>
      </div>

      <div className="grid min-h-[430px] lg:grid-cols-[150px_minmax(0,1fr)_222px]">
        <aside className="hidden border-r border-white/10 p-3 lg:block">
          <p className="mb-4 text-xs text-slate-400">Components</p>
          {[
            "Load Balancer",
            "API Gateway",
            "Web Server",
            "Application Server",
            "Database",
            "Cache",
            "Message Queue",
            "Object Storage",
            "CDN",
            "DNS",
            "Monitoring",
            "Auth Service",
          ].map((item) => (
            <div key={item} className="mb-3 flex items-center gap-3 text-[11px] text-slate-300">
              <span className="grid size-5 place-items-center rounded border border-white/10 text-slate-500">
                <Box className="size-3" />
              </span>
              {item}
            </div>
          ))}
          <button className="mt-1 w-full rounded-md border border-white/10 py-2 text-xs text-slate-300">
            More Components
          </button>
        </aside>

        <div className="relative overflow-hidden border-r border-white/10 bg-[#03070c]">
          <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(rgba(148,163,184,0.24)_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute left-4 top-4 z-20 flex gap-2">
            {["↖", "↻", "⌕", "⊞", "▦"].map((item) => (
              <span key={item} className="grid size-8 place-items-center rounded-md border border-white/10 bg-black/35 text-xs text-slate-400">
                {item}
              </span>
            ))}
          </div>
          <CanvasNode className="left-[9%] top-[45%]" label="Client Balancer" icon={<Lock className="size-4" />} />
          <CanvasNode className="left-[23%] top-[45%]" label="DNS" icon={<Network className="size-4" />} />
          <CanvasNode className="left-[36%] top-[45%]" label="Load Balancer" icon={<Layers3 className="size-4" />} />
          <CanvasNode className="left-[52%] top-[35%]" label="API Gateway" icon={<ServerCrash className="size-4" />} cyan />
          <CanvasNode className="left-[52%] top-[58%]" label="API Gateway" icon={<ServerCrash className="size-4" />} cyan />
          <CanvasNode className="left-[66%] top-[22%]" label="Web Server" icon={<Box className="size-4" />} active />
          <CanvasNode className="left-[68%] top-[47%]" label="Application Server" icon={<Box className="size-4" />} active />
          <CanvasNode className="left-[86%] top-[24%]" label="Cache" icon={<Database className="size-4" />} danger />
          <CanvasNode className="left-[86%] top-[42%]" label="User DB" icon={<Database className="size-4" />} blue />
          <CanvasNode className="left-[86%] top-[58%]" label="NoSQL DB" icon={<Database className="size-4" />} blue />
          <CanvasNode className="left-[86%] top-[76%]" label="Object Storage" icon={<Cloud className="size-4" />} active />
          <CanvasNode className="left-[61%] top-[79%]" label="Monitoring" icon={<Gauge className="size-4" />} active />
          <div className="absolute left-[14%] top-[45%] h-px w-[9%] bg-slate-500/55" />
          <div className="absolute left-[28%] top-[45%] h-px w-[8%] bg-slate-500/55" />
          <div className="absolute left-[41%] top-[45%] h-px w-[8%] bg-slate-500/55" />
          <div className="absolute left-[57%] top-[35%] h-px w-[9%] bg-slate-500/55" />
          <div className="absolute left-[58%] top-[58%] h-px w-[10%] bg-slate-500/55" />
          <div className="absolute left-[74%] top-[47%] h-px w-[12%] bg-slate-500/55" />
          <div className="absolute left-[74%] top-[65%] h-px w-[12%] bg-slate-500/55" />
        </div>

        <aside className="hidden p-4 lg:block">
          <p className="mb-6 text-sm font-semibold">Evaluation</p>
          <div className="mx-auto grid size-28 place-items-center rounded-full border-[7px] border-emerald-400/80 text-center">
            <div>
              <div className="text-4xl font-bold">82</div>
              <div className="text-xs text-slate-400">/100</div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-emerald-300">Good Start 🔥</p>
          <div className="my-6 h-px bg-white/10" />
          <p className="mb-4 text-xs text-slate-400">Top Issues</p>
          <div className="space-y-4 text-[11px] text-slate-300">
            <Issue tone="bg-red-500" label="Single point of failure" />
            <Issue tone="bg-amber-400" label="Missing Cache Layer" />
            <Issue tone="bg-blue-400" label="No Auto Scaling" />
          </div>
          <button className="mt-8 w-full rounded-md border border-white/10 bg-white/[0.02] py-3 text-xs text-[#9aa7ff]">
            View Full Report →
          </button>
        </aside>
      </div>

      <div className="grid border-t border-white/10 lg:grid-cols-[1fr_400px]">
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <stat.icon className="size-5 text-[#8b7cff]" />
              <div>
                <div className="text-xl font-semibold">{stat.value}</div>
                <div className="text-[10px] text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-3 border-t border-white/10 p-3 sm:grid-cols-2 lg:border-l lg:border-t-0">
          <MiniMetric title="AI Tutor" value="3 suggestions available" icon={<Bot className="size-4" />} />
          <MiniMetric title="Simulation" value="2 issues detected" icon={<Sparkles className="size-4" />} />
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeading
        eyebrow="How It Works"
        title="From Problem to Production-Ready Thinking"
        text="A hands-on workflow that mirrors real system design interviews."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step.title} className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <div className={`mb-8 grid size-12 place-items-center rounded-xl ${step.tone}`}>
              <step.icon className="size-6" />
            </div>
            <h3 className="text-base font-bold">
              {index + 1}. {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section id="features" className="mx-auto grid max-w-[1760px] gap-6 border-t border-white/10 px-6 py-6 lg:grid-cols-[285px_minmax(0,1fr)] lg:px-20">
      <div className="flex flex-col justify-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-slate-400">
          Powerful Features
        </p>
        <h2 className="max-w-xs text-3xl font-semibold leading-tight tracking-[-0.035em]">
          Everything you need to crush system design interviews.
        </h2>
        <Link href="#features" className="mt-8 text-sm font-medium text-[#9aa7ff]">
          Explore all features →
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid size-8 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-[#8b7cff]">
                <feature.icon className="size-5" />
              </div>
              <h3 className="font-bold">{feature.title}</h3>
            </div>
            <p className="min-h-24 text-sm leading-6 text-slate-400">{feature.text}</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {feature.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <Check className="size-4 text-white" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProblemLibrary() {
  return (
    <section id="problems" className="mx-auto max-w-7xl px-5 pb-20 text-center lg:px-8">
      <SectionHeading
        eyebrow="Popular Problems"
        title="Practice What Matters"
        text="50,000+ real-world problem attempts across different difficulty levels."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {problems.map((problem) => (
          <Link
            href="/problems"
            key={problem.title}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.06]"
          >
            <div className="mx-auto mb-4 grid size-12 place-items-center rounded-xl bg-white/5 text-2xl">
              {problem.icon}
            </div>
            <div className="text-sm font-semibold">{problem.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
      <SectionHeading
        eyebrow="Loved by Engineers"
        title="Helping Engineers Crack Top Tech Interviews"
        text=""
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-2xl border border-white/10 bg-white/[0.035] p-7">
            <div className="mb-5 text-4xl font-black text-violet-300">“</div>
            <p className="min-h-24 text-sm leading-7 text-slate-300">{testimonial.quote}</p>
            <div className="mt-7 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-slate-900 text-lg font-black">
                {testimonial.mark}
              </div>
              <div>
                <div className="text-sm font-bold">{testimonial.name}</div>
                <div className="text-xs text-slate-400">{testimonial.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {[0, 1, 2, 3, 4].map((dot) => (
          <span
            key={dot}
            className={`size-2 rounded-full ${dot === 0 ? "bg-violet-300" : "bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-[1760px] px-6 pb-12 pt-0 lg:px-20">
      <div className="grid gap-8 rounded-xl border border-white/12 bg-white/[0.025] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-9">
        <div className="flex items-center gap-7">
          <div className="hidden size-14 place-items-center rounded-lg border border-[#8ea2ff] text-[#8ea2ff] md:grid">
            <Box className="size-8" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.035em]">
              Ready to master system design?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Join thousands of engineers and build the skills to design scalable,
              reliable systems.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <div className="flex flex-wrap gap-8 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Check className="size-4 text-white" /> Free forever plan
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-white" /> No credit card required
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-white" /> Cancel anytime
            </span>
          </div>
          <Button
            asChild
            size="lg"
            className="h-14 rounded-md bg-white px-7 text-base font-semibold text-black hover:bg-slate-200"
          >
            <Link href="/problems">
              Start Designing for Free <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.7fr_0.7fr_0.7fr_1.25fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg border border-violet-400/50 bg-violet-500/10">
              <Box className="size-5 text-violet-300" />
            </div>
            <div>
              <div className="font-bold">SysDesign Lab</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-violet-300">
                Simulator
              </div>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-400">
            The modern system design simulator to practice, visualize, and master
            scalable architectures.
          </p>
        </div>
        <FooterColumn title="Product" items={["Features", "Simulator", "Practice", "Roadmap", "Pricing"]} />
        <FooterColumn title="Resources" items={["Blog", "System Design 101", "Tutorials", "Cheatsheets", "FAQ"]} />
        <FooterColumn title="Company" items={["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service"]} />
        <div>
          <h3 className="mb-4 text-sm font-bold">Stay Updated</h3>
          <p className="mb-5 text-sm leading-6 text-slate-400">
            Get the latest updates and resources delivered to your inbox.
          </p>
          <form className="flex overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <div className="grid place-items-center pl-4 text-slate-500">
              <Mail className="size-4" />
            </div>
            <input
              id="email"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="Enter your email"
            />
            <button className="grid w-12 place-items-center bg-violet-600 text-white" type="button">
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-sm text-slate-500">
        © 2026 SysDesign Lab. All rights reserved.
      </p>
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
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.34em] text-violet-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-slate-400">{text}</p>}
    </div>
  );
}

function CanvasNode({
  className,
  label,
  icon,
  active,
  purple,
  cyan,
  orange,
  danger,
  blue,
}: {
  className: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
  purple?: boolean;
  cyan?: boolean;
  orange?: boolean;
  danger?: boolean;
  blue?: boolean;
}) {
  const tone = active
    ? "border-emerald-300/45 bg-emerald-500/15 text-emerald-200"
    : purple
      ? "border-violet-300/45 bg-violet-500/15 text-violet-200"
      : cyan
        ? "border-cyan-300/45 bg-cyan-500/15 text-cyan-200"
        : orange
          ? "border-amber-300/45 bg-amber-500/15 text-amber-200"
          : danger
            ? "border-red-300/45 bg-red-500/15 text-red-200"
            : blue
              ? "border-blue-300/45 bg-blue-500/15 text-blue-200"
              : "border-white/15 bg-white/8 text-white";

  return (
    <div
      className={`absolute z-10 grid w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-lg border px-2 py-3 text-center text-[10px] font-semibold shadow-lg ${tone} ${className}`}
    >
      <div className="mb-1">{icon}</div>
      {label}
    </div>
  );
}

function Issue({ tone, label }: { tone: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`size-2 rounded-full ${tone}`} />
      <span>{label}</span>
    </div>
  );
}

function MiniMetric({ title, value, icon }: { title: string; value: string; icon: ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#071323]/90 p-4 backdrop-blur">
      <div className="mb-2 flex items-center gap-2 text-violet-300">
        {icon}
        <span className="text-sm font-bold">{title}</span>
      </div>
      <div className="text-xs text-slate-400">{value}</div>
    </div>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold">{title}</h3>
      <ul className="space-y-3 text-sm text-slate-400">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="hover:text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}
