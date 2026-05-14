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

const premiumEase = [0.06, 1, 0.3, 1] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#020202] px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr]">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg border border-white/20 bg-white/5">
              <Box className="size-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-white">SysDesign Lab</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                Simulator
              </div>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-500">
            The modern system design simulator to practice, visualize, and master
            scalable architectures.
          </p>
        </div>
        <FooterColumn title="Product" items={["Features", "Simulator", "Practice", "Roadmap", "Pricing"]} />
        <FooterColumn title="Resources" items={["Blog", "System Design 101", "Tutorials", "Cheatsheets", "FAQ"]} />
        <FooterColumn title="Company" items={["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service"]} />
        <div>
          <h3 className="mb-5 text-sm font-bold text-white">Stay Updated</h3>
          <p className="mb-6 text-sm leading-relaxed text-slate-500">
            Get the latest updates and resources delivered to your inbox.
          </p>
          <form className="flex overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] focus-within:border-white/30 focus-within:ring-1 focus-within:ring-white/30 transition-all">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <div className="grid place-items-center pl-4 text-slate-500">
              <Mail className="size-4" />
            </div>
            <input
              id="email"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-slate-600"
              placeholder="hello@example.com"
            />
            <button className="grid w-14 place-items-center bg-white text-black transition-colors hover:bg-slate-200" type="button">
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl items-center justify-between border-t border-white/[0.05] pt-8 text-sm text-slate-600">
        <p>© 2026 SysDesign Lab. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: premiumEase }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-violet-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-slate-400">{text}</p>}
    </motion.div>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-bold text-white">{title}</h3>
      <ul className="space-y-4 text-sm text-slate-500">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="transition-colors hover:text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
