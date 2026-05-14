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
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { AnimatedCanvasMock } from "./AnimatedCanvasMock";
import { SequenceEvaluationPanel } from "./SequenceEvaluationPanel";

// Snappy, fast easing curve for the premium card pop-in
const snappyEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delays each card slightly for a wave effect
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: snappyEase,
    },
  },
};

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden bg-[#050505] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_12%,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_18%_40%,rgba(255,255,255,0.045),transparent_30%)]" />
      <div className="relative z-[2] mx-auto max-w-[1180px]">
        
        {/* Animated Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: snappyEase }}
        >
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#ff5c00] sm:text-sm">
            Features
          </div>

          <h2 className="max-w-[760px] text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-[44px]">
            Built for serious system design practice.
          </h2>

          <p className="mt-4 max-w-[460px] text-sm leading-7 text-zinc-300/80 sm:text-base">
            Every feature is engineered to mirror real-world complexity and help
            you think like a systems engineer.
          </p>
        </motion.div>

        {/* 
          UNIFORM BENTO GRID: 
          - 1 column on mobile, 2 on tablet, 3 on desktop.
          - STRICT auto-rows set to 380px so every card is exactly the same height.
        */}
        <motion.div 
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[380px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Interactive Canvas */}
          <FeatureCard variants={cardVariants}>
            <div className="flex shrink-0 items-center justify-between">
              <FeatureNumber value="01" />
              <div className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
                <Box className="size-4" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">
              Interactive Canvas
            </h3>
            <p className="mt-2 text-[13px] leading-5 text-zinc-300/80 line-clamp-2">
              Drag and drop 12 system components. Connect them with edges to
              mirror real production systems.
            </p>
            {/* The animation container takes exactly the remaining space */}
            <div className="relative mt-4 flex-1 overflow-hidden rounded-xl border border-white/10 bg-black/30">
              <AnimatedCanvasMock />
            </div>
          </FeatureCard>

          {/* Card 2: Evaluation Engine */}
          <FeatureCard variants={cardVariants}>
            <div className="flex shrink-0 items-center justify-between">
              <FeatureNumber value="02" />
              <div className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
                <BarChart3 className="size-4" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">
              Evaluation Engine
            </h3>
            <p className="mt-2 text-[13px] leading-5 text-zinc-300/80 line-clamp-2">
              Rule-based validator that runs DFS path detection. Detects SPOFs
              and security gaps.
            </p>
            <div className="relative mt-4 flex flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 p-2">
              <div className="flex-1 overflow-hidden">
                <SequenceEvaluationPanel />
              </div>
            </div>
          </FeatureCard>

          {/* Card 3: Failure Simulator */}
          <FeatureCard variants={cardVariants}>
            <div className="flex shrink-0 items-center justify-between">
              <FeatureNumber value="03" />
              <div className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
                <Activity className="size-4" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">
              Failure Simulator
            </h3>
            <p className="mt-2 text-[13px] leading-5 text-zinc-300/80 line-clamp-2">
              Scripted event engine animates crashes and traffic spikes in real
              time. See what breaks.
            </p>
            {/* Added inner wrapper matching Card 1 & 2 */}
            <div className="relative mt-4 flex flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 p-3">
              <FailureSimulationMock />
            </div>
          </FeatureCard>

          {/* Card 4: AI Tutor */}
          <FeatureCard variants={cardVariants}>
            <div className="flex shrink-0 items-center justify-between">
              <FeatureNumber value="04" />
              <div className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
                <MessageSquare className="size-4" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">
              AI Tutor
            </h3>
            <p className="mt-2 text-[13px] leading-5 text-zinc-300/80 line-clamp-2">
              Context-aware coach reads your graph and gives Socratic hints
              specific to your design.
            </p>
            {/* Added inner wrapper matching Cards 1, 2, & 3 */}
            <div className="relative mt-4 flex flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 p-3">
              <AITutorMock />
            </div>
          </FeatureCard>

          {/* Card 5: Design Persistence */}
          <FeatureCard variants={cardVariants}>
            <div className="flex shrink-0 items-center justify-between">
              <FeatureNumber value="05" />
              <div className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
                <Save className="size-4" />
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-white">
              Design Persistence
            </h3>
            <p className="mt-2 text-[13px] leading-5 text-zinc-300/80 line-clamp-2">
              Designs are saved and synced. Pick up where you left off. Share or
              export as JSON.
            </p>
            {/* Added inner wrapper matching Cards 1, 2, 3 & 4 */}
            <div className="relative mt-4 flex flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 p-3">
              <DesignPersistenceMock />
            </div>
          </FeatureCard>
        </motion.div>
      </div>
    </section>
  );
}

