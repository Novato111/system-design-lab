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
import posthog from "posthog-js";

// Reusable premium easing curve for that "shadcn" feel
const premiumEase = [0.06, 1, 0.3, 1] as const;

export function FinalCta() {
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
              onClick={() => posthog.capture("final_cta_clicked", { location: "bottom_cta" })}
            >
              <Link href="/coming-soon">
                Start for Free <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
