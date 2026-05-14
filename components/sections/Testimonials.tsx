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

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-14 text-white sm:px-6 lg:px-10 lg:py-18">
      <div className="pointer-events-none absolute inset-0 opacity-[0.55] [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#ff6a00] sm:text-sm">
            Trusted by Engineers
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-[-0.05em] text-white sm:text-4xl lg:text-[42px]">
            Real results from real people
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
            Engineers used Obsidian Flow to practice, improve, and land top offers.
          </p>
        </div>

        <div className="relative mt-9 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#08090b]/72 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.025),0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-4 lg:p-5">
          <div className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:80px_80px]" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 border-r border-white/[0.04] bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_15px,rgba(255,255,255,0.12)_15px,rgba(255,255,255,0.12)_16px)] opacity-50" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 border-l border-white/[0.04] bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_15px,rgba(255,255,255,0.12)_15px,rgba(255,255,255,0.12)_16px)] opacity-50" />

          <div className="relative grid gap-3 lg:grid-cols-12">
          <ResultMetricCard
            className="lg:col-span-3"
            icon={<TrendingUp className="size-6" />}
            value="90%"
            label="Interview confidence improvement"
            footer="Based on user feedback"
            tone="violet"
          />
          <ResultMetricCard
            className="lg:col-span-3"
            icon={<Star className="size-6" />}
            value="4.9/5"
            label="Average rating"
            footer="From 300+ engineers"
            tone="orange"
          />

          <article className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:col-span-6 lg:p-6">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="relative grid gap-4 md:grid-cols-[56px_1fr]">
              <div className="text-5xl font-black leading-none text-violet-300/35">“</div>
              <div>
                <p className="max-w-2xl text-base font-medium leading-7 tracking-[-0.02em] text-zinc-100 sm:text-lg lg:text-[19px]">
                  I used this to prep for my Uber loop and the SPOF detection caught exactly what my interviewer asked about. Ended up designing a multi-region setup in the interview and got an offer!
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                  <div className="flex items-center gap-3">
                    <TestimonialAvatar name="AP" tone="green" />
                    <div>
                      <div className="text-sm font-bold text-white">Arjun Patel</div>
                      <div className="text-xs text-zinc-500">Software Engineer</div>
                      <div className="text-sm font-bold text-zinc-200">Uber</div>
                    </div>
                  </div>
                  <div className="border-white/10 pl-6 text-2xl font-bold tracking-[-0.08em] text-white/80 md:border-l lg:text-3xl">
                    Uber
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[18px] border border-white/[0.08] bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:col-span-5 lg:p-6">
            <div className="text-5xl font-black leading-none text-emerald-300/25">“</div>
            <p className="mt-1 max-w-[500px] text-sm font-medium leading-6 text-zinc-100 sm:text-base lg:leading-7">
              The failure simulator helped me think through edge cases I would&apos;ve missed. My interviewer walked through a DB crash scenario that I had already practiced here. Super close to real life.
            </p>
            <div className="mt-6 flex items-center gap-3 lg:mt-8">
              <TestimonialAvatar name="ML" tone="slate" />
              <div>
                <div className="text-sm font-bold text-white">Mei Lin</div>
                <div className="text-xs text-zinc-500">Software Engineer</div>
                <div className="text-xl font-bold tracking-[-0.08em] text-white/85">amazon</div>
              </div>
            </div>
          </article>

          <ResultMetricCard
            className="lg:col-span-2"
            icon={<UsersIcon className="size-6" />}
            value="2,500+"
            label="Engineers practiced"
            footer="Across 50+ countries"
            tone="green"
          />
          <ResultMetricCard
            className="lg:col-span-2"
            icon={<Clock className="size-6" />}
            value="18min"
            label="Avg. time to insight"
            footer="Per design session"
            tone="blue"
          />

          <article className="rounded-[18px] border border-white/[0.08] bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:col-span-3 lg:p-6">
            <div className="text-5xl font-black leading-none text-pink-300/25">“</div>
            <p className="mt-1 text-sm font-medium leading-6 text-zinc-100 lg:text-base">
              Helped me structure my thoughts clearly. The evaluation breakdown showed me exactly where I was missing cache layers and rate limiting.
            </p>
            <div className="mt-6 flex items-center gap-3 lg:mt-8">
              <TestimonialAvatar name="DT" tone="gray" />
              <div>
                <div className="text-sm font-bold text-white">David Thompson</div>
                <div className="text-xs text-zinc-500">Senior SWE</div>
                <div className="text-xl font-bold tracking-[-0.04em] text-white/85">
                  <span className="text-blue-600">∞</span> Meta
                </div>
              </div>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultMetricCard({
  icon,
  value,
  label,
  footer,
  tone,
  className = "",
}: {
  icon: ReactNode;
  value: string;
  label: string;
  footer: string;
  tone: "violet" | "orange" | "green" | "blue";
  className?: string;
}) {
  const toneClasses = {
    violet: "text-violet-300 border-violet-400/20 bg-violet-500/[0.045]",
    orange: "text-[#ff6a00] border-orange-400/20 bg-orange-500/[0.045]",
    green: "text-emerald-300 border-emerald-400/20 bg-emerald-500/[0.045]",
    blue: "text-sky-300 border-sky-400/20 bg-sky-500/[0.045]",
  }[tone];

  return (
    <article className={`rounded-[18px] border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:p-6 ${toneClasses} ${className}`}>
      <div className="grid size-10 place-items-center rounded-xl bg-current/10 lg:size-11">{icon}</div>
      <div className="mt-5 text-3xl font-extrabold tracking-[-0.045em] lg:text-[34px]">{value}</div>
      <div className="mt-1.5 max-w-[200px] text-sm leading-5 text-zinc-300 lg:text-base lg:leading-6">{label}</div>
      <div className="mt-7 text-xs text-zinc-500 lg:mt-9 lg:text-sm">{footer}</div>
    </article>
  );
}

function TestimonialAvatar({ name, tone }: { name: string; tone: "green" | "slate" | "gray" }) {
  const toneClass =
    tone === "green"
      ? "bg-gradient-to-br from-emerald-100 to-slate-800"
      : tone === "slate"
        ? "bg-gradient-to-br from-slate-100 to-slate-900"
        : "bg-gradient-to-br from-zinc-100 to-zinc-800";

  return (
    <div className={`grid size-12 shrink-0 place-items-center rounded-full text-xs font-bold text-white shadow-inner lg:size-13 ${toneClass}`}>
      {name}
    </div>
  );
}
