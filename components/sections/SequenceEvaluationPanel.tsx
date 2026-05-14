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

// 1. Helper to animate numbers from 0 -> Target
function AnimatedNumber({ value, delay = 0, duration = 2 }: { value: number; delay?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: duration,
      delay: delay,
      ease: "easeOut",
      onUpdate(val) {
        if (ref.current) {
          ref.current.textContent = String(Math.round(val));
        }
      }
    });
    return () => controls.stop();
  }, [value, delay, duration]);

  return <span ref={ref}>0</span>;
}

// 2. Helper to create the "Typing" / "Texting" effect letter by letter
function TypewriterText({ text, startDelay }: { text: string; startDelay: number }) {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            // Wait for the startDelay, then type each letter 30ms apart
            delay: startDelay + index * 0.03, 
            duration: 0.1 
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

// 3. The Main Animated Looping Component
export function SequenceEvaluationPanel() {
  const [loopKey, setLoopKey] = useState(0);

  // Restart the animation loop every 8.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLoopKey((prev) => prev + 1);
    }, 8500); 
    return () => clearInterval(interval);
  }, []);

  const items: Array<[string, number, string]> = [
    ["Reliability", 18, "text-emerald-400"],
    ["Scalability", 16, "text-emerald-400"],
    ["Performance", 17, "text-amber-400"],
    ["Security", 15, "text-orange-400"],
    ["Best Practices", 16, "text-amber-400"],
  ];

  // --- MASTER TIMELINE ---
  // Phase 1: Text typing starts immediately
  const textDelay = 0.2; 
  // Phase 2: Sub-numbers start counting after text finishes (around 2 seconds in)
  const numbersDelay = 2.0; 
  // Phase 3: Main score animates after sub-numbers finish (around 4 seconds in)
  const mainScoreDelay = 4.0; 

  return (
    <div key={loopKey} className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
      <div className="grid grid-cols-[80px_1fr] gap-3">
        
        {/* LEFT SIDE: Main Score */}
        <div className="grid size-20 place-items-center rounded-full border-[6px] border-emerald-400/20 text-center relative">
          {/* Animated SVG Border that fills up */}
          <motion.svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="transparent"
              stroke="#34d399" // emerald-400
              strokeWidth="10"
              strokeDasharray="290" // Circumference
              initial={{ strokeDashoffset: 290 }}
              animate={{ strokeDashoffset: 290 - (290 * 0.82) }} // 82% filled
              transition={{ delay: mainScoreDelay, duration: 1.5, ease: "easeOut" }}
            />
          </motion.svg>

          {/* Main Number & Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: mainScoreDelay, duration: 0.5, type: "spring" }}
          >
            <div className="text-2xl font-bold text-white">
              <AnimatedNumber value={82} delay={mainScoreDelay} duration={1.5} />
            </div>
            <div className="text-[10px] text-zinc-500">/100</div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Sub-Scores */}
        <div className="space-y-1.5 text-xs text-zinc-300">
          {items.map(([label, value, tone], index) => (
            <div key={label} className="flex justify-between gap-3">
              
              {/* Phase 1: Typing Text */}
              <span className="font-medium">
                <TypewriterText text={label} startDelay={textDelay + index * 0.25} />
              </span>
              
              {/* Phase 2: Counting Numbers */}
              <motion.span 
                className={tone}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // Fade in right as the counting starts
                transition={{ delay: numbersDelay + index * 0.15, duration: 0.3 }}
              >
                <AnimatedNumber value={value} delay={numbersDelay + index * 0.15} duration={1.2} />
                <span className="text-zinc-500">/20</span>
              </motion.span>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
