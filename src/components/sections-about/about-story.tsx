"use client";

import { motion } from "motion/react";
import { Target, Eye, Heart } from "lucide-react";
import { GlassContainer } from "@/components/ui/glass-container";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import GradientText from "@/components/ui/gradient-text";

export function AboutStory() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To Empower Businesses And Individuals With Reliable, Affordable, And Innovative Technology Solutions That Drive Growth And Success In The Digital Age.",
      color: "blue",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To Become The Most Trusted And Preferred Technology Partner In Bangladesh, Known For Excellence, Innovation, And Customer Satisfaction.",
      color: "purple",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "We Believe In Transparency, Customer-First Approach, Continuous Innovation, And Building Long-Term Relationships Based On Trust And Mutual Growth.",
      color: "red",
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            <GradientText>Our Story</GradientText>
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Founded With A Vision To Make Technology Accessible To Everyone,
            B.S.T. Has Grown From A Small Startup To A Recognized Name In
            Bangladesh&apos;s Digital Services Industry. We have Helped Hundreds
            Of Businesses Establish And Grow Their Online Presence.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {values.map((item, index) => {
            const colorClasses = {
              blue: {
                bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
                text: "text-blue-500",
              },
              purple: {
                bg: "bg-purple-500/10 group-hover:bg-purple-500/20",
                text: "text-purple-500",
              },
              red: {
                bg: "bg-red-500/10 group-hover:bg-red-500/20",
                text: "text-red-500",
              },
            };
            const colors =
              colorClasses[item.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassContainer className="group h-full">
                  <GlowingEffect disabled={false} proximity={200} spread={30} />
                  <div className="p-6 sm:p-8 text-center">
                    <div
                      className={`mb-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-lg ${colors.bg} transition-colors`}
                    >
                      <item.icon
                        className={`w-7 h-7 sm:w-8 sm:h-8 ${colors.text}`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlassContainer>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
