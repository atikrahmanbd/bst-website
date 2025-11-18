"use client";

import { motion, AnimatePresence } from "motion/react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Globe, Cloud, MessageSquare } from "lucide-react";
import React from "react";
import GradientText from "../ui/gradient-text";

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex flex-col items-center justify-center dark:border-white/[0.2] w-full aspect-square p-6 relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center space-y-3">
        <div className="text-neutral-700 dark:text-neutral-300">{icon}</div>
        <h2 className="dark:text-white text-xl font-bold text-black">
          {title}
        </h2>
        {description && (
          <p className="dark:text-neutral-400 text-sm text-neutral-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export function WhatsNext() {
  return (
    <div className="relative pt-20 pb-40 px-4">
      <BackgroundBeams />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        {/* Title And Subheading */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300">
            <GradientText>What&apos;s Next?</GradientText>
          </h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl leading-relaxed">
            Explore Our Core Services Designed To Support Your Website, Growth,
            And Digital Needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <Card
            title="Register Domain"
            icon={<Globe className="h-12 w-12" strokeWidth={2} />}
            description="Secure Your Ideal Domain Name With Instant Registration."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-blue-600"
              colors={[[59, 130, 246]]}
            />
          </Card>
          <Card
            title="Buy Hosting"
            icon={<Cloud className="h-12 w-12" strokeWidth={2} />}
            description="Launch Your Website With Fast, Reliable, and Optimized Hosting."
          >
            <EvervaultCard text="" />
          </Card>
          <Card
            title="Contact For Services"
            icon={<MessageSquare className="h-12 w-12" strokeWidth={2} />}
            description="Get Expert Help For Web, App, IT, and Custom Digital Solutions."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
