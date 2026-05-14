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

export function TrustBar() {
  // Reusable vertical divider to exactly match the image
  const Divider = () => <div className="hidden h-6 w-px bg-white/10 lg:block" />;
  const marqueeItems = ["Google", "Amazon", "Microsoft", "Netflix", "Airbnb", "Stripe", "LinkedIn", "Uber", "Datadog"];

  return (
    <section className="relative z-10 bg-[#050505]">
      <div className="relative overflow-hidden border-y border-white/[0.06] py-3 sm:hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#050505] to-transparent" />
        <div className="mb-2 text-center text-[8px] font-semibold uppercase tracking-[0.24em] text-zinc-600">
          Trusted by engineers at
        </div>
        <div className="flex w-max animate-trust-marquee items-center gap-8 whitespace-nowrap text-[13px] font-semibold text-white/55 grayscale">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="tracking-[-0.02em]">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="hidden px-6 pb-20 pt-12 sm:block lg:px-10">
      
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
      </div>
    </section>
  );
}
