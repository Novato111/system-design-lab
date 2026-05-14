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

const pricingPlans = [
  {
    name: "Free",
    description: "Start practicing at no cost.",
    price: "$0",
    suffix: "/month",
    icon: Leaf,
    accent: "green",
    cta: "Get started for free",
    footnote: "",
    features: ["Access to 5 problems", "Basic evaluation", "Community support", "No credit card required"],
  },
  {
    name: "Pro",
    description: "Everything you need to ace system design interviews.",
    price: "$12",
    suffix: "/month",
    icon: Zap,
    accent: "orange",
    cta: "Start Pro Trial",
    footnote: "7-day free trial. Cancel anytime.",
    features: [
      "All 25+ problems",
      "Full evaluation engine",
      "Failure simulator",
      "AI tutor with real-time hints",
      "Design history",
      "Shareable design links",
    ],
  },
  {
    name: "Team",
    description: "For teams that want to practice and improve together.",
    price: "$29",
    suffix: "/seat/month",
    icon: UsersIcon,
    accent: "violet",
    cta: "Start Team Plan",
    footnote: "Minimum 2 seats.",
    features: [
      "Everything in Pro",
      "Team leaderboards",
      "Shared problem sets",
      "Company-specific mock problems",
      "Team analytics & insights",
    ],
  },
];

const pricingFaqs = [
  {
    question: "Is the free tier really free?",
    answer: "Yes! You get full access to 5 problems and basic evaluation — forever.",
    tone: "green",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. No contracts. Cancel anytime and you won’t be charged again.",
    tone: "orange",
  },
  {
    question: "Does the AI tutor use my designs to train models?",
    answer: "No. Your designs are private and never used to train our models.",
    tone: "violet",
  },
];

