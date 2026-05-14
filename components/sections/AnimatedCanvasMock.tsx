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

export function AnimatedCanvasMock() {
  const [step, setStep] = useState(0);

  // Advanced sequence timer for the looping animation
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 17); // Cycles 0 through 16
    }, 600); // 600ms per action
    return () => clearInterval(timer);
  }, []);

  // Map steps to specific UI states
  const activeSidebarIndex = {
    1: 0, // Click Load Balancer
    3: 1, // Click API Gateway
    5: 2, // Click Web Server
    7: 3, // Click Database
    9: 4, // Click Cache
  }[step] ?? -1;

  const isClicking = [1, 3, 5, 7, 9].includes(step);

  // Y-coordinates to align the cursor perfectly with sidebar items
  const getCursorY = (s: number) => {
    if (s === 0 || s === 1) return 60;
    if (s === 2 || s === 3) return 86;
    if (s === 4 || s === 5) return 112;
    if (s === 6 || s === 7) return 138;
    if (s === 8 || s === 9) return 164;
    return 280; // Moves offscreen
  };

  const cursorX = 35;
  const cursorY = getCursorY(step);
  const cursorOpacity = step >= 0 && step <= 10 ? 1 : 0;

  // Node visibility logic (spawns right after the "click" step)
  const showLB = step >= 2 && step < 16;
  const showAPI = step >= 4 && step < 16;
  const showWeb = step >= 6 && step < 16;
  const showDB = step >= 8 && step < 16;
  const showCache = step >= 10 && step < 16;
  const showLines = step >= 11 && step < 16;

  const sidebarItems = ["Load Balancer", "API Gateway", "Web Server", "Database", "Cache"];

  return (
    <div className="relative min-h-[240px] overflow-hidden rounded-xl sm:min-h-[280px]">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:14px_14px]" />
      
      <div className="absolute right-3 top-3 grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-white">
        <Network className="size-4" />
      </div>

      {/* Sidebar Navigation */}
      <div className="absolute left-2  top-2 w-24 rounded-lg border border-white/10 bg-[#121317] p-3  shadow-2xl z-20">
        {sidebarItems.map((item, idx) => (
          <motion.div
            key={item}
            animate={{
              backgroundColor: activeSidebarIndex === idx ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0)",
              scale: activeSidebarIndex === idx ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="-ml-1.5 mb-3 flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[9px] text-zinc-300 last:mb-0"
          >
            <Box className="size-2.5 shrink-0 text-zinc-400" />
            <span className="truncate">{item}</span>
          </motion.div>
        ))}
        <div className="mt-2 text-sm leading-none text-white">...</div>
      </div>

      {/* Animated Mouse Cursor */}
      <motion.div
        initial={false}
        animate={{
          x: cursorX,
          y: cursorY,
          opacity: cursorOpacity,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
        className="absolute z-50 pointer-events-none"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
          <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.42c.45 0 .67-.54.35-.85L6.35 3.35a.5.5 0 0 0-.85.35Z" fill="white" stroke="black" strokeWidth="1.5"/>
        </svg>
      </motion.div>

      {/* Canvas Nodes */}
      <AnimatedFeatureNode visible={showLB} className="left-[50%] top-[16%] border-orange-500/50 text-orange-300" label="Load Balancer" />
      <AnimatedFeatureNode visible={showAPI} className="left-[50%] top-[38%] border-sky-500/50 text-sky-300" label="API Gateway" />
      <AnimatedFeatureNode visible={showWeb} className="left-[32%] top-[60%] border-sky-500/50 text-sky-300" label="Web Server" />
      <AnimatedFeatureNode visible={showWeb} className="left-[68%] top-[60%] border-sky-500/50 text-sky-300" label="Web Server" />
      <AnimatedFeatureNode visible={showCache} className="left-[34%] top-[80%] border-emerald-500/50 text-emerald-300" label="Cache" />
      <AnimatedFeatureNode visible={showDB} className="left-[70%] top-[80%] border-violet-500/50 text-violet-300" label="Database" />

      {/* Connecting Lines */}
      <motion.div initial={false} animate={{ opacity: showLines ? 1 : 0 }} className="absolute left-[55%] top-[31%] h-8 w-px bg-white/35" />
      <motion.div initial={false} animate={{ opacity: showLines ? 1 : 0 }} className="absolute left-[55%] top-[53%] h-px w-[19%] bg-white/25" />
      <motion.div initial={false} animate={{ opacity: showLines ? 1 : 0 }} className="absolute left-[36%] top-[53%] h-px w-[19%] bg-white/25" />
    </div>
  );
}

// Wrapper to handle the spring pop-in animation for each individual node
function AnimatedFeatureNode({ className, label, visible }: { className: string; label: string; visible: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={{ 
        opacity: visible ? 1 : 0, 
        scale: visible ? 1 : 0.8,
        filter: visible ? "blur(0px)" : "blur(4px)"
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`absolute grid h-8 w-[82px] -translate-x-1/2 place-items-center rounded-md border bg-black/35 text-[8px] font-medium shadow-lg sm:h-9 sm:w-[92px] sm:text-[9px] ${className}`}
    >
      {label}
    </motion.div>
  );
}
