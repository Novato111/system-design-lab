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
    <section className="relative overflow-hidden bg-white px-4 py-16 text-[#070b18] sm:px-6 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.045),transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#ff6a00] sm:text-sm">
            Trusted by Engineers
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.055em] text-black sm:text-4xl lg:text-[48px]">
            Real results from real people
          </h2>
          <p className="mt-4 text-base text-slate-500 sm:text-lg">
            Engineers used Obsidian Flow to practice, improve, and land top offers.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
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

          <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:col-span-6 lg:p-8">
            <div className="grid gap-5 md:grid-cols-[72px_1fr]">
              <div className="text-6xl font-black leading-none text-[#ddd0ff]">“</div>
              <div>
                <p className="max-w-2xl text-lg font-medium leading-[1.35] tracking-[-0.025em] text-black sm:text-xl lg:text-2xl lg:leading-[1.3]">
                  I used this to prep for my Uber loop and the SPOF detection caught exactly what my interviewer asked about. Ended up designing a multi-region setup in the interview and got an offer!
                </p>
                <div className="mt-7 grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
                  <div className="flex items-center gap-4">
                    <TestimonialAvatar name="AP" tone="green" />
                    <div>
                      <div className="text-base font-bold text-black">Arjun Patel</div>
                      <div className="text-sm text-slate-500">Software Engineer</div>
                      <div className="text-base font-bold text-black">Uber</div>
                    </div>
                  </div>
                  <div className="border-slate-200 pl-8 text-3xl font-bold tracking-[-0.08em] text-black md:border-l lg:text-4xl">
                    Uber
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] lg:col-span-5 lg:p-8">
            <div className="text-6xl font-black leading-none text-emerald-100">“</div>
            <p className="mt-1 max-w-[520px] text-base font-medium leading-7 text-black sm:text-lg lg:text-xl lg:leading-8">
              The failure simulator helped me think through edge cases I would&apos;ve missed. My interviewer walked through a DB crash scenario that I had already practiced here. Super close to real life.
            </p>
            <div className="mt-8 flex items-center gap-4 lg:mt-10">
              <TestimonialAvatar name="ML" tone="slate" />
              <div>
                <div className="text-base font-bold text-black">Mei Lin</div>
                <div className="text-sm text-slate-500">Software Engineer</div>
                <div className="text-2xl font-bold tracking-[-0.08em] text-black">amazon</div>
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

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] lg:col-span-3 lg:p-8">
            <div className="text-6xl font-black leading-none text-pink-100">“</div>
            <p className="mt-1 text-base font-medium leading-7 text-black lg:text-lg">
              Helped me structure my thoughts clearly. The evaluation breakdown showed me exactly where I was missing cache layers and rate limiting.
            </p>
            <div className="mt-8 flex items-center gap-4 lg:mt-10">
              <TestimonialAvatar name="DT" tone="gray" />
              <div>
                <div className="text-base font-bold text-black">David Thompson</div>
                <div className="text-sm text-slate-500">Senior SWE</div>
                <div className="text-2xl font-bold tracking-[-0.04em] text-black">
                  <span className="text-blue-600">∞</span> Meta
                </div>
              </div>
            </div>
          </article>
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
    violet: "from-violet-50 to-white text-[#5b21d6] border-violet-100",
    orange: "from-orange-50 to-white text-[#ff6a00] border-orange-100",
    green: "from-emerald-50 to-white text-emerald-600 border-emerald-100",
    blue: "from-sky-50 to-white text-sky-500 border-sky-100",
  }[tone];

  return (
    <article className={`rounded-2xl border bg-gradient-to-br p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] lg:p-7 ${toneClasses} ${className}`}>
      <div className="grid size-12 place-items-center rounded-xl bg-current/10 lg:size-14">{icon}</div>
      <div className="mt-6 text-3xl font-extrabold tracking-[-0.045em] lg:mt-8 lg:text-4xl">{value}</div>
      <div className="mt-2 max-w-[220px] text-base leading-6 text-slate-600 lg:text-lg lg:leading-7">{label}</div>
      <div className="mt-8 text-sm text-slate-500 lg:mt-12 lg:text-base">{footer}</div>
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
    <div className={`grid size-14 shrink-0 place-items-center rounded-full text-sm font-bold text-white shadow-inner lg:size-16 ${toneClass}`}>
      {name}
    </div>
  );
}