// Converted to motion.article to support card animations
function FeatureCard({
  children,
  className = "",
  variants,
}: {
  children: ReactNode;
  className?: string;
  variants?: any;
}) {
  return (
    <motion.article
      variants={variants}
      className={`relative h-full w-full overflow-hidden rounded-[14px] border border-white/[0.09] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_24px_80px_rgba(0,0,0,0.28)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.07),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.article>
  );
}

function FeatureNumber({ value }: { value: string }) {
  return (
    <div className="text-xs font-semibold tracking-[0.06em] text-[#ff5c00]">
      {value}
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
    <div
      className={`rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 font-medium ${tone}`}
    >
      {label}
    </div>
  );
}

function FailureSimulationMock() {
  const DURATION = 6;
  const TIMES = [0, 0.3, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

  const normalColor = "#ffffff1a"; 
  const spikeColor = "#f97316"; 
  const crashColor = "#ef4444"; 
  const dimColor = "#3f3f46"; 

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="relative mt-2 flex items-center justify-between px-2">
        <div className="absolute inset-x-8 top-1/2 flex -translate-y-1/2 items-center px-4">
          <motion.div
            className="h-[2px] w-full"
            animate={{
              backgroundColor: [
                dimColor, dimColor, 
                spikeColor, spikeColor, 
                crashColor, crashColor, 
                dimColor, dimColor, 
              ],
            }}
            transition={{ duration: DURATION, times: TIMES, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <motion.div
            className="grid size-8 place-items-center rounded-lg border bg-[#0a0a0a]"
            animate={{
              borderColor: [
                normalColor, normalColor,
                spikeColor, spikeColor,
                dimColor, dimColor,
                normalColor, normalColor,
              ],
            }}
            transition={{ duration: DURATION, times: TIMES, repeat: Infinity }}
          >
            <Globe2 className="size-4 text-zinc-300" />
          </motion.div>
          <span className="text-[9px] font-medium text-zinc-500">Web</span>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <motion.div
            className="grid size-8 place-items-center rounded-lg border bg-[#0a0a0a]"
            animate={{
              borderColor: [
                normalColor, normalColor,
                spikeColor, spikeColor,
                crashColor, crashColor,
                normalColor, normalColor,
              ],
              boxShadow: [
                "0 0 0 rgba(249,115,22,0)", "0 0 0 rgba(249,115,22,0)",
                "0 0 12px rgba(249,115,22,0.4)", "0 0 12px rgba(249,115,22,0.4)",
                "0 0 12px rgba(239,68,68,0.4)", "0 0 12px rgba(239,68,68,0.4)",
                "0 0 0 rgba(249,115,22,0)", "0 0 0 rgba(249,115,22,0)",
              ],
            }}
            transition={{ duration: DURATION, times: TIMES, repeat: Infinity }}
          >
            <Activity className="size-4 text-zinc-300" />
          </motion.div>
          <span className="text-[9px] font-medium text-zinc-500">API</span>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <motion.div
            className="grid size-8 place-items-center rounded-lg border bg-[#0a0a0a]"
            animate={{
              borderColor: [
                normalColor, normalColor,
                spikeColor, spikeColor,
                crashColor, crashColor,
                normalColor, normalColor,
              ],
              color: [
                "#d4d4d8", "#d4d4d8", 
                "#f97316", "#f97316", 
                "#ef4444", "#ef4444", 
                "#d4d4d8", "#d4d4d8", 
              ],
              x: [0, 0, 0, 0, -3, 3, 0, 0], 
            }}
            transition={{ duration: DURATION, times: TIMES, repeat: Infinity }}
          >
            <Database className="size-4" />
          </motion.div>
          <span className="text-[9px] font-medium text-zinc-500">DB</span>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col justify-end space-y-2 border-t border-white/10 pt-3 text-[10px]">
        <motion.div
          className="grid grid-cols-[36px_1fr_40px] items-center gap-2 text-zinc-400"
          animate={{ opacity: [1, 1, 0.3, 0.3, 0.3, 0.3, 1, 1] }}
          transition={{ duration: DURATION, times: TIMES, repeat: Infinity }}
        >
          <span>00:00</span>
          <span>System Normal</span>
          <span className="h-[2px] rounded-full bg-emerald-500/50" />
        </motion.div>

        <motion.div
          className="grid grid-cols-[36px_1fr_40px] items-center gap-2 text-orange-400"
          animate={{ opacity: [0.3, 0.3, 1, 1, 0.3, 0.3, 0.3, 0.3] }}
          transition={{ duration: DURATION, times: TIMES, repeat: Infinity }}
        >
          <span>00:12</span>
          <span>Traffic Spike</span>
          <span className="h-[2px] rounded-full bg-orange-500" />
        </motion.div>

        <motion.div
          className="grid grid-cols-[36px_1fr_40px] items-center gap-2 text-red-400"
          animate={{ opacity: [0.3, 0.3, 0.3, 0.3, 1, 1, 0.3, 0.3] }}
          transition={{ duration: DURATION, times: TIMES, repeat: Infinity }}
        >
          <span>00:24</span>
          <span>DB Crash</span>
          <span className="h-[2px] rounded-full bg-red-500" />
        </motion.div>
      </div>
      
      <div className="relative mt-3 h-1 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="absolute inset-y-0 left-0 bg-zinc-500"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: DURATION, ease: "linear", repeat: Infinity }}
        />
      </div>
    </div>
  );
}

function AITutorMock() {
  const DURATION = 8; 

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex shrink-0 items-center gap-2 border-b border-white/10 pb-2 text-xs font-semibold text-white">
        System Coach
        <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />{" "}
          Online
        </span>
      </div>

      <div className="relative flex flex-1 flex-col gap-3 overflow-hidden text-[11px]">
        <motion.div
          className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-blue-500/20 border border-blue-500/30 px-2.5 py-2 text-blue-100"
          animate={{
            opacity: [0, 0, 1, 1, 0, 0],
            y: [10, 10, 0, 0, -5, -5],
          }}
          transition={{
            duration: DURATION,
            times: [0, 0.05, 0.1, 0.9, 0.95, 1],
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          Why does the database crash during traffic spikes?
        </motion.div>

        <motion.div
          className="mr-auto flex max-w-[85%] items-center gap-1 rounded-lg rounded-tl-sm border border-white/10 bg-white/[0.04] px-3 py-2.5 text-zinc-300"
          animate={{
            opacity: [0, 0, 1, 1, 0, 0],
            display: ["none", "none", "flex", "flex", "none", "none"]
          }}
          transition={{
            duration: DURATION,
            times: [0, 0.2, 0.25, 0.45, 0.5, 1],
            repeat: Infinity,
          }}
        >
          <motion.span 
            className="size-1 rounded-full bg-zinc-500" 
            animate={{ y: [0, -2, 0] }} 
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} 
          />
          <motion.span 
            className="size-1 rounded-full bg-zinc-500" 
            animate={{ y: [0, -2, 0] }} 
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} 
          />
          <motion.span 
            className="size-1 rounded-full bg-zinc-500" 
            animate={{ y: [0, -2, 0] }} 
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} 
          />
        </motion.div>

        <motion.div
          className="mr-auto max-w-[90%] rounded-lg rounded-tl-sm border border-white/10 bg-white/[0.06] px-2.5 py-2 text-zinc-300 leading-[1.4]"
          animate={{
            opacity: [0, 0, 1, 1, 0, 0],
            y: [10, 10, 0, 0, -5, -5],
          }}
          transition={{
            duration: DURATION,
            times: [0, 0.45, 0.5, 0.9, 0.95, 1],
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          Your read traffic is overwhelming the primary DB. 
          <br className="mb-1"/>
          <span className="text-emerald-300">Hint:</span> Consider adding a <strong className="text-emerald-400 font-semibold">Redis cache layer</strong> to absorb the read-heavy load.
        </motion.div>
      </div>

      <div className="mt-2 flex shrink-0 items-center rounded-lg border border-white/10 bg-black/40 p-1.5 text-xs text-zinc-500">
        <span className="flex-1 px-2 text-[10px]">Ask a follow-up...</span>
        <div className="grid size-6 place-items-center rounded-md bg-white/[0.05] text-white">
          <Send className="size-3 text-zinc-400" />
        </div>
      </div>
    </div>
  );
}

function DesignPersistenceMock() {
  const DURATION = 6; 

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex shrink-0 items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-white">
          <motion.div
            animate={{ scale: [1, 1, 1.2, 1, 1], color: ["#38bdf8", "#38bdf8", "#818cf8", "#34d399", "#38bdf8"] }}
            transition={{ duration: DURATION, times: [0, 0.4, 0.5, 0.7, 1], repeat: Infinity }}
          >
            <Cloud className="size-4" />
          </motion.div>
          Cloud Sync
        </div>
        
        <div className="relative h-[16px] w-16 overflow-hidden text-right text-[10px] font-medium text-zinc-400">
          <motion.div
            className="absolute right-0 top-0 flex w-full flex-col"
            animate={{ y: [0, 0, -16, -32, -32, 0] }}
            transition={{ duration: DURATION, times: [0, 0.35, 0.45, 0.75, 0.9, 1], repeat: Infinity }}
          >
            <div className="flex h-[16px] items-center justify-end">Synced</div>
            <div className="flex h-[16px] items-center justify-end text-indigo-400">Saving...</div>
            <div className="flex h-[16px] items-center justify-end text-emerald-400">Saved</div>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-2 overflow-hidden">
        <motion.div
          className="relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] px-4 py-6"
          animate={{
            borderColor: ["#ffffff0d", "#ffffff0d", "#818cf840", "#34d39940", "#ffffff0d"],
            backgroundColor: ["#ffffff05", "#ffffff05", "#818cf810", "#34d39910", "#ffffff05"],
          }}
          transition={{ duration: DURATION, times: [0, 0.4, 0.5, 0.7, 1], repeat: Infinity }}
        >
          <motion.div
            className="absolute inset-0 origin-left bg-indigo-500/15"
            animate={{ scaleX: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 0, 0] }}
            transition={{ duration: DURATION, times: [0, 0.4, 0.7, 0.8, 1], repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="relative z-10 flex items-center gap-3 -mt-4">
            <div className="grid size-9 shrink-0 place-items-center rounded-md border border-white/10 bg-black/50 text-zinc-400">
              <motion.div
                animate={{ opacity: [1, 1, 0, 0, 1, 1], rotate: [0, 0, 180, 180, 0, 0] }}
                transition={{ duration: DURATION, times: [0, 0.7, 0.75, 0.9, 0.95, 1], repeat: Infinity }}
                className="absolute"
              >
                <GitBranch className="size-4" />
              </motion.div>
              <motion.div
                animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
                transition={{ duration: DURATION, times: [0, 0.7, 0.75, 0.9, 0.95, 1], repeat: Infinity }}
                className="absolute text-emerald-400"
              >
                <Check className="size-4" />
              </motion.div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="truncate text-[13px] font-medium text-white">Twitter Feed System</div>
              
              <div className="relative mt-1.5 h-[16px] overflow-hidden text-[11px] text-zinc-500">
                <motion.div
                  className="absolute left-0 top-0 flex flex-col"
                  animate={{ y: [0, 0, -16, -16, 0] }}
                  transition={{ duration: DURATION, times: [0, 0.7, 0.75, 0.95, 1], repeat: Infinity }}
                >
                  <div className="flex h-[16px] items-center">Updated 2h ago</div>
                  <div className="flex h-[16px] items-center text-emerald-500/80">Updated just now</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2">
          <div className="grid size-8 shrink-0 place-items-center rounded-md border border-white/5 bg-black/20 text-zinc-600">
            <GitBranch className="size-3.5" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-xs font-medium text-zinc-300">Uber Backend</div>
            <div className="mt-1 text-[10px] text-zinc-600">Updated 1d ago</div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-transparent px-3 py-2">
          <div className="grid size-8 shrink-0 place-items-center rounded-md border border-white/5 bg-black/20 text-zinc-600">
            <GitBranch className="size-3.5" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-xs font-medium text-zinc-300">Notification Service</div>
            <div className="mt-1 text-[10px] text-zinc-600">Updated 3d ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
