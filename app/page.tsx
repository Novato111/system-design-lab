import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ArchitectLandingPage() {
  return (
    <>
      {/* Font imports - In a production Next.js app, consider moving these to layout.tsx using next/font/google */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <div className="font-body-md overflow-x-hidden min-h-screen bg-[#050505] text-[#d4e4fa]">
        {/* Top Navigation */}
        <nav className="sticky top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
            <div className="text-xl font-bold tracking-tighter text-white uppercase">
              ARCHITECT
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                className="font-sans text-sm font-medium tracking-tight text-white hover:text-indigo-400 transition-colors"
                href="#"
              >
                Product
              </Link>
              <Link
                className="font-sans text-sm font-medium tracking-tight text-neutral-400 hover:text-indigo-400 transition-colors"
                href="#"
              >
                Solutions
              </Link>
              <Link
                className="font-sans text-sm font-medium tracking-tight text-neutral-400 hover:text-indigo-400 transition-colors"
                href="#"
              >
                Docs
              </Link>
              <Link
                className="font-sans text-sm font-medium tracking-tight text-neutral-400 hover:text-indigo-400 transition-colors"
                href="#"
              >
                Pricing
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="hidden md:flex text-neutral-400 hover:text-white hover:bg-white/[0.05]"
              >
                Login
              </Button>
              <Button
                asChild
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)]"
              >
                <Link href="/problems">Launch App</Link>
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 dot-grid -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10"></div>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="font-display text-[48px] md:text-[80px] font-[800] leading-[1.1] text-white max-w-5xl mx-auto mb-8 tracking-tighter">
              Master System Design by Building Real Systems
            </h1>
            <p className="font-body-lg text-neutral-400 max-w-2xl mx-auto mb-12 text-lg">
              Build, simulate, stress-test, and get AI-powered expert feedback
              on architectures — the professional way to level up as a Staff+
              engineer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-bold bg-indigo-600 hover:bg-indigo-700 text-white indigo-glow w-full sm:w-auto"
              >
                <Link href="/problems">Launch App</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-medium border-white/[0.1] hover:bg-white/[0.05] text-white w-full sm:w-auto bg-transparent"
              >
                <img
                  src="/githubIcon.svg"
                  alt="github"
                  className="w-5 h-5 mr-2"
                />
                Github Repo
              </Button>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="surgical-border bg-[#0A0A0A] p-4 rounded-xl shadow-2xl relative">
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              <div className="ml-4 flex items-center gap-2 text-[12px] font-mono text-neutral-500 bg-neutral-900 px-3 py-1 rounded-md border border-white/[0.06]">
                <span className="material-symbols-outlined text-[14px]">
                  terminal
                </span>
                arch_production_v4.system
              </div>
            </div>
            <div className="relative overflow-hidden bg-[#050505] rounded-lg aspect-">
              <img
                alt="ARCHITECT Dashboard Mockup"
                className="w-full h-full object-cover opacity-80"
                src="/hero.png"
              />
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 bg-neutral-950 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
              {/* Large Card */}
              <div className="md:col-span-8 md:row-span-2 surgical-border rounded-xl bg-[#0A0A0A] p-8 flex flex-col justify-between group hover:bg-[#0c0c0c] transition-colors">
                <div>
                  <span className="material-symbols-outlined text-indigo-500 text-4xl mb-6">
                    gesture
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    Drag & Drop Infinite Canvas
                  </h3>
                  <p className="text-neutral-400 max-w-md leading-relaxed">
                    Design at the speed of thought. Our custom-engine canvas
                    handles thousands of nodes with zero latency and
                    pixel-perfect precision.
                  </p>
                </div>
                <div className="flex gap-4 items-center mt-8">
                  <span className="text-[12px] font-mono text-neutral-500 font-medium">
                    60 FPS RENDERING
                  </span>
                  <div className="flex-grow border-b border-white/[0.06] border-dashed"></div>
                  <span className="text-[12px] font-mono text-neutral-500 font-medium">
                    GPU ACCELERATED
                  </span>
                </div>
              </div>
              {/* Small Card */}
              <div className="md:col-span-4 surgical-border rounded-xl bg-[#0A0A0A] p-8 flex flex-col justify-between hover:bg-[#0c0c0c] transition-colors">
                <span className="material-symbols-outlined text-indigo-500 text-2xl">
                  monitoring
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    Real-time Simulation
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Inject latency and drop packets in real-time.
                  </p>
                </div>
              </div>
              {/* Small Card */}
              <div className="md:col-span-4 surgical-border rounded-xl bg-[#0A0A0A] p-8 flex flex-col justify-between hover:bg-[#0c0c0c] transition-colors">
                <span className="material-symbols-outlined text-indigo-500 text-2xl">
                  auto_awesome
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    AI Critique & Scoring
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Feedback from a virtual Senior Staff Engineer.
                  </p>
                </div>
              </div>
              {/* Small Card */}
              <div className="md:col-span-4 surgical-border rounded-xl bg-[#0A0A0A] p-8 flex flex-col justify-between hover:bg-[#0c0c0c] transition-colors">
                <span className="material-symbols-outlined text-indigo-500 text-2xl">
                  bolt
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    Failure Injection
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Chaos monkey tests for your architecture.
                  </p>
                </div>
              </div>
              {/* Medium Card */}
              <div className="md:col-span-4 surgical-border rounded-xl bg-[#0A0A0A] p-8 flex flex-col justify-between hover:bg-[#0c0c0c] transition-colors">
                <span className="material-symbols-outlined text-indigo-500 text-2xl">
                  integration_instructions
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    IaC Export
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Turn your canvas into Terraform or K8s manifests instantly.
                  </p>
                </div>
              </div>
              {/* Small Card */}
              <div className="md:col-span-4 surgical-border rounded-xl bg-[#0A0A0A] p-8 flex flex-col justify-between hover:bg-[#0c0c0c] transition-colors">
                <span className="material-symbols-outlined text-indigo-500 text-2xl">
                  group
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    Collaborative Workspaces
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Multiplayer editing for engineering teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 border-y border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-16 tracking-tight">
              Trusted by the best in the industry
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="surgical-border rounded-xl p-8 bg-[#0A0A0A]/50 backdrop-blur-sm">
                <p className="text-neutral-300 mb-8 italic leading-relaxed">
                  "ARCHITECT has completely changed how we onboard new staff
                  engineers. The ability to simulate chaos on a canvas is
                  unparalleled."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10"></div>
                  <div>
                    <p className="text-sm font-bold text-white">Marcus Chen</p>
                    <p className="text-[12px] font-mono text-neutral-500">
                      Staff Engineer, Stripe
                    </p>
                  </div>
                </div>
              </div>
              <div className="surgical-border rounded-xl p-8 bg-[#0A0A0A]/50 backdrop-blur-sm">
                <p className="text-neutral-300 mb-8 italic leading-relaxed">
                  "The AI critique feels like having a principal engineer
                  looking over your shoulder. It caught a race condition in our
                  DB design."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10"></div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Sarah Jenkins
                    </p>
                    <p className="text-[12px] font-mono text-neutral-500">
                      VP Eng, Vercel
                    </p>
                  </div>
                </div>
              </div>
              <div className="surgical-border rounded-xl p-8 bg-[#0A0A0A]/50 backdrop-blur-sm">
                <p className="text-neutral-300 mb-8 italic leading-relaxed">
                  "No more whiteboarding sessions that disappear. We build
                  everything in ARCHITECT and export to production Terraform."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10"></div>
                  <div>
                    <p className="text-sm font-bold text-white">Alex Volkov</p>
                    <p className="text-[12px] font-mono text-neutral-500">
                      Principal Architect, Airbnb
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-500/5 -z-10"></div>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to design like a principal engineer?
            </h2>
            <p className="text-xl text-neutral-400 mb-12">
              Join 40,000+ engineers building robust, scalable systems with
              ARCHITECT.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link rel="stylesheet" href="/problems">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-16 px-10 text-lg font-bold bg-indigo-600 hover:bg-indigo-700 text-white indigo-glow"
                >
                  Launch app
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-neutral-950 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-12 px-8 max-w-7xl mx-auto">
            <div className="text-lg font-black text-white uppercase tracking-widest">
              ARCHITECT
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                href="#"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                href="#"
              >
                Security
              </Link>
              <Link
                className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                href="#"
              >
                Status
              </Link>
            </div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-600">
              © 2026 ARCHITECT Systems Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
