"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FinalCta } from "@/components/sections/FinalCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProblemLibrary } from "@/components/sections/ProblemLibrary";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen text-white">
      <SiteHeader />
      <HeroSection />
      <TrustBar />
        <FeatureGrid />
      <ProblemLibrary />
    
      <HowItWorks />
      <PricingSection />
      <Testimonials />
   
      <SiteFooter />
    </main>
  );
}
