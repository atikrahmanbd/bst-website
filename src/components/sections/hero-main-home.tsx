"use client";

import { BackgroundDot } from "@/components/ui/background-dot";
import { HeroMainContent } from "@/components/sections/hero-main-content";
import { HeroDomainSearch } from "@/components/sections/hero-domain-search";
import { HeroDomainPricing } from "@/components/sections/hero-domain-pricing";
import { HeroCtaButtons } from "@/components/sections/hero-cta-buttons";

export function HeroMainHome() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-16 sm:py-24 md:py-32">
      <BackgroundDot backgroundColor="bg-background" fadeDirection="bottom" />

      <div className="relative z-20 flex items-center justify-center">
        <div className="mx-auto max-w-5xl text-center w-full">
          <HeroMainContent />
          <HeroDomainSearch />
          <HeroDomainPricing />
          <HeroCtaButtons />
        </div>
      </div>
    </div>
  );
}
