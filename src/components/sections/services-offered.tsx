"use client";
import Image from "next/image";
import Link from "next/link";
import {
	Layers,
	Code2,
	ArrowRight,
	Clock,
	Zap,
	Headphones,
} from "lucide-react";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "motion/react";
import { IconBrandWordpress } from "@tabler/icons-react";
import GradientText from "../ui/gradient-text";

export function ServicesOffered() {
  return (
    <section className="pt-10 md:pt-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl px-4 md:px-8 mx-auto">
        {/* Title And Subheading */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
            <GradientText>Services Offered</GradientText>
          </h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl leading-relaxed">
            Comprehensive Hosting Solutions And Domain Services Tailored To
            Power Your Digital Presence
          </p>
        </div>

        {/* Grid With 2 Columns On Larger Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border">
          {/* Left Column - Web Hosting Services */}
          <div className="flex flex-col justify-between">
            <div className="p-4 md:p-8">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors"
              >
                Web Hosting Services
                <ArrowRight className="size-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <p className="text-muted-foreground font-normal mt-2 text-balance">
                High-Performance Hosting With Fast Speeds, 99.9% Uptime, and
                Reliable Customer Support Tailored For Businesses of All Sizes
              </p>
            </div>
            <div className="relative h-90 sm:h-60 flex flex-col md:h-90 pt-2 overflow-hidden">
              {/* Placeholder For Visual Content */}
              <motion.div
                className="max-w-[20rem] lg:max-w-sm mx-auto w-full absolute inset-x-0 pb-0"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <GlowingEffect
                  blur={0}
                  borderWidth={2}
                  spread={60}
                  glow={true}
                  disabled={false}
                  proximity={48}
                  inactiveZone={0.01}
                  className="rounded-t-3xl"
                />
                <GlassContainer
                  className="rounded-t-3xl rounded-b-none border-b-0"
                  innerClassName="rounded-t-2xl gap-3 flex flex-col border-b-0"
                  outerBorderRadius="rounded-t-3xl rounded-b-none"
                  innerBorderRadius="rounded-t-2xl rounded-b-none"
                  outerPadding="px-4 pt-4 pb-0"
                  innerPadding="pt-3 px-3 pb-0"
                >
                  {/* Service Cards */}
                  <motion.div
                    className="p-4 gap-4 border bg-card/80 border-border ring-1 rounded-lg ring-border/50 flex items-start"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <div className="size-6 shrink-0 rounded-full bg-primary flex mt-1 items-center justify-center">
                      <Layers className="size-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="md:text-md font-bold text-foreground">
                        Shared Hosting
                      </p>
                      <p className="text-[10px] md:text-sm text-muted-foreground text-balance">
                        Ideal For Small Websites and Blogs With Reliable
                        Performance and Affordable Pricing
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-4 gap-4 border bg-card/80 border-border ring-1 rounded-lg ring-border/50 flex items-start"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <div className="size-6 shrink-0 rounded-full bg-primary flex mt-1 items-center justify-center">
                      <IconBrandWordpress className="size-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="md:text-md font-bold text-foreground">
                        WordPress Hosting
                      </p>
                      <p className="text-[10px] md:text-sm text-muted-foreground text-balance">
                        Optimized WordPress Hosting With Enhanced Security, Auto
                        Updates, and Lightning-Fast Performance
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-4 gap-4 border bg-card/80 border-border ring-1 rounded-lg ring-border/50 flex items-start"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <div className="size-6 shrink-0 rounded-full bg-primary flex mt-1 items-center justify-center">
                      <Code2 className="size-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="md:text-md font-bold text-foreground">
                        Frontend Tech Stack Hosting
                      </p>
                      <p className="text-[10px] md:text-sm text-muted-foreground text-balance">
                        Hosting Optimized For Modern Frameworks Like Vue,
                        Next.js, React, Svelte, And More — Perfect For
                        Developers
                      </p>
                    </div>
                  </motion.div>
                </GlassContainer>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Domains */}
          <div>
            <div className="relative h-[32rem] sm:h-[28rem] md:h-[32rem] overflow-hidden">
              {/* Text Content - Above Orbital System */}
              <div className="absolute top-0 left-0 right-0 p-4 md:p-8 z-[30]">
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  Domains - 400+ Extensions
                  <ArrowRight className="size-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
                <p className="text-muted-foreground font-normal mt-2">
                  Choose From Over 400 Domain Extensions To Secure Your Online
                  Identity With Instant Registration and Activation
                </p>
              </div>

              {/* Center icon with orbiting domain icons */}
              <div className="flex-1 gap-2 flex items-center justify-center w-full h-full absolute inset-x-0 p-2 mt-20">
                {/* Fade Overlay - Top And Bottom (Only For Orbital System) */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-[25] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[25] pointer-events-none"></div>
                {/* Background Concentric Circles - Match Orbital Paths With Symmetrical Gaps */}
                {/* Orbit 1 Path - size-56 */}
                <div className="absolute inset-0 shrink-0 border rounded-full m-auto shadow border-border size-56 bg-muted/80 z-[5]"></div>
                {/* Orbit 2 Path - size-80 */}
                <div className="absolute inset-0 shrink-0 border rounded-full m-auto shadow border-border size-80 bg-muted/60 z-[4]"></div>
                {/* Orbit 3 Path - size-[26rem] */}
                <div className="absolute inset-0 shrink-0 border rounded-full m-auto shadow border-border size-[26rem] bg-muted/40 z-[3]"></div>
                {/* Orbit 4 Path - size-[32rem] */}
                <div className="absolute inset-0 shrink-0 border rounded-full m-auto shadow border-border size-[32rem] bg-muted/20 z-[2]"></div>

                {/* Central Hub - B.S.T Logo */}
                <div className="size-32 bg-card absolute inset-0 shrink-0 border z-20 rounded-full m-auto flex items-center justify-center border-border shadow-sm">
                  <Image
                    src="/logos/bst-logo-for-light.svg"
                    alt="B.S.T Logo"
                    width={64}
                    height={64}
                    className="size-16 dark:hidden hover-shake"
                  />
                  <Image
                    src="/logos/bst-logo-for-dark.svg"
                    alt="B.S.T Logo"
                    width={64}
                    height={64}
                    className="size-16 hidden dark:block hover-shake"
                  />
                </div>

                {/* Orbit 1 - Closest (Popular Domains: .com, .net, .org) */}
                <div className="absolute inset-0 m-auto size-56 z-[15] animate-[spin_25s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="size-11 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-2 animate-[spin_25s_linear_infinite_reverse]">
                      <Image
                        src="/domains/bark-hosting-dot-com-domain.svg"
                        alt=".com"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="size-11 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-2 animate-[spin_25s_linear_infinite_reverse]">
                      <Image
                        src="/domains/bark-hosting-dot-net-domain.svg"
                        alt=".net"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="size-11 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-2 animate-[spin_25s_linear_infinite_reverse]">
                      <Image
                        src="/domains/bark-hosting-dot-org-domain.svg"
                        alt=".org"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                </div>

                {/* Orbit 2 - Second Ring (.shop, .store, .online) */}
                <div className="absolute inset-0 m-auto size-80 z-[15] animate-[spin_20s_linear_infinite_reverse]">
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                    <div className="size-12 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-2 animate-[spin_20s_linear_infinite]">
                      <Image
                        src="/domains/bark-hosting-dot-shop-domain.svg"
                        alt=".shop"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="size-12 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-2 animate-[spin_20s_linear_infinite]">
                      <Image
                        src="/domains/bark-hosting-dot-store-domain.svg"
                        alt=".store"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="size-12 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-2 animate-[spin_20s_linear_infinite]">
                      <Image
                        src="/domains/bark-hosting-dot-online-domain.svg"
                        alt=".online"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                </div>

                {/* Orbit 3 - Third Ring (.tech, .xyz, .biz) */}
                <div className="absolute inset-0 m-auto size-[26rem] z-[15] animate-[spin_18s_linear_infinite]">
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="size-12 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-2 animate-[spin_18s_linear_infinite_reverse]">
                      <Image
                        src="/domains/bark-hosting-dot-tech-domain.svg"
                        alt=".tech"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                  <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2">
                    <div className="size-12 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-2 animate-[spin_18s_linear_infinite_reverse]">
                      <Image
                        src="/domains/bark-hosting-dot-xyz-domain.svg"
                        alt=".xyz"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2">
                    <div className="size-12 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-2 animate-[spin_18s_linear_infinite_reverse]">
                      <Image
                        src="/domains/bark-hosting-dot-biz-domain.svg"
                        alt=".biz"
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                </div>

                {/* Orbit 4 - Outer Ring (.fun, .cloud) */}
                <div className="absolute inset-0 m-auto size-[32rem] z-[15] animate-[spin_15s_linear_infinite_reverse]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="size-11 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-2 animate-[spin_15s_linear_infinite]">
                      <Image
                        src="/domains/bark-hosting-dot-fun-domain.svg"
                        alt=".fun"
                        width={26}
                        height={26}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="size-11 bg-white dark:bg-black/75 border border-border rounded-full shadow-sm flex items-center justify-center p-2 animate-[spin_15s_linear_infinite]">
                      <Image
                        src="/domains/bark-hosting-dot-cloud-domain.svg"
                        alt=".cloud"
                        width={26}
                        height={26}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid - 3 Column Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
          <div>
            <div className="flex items-center gap-2">
              <Clock className="size-5 text-primary" />
              <h3 className="font-bold text-lg text-muted-foreground">
                <GradientText>99.9% Uptime Guarantee</GradientText>
              </h3>
            </div>
            <p className="text-muted-foreground text-base mt-2">
              Ensure Your Website Stays Online With Industry-Leading Uptime And
              A Stable Infrastructure
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Zap className="size-5 text-primary" />
              <h3 className="font-bold text-lg text-muted-foreground">
                <GradientText>Instant Domain Registration</GradientText>
              </h3>
            </div>
            <p className="text-muted-foreground text-base mt-2">
              Register And Activate Your Domain Instantly With Access To Over
              400+ Extensions
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Headphones className="size-5 text-primary" />
              <h3 className="font-bold text-lg text-muted-foreground">
                <GradientText>Reliable Support</GradientText>
              </h3>
            </div>
            <p className="text-muted-foreground text-base mt-2">
              Access Friendly And Helpful Support During Business Hours Via
              Chat, Email, Or Phone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
