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

const navItems = ["Features", "How It Works", "Problems", "Pricing", "About"];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-[100] px-3 sm:top-6 sm:px-4">
      <div className="mx-auto flex h-[58px] max-w-[1120px] items-center justify-between rounded-[16px] border border-white/[0.1] bg-[#111111]/85 px-3 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_16px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:h-[64px] sm:px-4 lg:h-[68px]">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <div className="grid size-8 shrink-0 place-items-center rounded-[10px] border border-white/20 bg-white/[0.04] transition-colors hover:bg-white/[0.08] sm:size-9">
            <Box className="size-5 text-white" />
          </div>
          <div>
            <div className="text-[13px] font-bold tracking-[-0.01em] text-white sm:text-sm">SysDesign Lab</div>
            <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[10px]">
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
            className="h-9 rounded-[10px] bg-white px-3 text-xs font-semibold text-black shadow-[0_0_28px_rgba(255,255,255,0.18)] transition-all hover:scale-105 hover:bg-zinc-200 sm:h-10 sm:px-4 sm:text-sm lg:h-11 lg:px-5"
          >
            <Link href="/problems">
              Start for Free <ArrowRight className="ml-1.5 size-3.5 sm:size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}
