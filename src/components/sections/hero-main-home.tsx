"use client";

import { BackgroundDot } from "@/components/ui/background-dot";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  InfiniteScrollDomains,
  DomainCard,
} from "@/components/ui/infinite-scroll-domains";
import {
  BorderMagicButton,
  ShimmerDarkButton,
  TailwindConnectButton,
} from "@/components/ui/buttons";
import GradientText from "@/components/ui/gradient-text";
import { CyclingTypewriterSmooth } from "@/components/ui/cycling-typewriter-smooth";
import { motion } from "motion/react";
import { Rocket, ArrowRight } from "lucide-react";

export function HeroMainHome() {
  const placeholders = [
    "Search Domain Names...",
    "Check Availability...",
    "400+ Domain Extensions...",
    "Instant Purchase & Activation...",
    "Domain ID Protection...",
    "Start Building Your Web Presence...",
  ];

  const heroSentences = [
    [{ text: "হাই-পারফরম্যান্স" }, { text: "ওয়েব" }, { text: "হোস্টিং" }],
    [
      { text: "মাত্র" },
      { text: "৳১৫০", className: "text-primary dark:text-primary" },
      { text: "টাকায়" },
      { text: "ওয়েব হোস্টিং" },
    ],
    [{ text: "সহজেই" }, { text: "ডোমেইন" }, { text: "রেজিস্ট্রেশন" }],
    [
      { text: "৪০০+", className: "text-primary dark:text-primary" },
      { text: "ডোমেইন" },
      { text: "এক্সটেনশন" },
    ],
    [
      { text: "অটোমেটেড", className: "text-primary dark:text-primary" },
      { text: "বিলিং" },
      { text: "ও" },
      { text: "এক্টিভেশন" },
    ],
    [
      { text: "বিকাশ", className: "text-pink-500 dark:text-pink-500" },
      { text: "সহ সব" },
      { text: "মোবাইল", className: "text-primary dark:text-primary" },
      { text: "ব্যাংকিং", className: "text-primary dark:text-primary" },
      { text: "সাপোর্ট" },
    ],
    [
      { text: "ওয়েব ডিজাইন", className: "text-blue-500 dark:text-blue-500" },
      {
        text: " - ডেভেলপমেন্ট",
        className: "text-primary dark:text-primary",
      },
      { text: "ও" },
      { text: "মার্কেটিং", className: "text-purple-500 dark:text-orange-500" },
    ],
    [{ text: "এসইও" }, { text: " - ডিজিটাল মার্কেটিং" }, { text: "সার্ভিস" }],
    [
      { text: "Meets" },
      { text: "Complete" },
      { text: "Digital" },
      { text: "Solutions" },
    ],
  ];

  const domains: DomainCard[] = [
    {
      extension: ".com",
      price: "৳1899.99",
      icon: "/domains/bark-hosting-dot-com-domain.svg",
    },
    {
      extension: ".org",
      price: "৳900",
      icon: "/domains/bark-hosting-dot-org-domain.svg",
    },
    {
      extension: ".net",
      price: "৳1000",
      icon: "/domains/bark-hosting-dot-net-domain.svg",
    },
    {
      extension: ".xyz",
      price: "৳200",
      icon: "/domains/bark-hosting-dot-xyz-domain.svg",
    },
    {
      extension: ".fun",
      price: "৳350",
      icon: "/domains/bark-hosting-dot-fun-domain.svg",
    },
    {
      extension: ".store",
      price: "৳750",
      icon: "/domains/bark-hosting-dot-store-domain.svg",
    },
    {
      extension: ".shop",
      price: "৳600",
      icon: "/domains/bark-hosting-dot-shop-domain.svg",
    },
    {
      extension: ".cloud",
      price: "৳450",
      icon: "/domains/bark-hosting-dot-cloud-domain.svg",
    },
    {
      extension: ".online",
      price: "৳550",
      icon: "/domains/bark-hosting-dot-online-domain.svg",
    },
    {
      extension: ".design",
      price: "৳800",
      icon: "/domains/bark-hosting-dot-design-domain.svg",
    },
    {
      extension: ".biz",
      price: "৳900",
      icon: "/domains/bark-hosting-dot-biz-domain.svg",
    },
    {
      extension: ".tech",
      price: "৳700",
      icon: "/domains/bark-hosting-dot-tech-domain.svg",
    },
  ];

  const handleChange = () => {
    // Handle Input Change
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle Form Submission
  };

  return (
    <div className="relative w-full overflow-hidden bg-background py-32">
      <BackgroundDot backgroundColor="bg-background" fadeDirection="bottom" />

      <div className="relative z-20 flex items-center justify-center px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* Top Badge */}
          <div className="mb-8 inline-block">
            <ShimmerDarkButton
              shape="pill"
              size="md"
              className="cursor-default pointer-events-none py-2"
            >
              <EncryptedText
                text="Business. Solution. Technology."
                revealedClassName="text-primary"
                encryptedClassName="text-muted-foreground/50"
              />
            </ShimmerDarkButton>
          </div>

          {/* Main Heading */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative z-10 mx-auto max-w-7xl text-center font-bold leading-tight">
              <h2 className="mb-4 text-xl md:text-3xl lg:text-5xl font-bold">
                <GradientText>Fast & Secure Web Hosting</GradientText>
              </h2>
              <CyclingTypewriterSmooth
                sentences={heroSentences}
                className="flex justify-center items-center my-0 text-xl md:text-3xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300 leading-relaxed"
                cursorClassName="bg-primary"
                typingDuration={800}
                pauseDuration={2500}
              />
            </div>
          </motion.div>

          {/* Subheading */}
          <p className="mb-12 max-w-4xl mx-auto text-lg text-muted-foreground md:text-xl leading-relaxed">
            Experience High-Performance Hosting Supported By A Full Suite Of
            Services — From Domain Registration To Design, Apps, And Marketing.
          </p>

          {/* Search Input */}
          <div className="mb-8">
            <div className="relative w-full max-w-xl mx-auto rounded-full">
              {/* <div className="relative w-full max-w-xl mx-auto rounded-full shadow-[0_15px_30px_-5px] shadow-primary/20 dark:shadow-primary/30"> */}
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>
          </div>

          {/* Domain Cards Infinite Scroll */}
          <div className="mb-12">
            <InfiniteScrollDomains
              items={domains}
              direction="left"
              speed="medium"
              pauseOnHover={true}
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <BorderMagicButton
              onClick={() => console.log("Start Free Trial Clicked")}
              shape="pill"
              size="lg"
              className="shadow-2xl shadow-zinc-900"
            >
              <Rocket className="h-4 w-4 mr-2" />
              Hosting Plans
            </BorderMagicButton>
            <TailwindConnectButton
              onClick={() => console.log("View Pricing Clicked")}
              shape="pill"
              size="lg"
            >
              Domain Pricing
              <ArrowRight className="h-4 w-4 ml-2 -mr-2" />
            </TailwindConnectButton>
          </div>
        </div>
      </div>
    </div>
  );
}
