"use client";

import {
  BorderMagicButton,
  TailwindConnectButton,
} from "@/components/ui/buttons";
import { Rocket, ArrowRight } from "lucide-react";

export function HeroCtaButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6">
      <BorderMagicButton
        onClick={() => console.log("Start Free Trial Clicked")}
        shape="pill"
        size="lg"
        className="shadow-2xl shadow-zinc-900 w-full sm:w-auto text-sm sm:text-base"
      >
        <Rocket className="h-4 w-4 mr-2" />
        Hosting Plans
      </BorderMagicButton>
      <TailwindConnectButton
        onClick={() => console.log("View Pricing Clicked")}
        shape="pill"
        size="lg"
        className="w-full sm:w-auto text-sm sm:text-base"
      >
        Domain Pricing
        <ArrowRight className="h-4 w-4 ml-2 -mr-2" />
      </TailwindConnectButton>
    </div>
  );
}