export function PricingSection() {
  const pricingCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollPricing = (direction: "left" | "right") => {
    const carousel = pricingCarouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: direction === "left" ? -carousel.clientWidth * 0.86 : carousel.clientWidth * 0.86,
      behavior: "smooth",
    });
  };

  return (
    <section id="pricing" className="relative isolate overflow-hidden bg-[#050505] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_52%_48%,rgba(249,115,22,0.10),transparent_22%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.2] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative z-[2] mx-auto max-w-[1180px]">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#ff5c00] sm:text-sm">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.055em] text-white sm:text-4xl lg:mt-5 lg:text-6xl">
            Simple pricing. Serious value.
          </h2>
          <p className="mt-4 text-sm text-zinc-400 sm:text-base lg:mt-5 lg:text-xl">Choose the plan that fits your journey.</p>
        </div>

        <div className="mt-8 flex items-center justify-between lg:hidden">
          <p className="text-xs font-medium text-zinc-500">Swipe plans or use arrows</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous pricing plan"
              onClick={() => scrollPricing("left")}
              className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:bg-white/[0.08]"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next pricing plan"
              onClick={() => scrollPricing("right")}
              className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:bg-white/[0.08]"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Updated carousel gaps specifically for mobile viewing */}
        <div
          ref={pricingCarouselRef}
          className="-mx-4 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:mt-16 lg:grid lg:grid-cols-3 lg:items-center lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0 lg:[perspective:1400px]"
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <div className="mx-auto mt-6 overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#0b0d10]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_70px_rgba(0,0,0,0.35)] lg:mt-10 lg:rounded-[14px]">
          {pricingFaqs.map((faq) => (
            <div
              key={faq.question}
              className="grid gap-3 border-b border-white/[0.08] px-4 py-4 last:border-b-0 md:grid-cols-[420px_1fr_auto] md:items-center lg:gap-4 lg:px-6 lg:py-5"
            >
              <div className="flex items-center gap-3 lg:gap-5">
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-lg border text-base font-bold lg:size-10 lg:rounded-xl lg:text-xl ${
                    faq.tone === "green"
                      ? "border-green-400/30 bg-green-500/10 text-green-400"
                      : faq.tone === "orange"
                        ? "border-orange-400/30 bg-orange-500/10 text-orange-400"
                        : "border-violet-400/30 bg-violet-500/10 text-violet-400"
                  }`}
                >
                  ?
                </span>
                <h3 className="text-base font-semibold tracking-[-0.02em] text-white lg:text-xl">{faq.question}</h3>
              </div>
              <p className="text-sm leading-6 text-zinc-400 lg:text-base">{faq.answer}</p>
              <ChevronDown className="hidden size-5 text-white md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof pricingPlans)[number];
  index: number;
}) {
  const isPro = plan.name === "Pro";
  const isTeam = plan.name === "Team";
  const tone =
    plan.accent === "green"
      ? "text-green-400 border-green-500/30 bg-green-500/10"
      : plan.accent === "violet"
        ? "text-violet-400 border-violet-500/30 bg-violet-500/10"
        : "text-[#ff5c00] border-[#ff5c00]/40 bg-[#ff5c00]/12";
  const checkTone =
    plan.accent === "green" ? "text-green-400" : plan.accent === "violet" ? "text-violet-400" : "text-[#ff5c00]";

  // Handle flex ordering for mobile screens:
  // Pro goes first (order-1), Free second (order-2), Team third (order-3).
  // Desktop restores standard flow (lg:order-1, lg:order-2, lg:order-3).
  const orderClass = isPro ? "order-1 lg:order-2" : index === 0 ? "order-2 lg:order-1" : "order-3";

  return (
    <article
      className={`group relative isolate flex min-h-[380px] w-[75vw] max-w-[280px] shrink-0 snap-center overflow-hidden rounded-[16px] border p-4 transition-transform duration-500 hover:-translate-y-2 sm:w-[300px] lg:min-h-[560px] lg:w-auto lg:max-w-none lg:rounded-[18px] lg:p-8 ${orderClass} ${
        isPro
          ? "border-[#ff5c00] bg-[#0b0d10]/92 shadow-[0_0_0_1px_rgba(255,92,0,0.25),0_0_70px_rgba(255,92,0,0.22)] lg:scale-105"
          : "border-white/[0.1] bg-[#0b0d10]/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_80px_rgba(0,0,0,0.42)]"
      } ${index === 0 ? "lg:-rotate-2" : index === 2 ? "lg:rotate-3" : ""} ${isTeam ? "lg:translate-y-2" : ""}`}
    >
      <div className={`pointer-events-none absolute inset-0 z-0 ${isTeam ? "opacity-[0.11]" : "opacity-[0.22]"} [background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:18px_18px]`} />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_30%)]" />
      {isTeam && (
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.14] [background-image:linear-gradient(135deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:22px_22px]" />
      )}
      {isPro && (
        <div className="absolute left-1/2 top-0 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-b-xl border-x border-b border-[#ff5c00]/40 bg-[#2a1508] px-4 py-2 text-[10px] font-bold text-[#ff7a1a] lg:gap-2 lg:px-7 lg:py-3 lg:text-base">
          <Star className="size-3 lg:size-4" />
          Most Popular
        </div>
      )}

      <div className="relative z-10 flex h-full w-full flex-col pt-4 lg:pt-6">
        <div className={`mb-3 grid size-10 place-items-center rounded-xl border lg:mb-6 lg:size-14 ${tone}`}>
          <plan.icon className="size-4 lg:size-7" />
        </div>

        <h3 className="text-xl font-bold tracking-[-0.04em] text-white lg:text-3xl">{plan.name}</h3>
        <p className="mt-2 min-h-[36px] max-w-[300px] text-xs leading-5 text-zinc-300 lg:mt-3 lg:min-h-[52px] lg:text-base lg:leading-7">{plan.description}</p>

        <div className="my-4 h-px bg-white/10 lg:my-8" />

        <div className="flex items-end gap-2">
          <span className="text-2xl font-extrabold tracking-[-0.04em] text-white lg:text-4xl">{plan.price}</span>
          <span className="pb-0.5 text-xs text-zinc-400 lg:pb-1 lg:text-base">{plan.suffix}</span>
        </div>
        {isTeam && <p className="mt-1.5 text-[10px] text-zinc-400 lg:mt-3 lg:text-sm">or $299/month flat for up to 10 seats</p>}

        <ul className="mt-4 space-y-2 text-xs text-zinc-200 lg:mt-8 lg:space-y-3 lg:text-base">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 lg:gap-3">
              <Check className={`size-3.5 shrink-0 rounded-full border p-0.5 lg:size-5 ${checkTone}`} />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={`mt-auto h-9 rounded-lg text-xs font-bold lg:h-12 lg:text-base ${
            isPro
              ? "bg-gradient-to-r from-[#f45b00] to-[#ff7a00] text-white shadow-[0_15px_40px_rgba(255,92,0,0.28)] hover:from-[#ff6a00] hover:to-[#ff8a1f]"
              : isTeam
                ? "border border-violet-500/80 bg-transparent text-violet-300 hover:bg-violet-500/10"
                : "border border-green-500/35 bg-transparent text-white hover:bg-green-500/10"
          }`}
        >
          <Link href="/problems">{plan.cta}</Link>
        </Button>
        {plan.footnote && <p className="mt-2.5 text-center text-[10px] text-zinc-500 lg:mt-4 lg:text-sm">{plan.footnote}</p>}
      </div>
    </article>
  );
}
