"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import GradientText from "@/components/ui/gradient-text";
import {
  BorderMagicButton,
  HoverBorderGradientButton,
} from "@/components/ui/buttons";
import ElectricBorder from "@/components/ui/react-bits/ElectricBorder";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 250,
    description: "Perfect For Personal Websites And Blogs",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "100 GB Bandwidth",
      "5 Email Accounts",
      "Free SSL Certificate",
      "cPanel Control Panel",
      "Daily Backups",
      "24/7 Support",
    ],
    popular: false,
  },
  {
    name: "Business",
    monthlyPrice: 450,
    description: "Ideal For Growing Businesses And E-Commerce",
    features: [
      "5 Websites",
      "50 GB SSD Storage",
      "500 GB Bandwidth",
      "25 Email Accounts",
      "Free SSL Certificate",
      "cPanel Control Panel",
      "Daily Backups",
      "Priority Support",
      "Free Domain (1 Year)",
    ],
    popular: true,
  },
  {
    name: "Professional",
    monthlyPrice: 950,
    description: "For High-Traffic Sites And Applications",
    features: [
      "Unlimited Websites",
      "100 GB SSD Storage",
      "Unlimited Bandwidth",
      "Unlimited Email Accounts",
      "Free SSL Certificate",
      "cPanel Control Panel",
      "Daily Backups",
      "Priority Support",
      "Free Domain (1 Year)",
      "Free Website Migration",
    ],
    popular: false,
  },
];

export function HostingPlans() {
  const [selectedYears, setSelectedYears] = useState<1 | 2 | 3>(1);

  const yearOptions = [
    { years: 1, label: "12 Months", discount: 0 },
    { years: 2, label: "2 Years", discount: 10 },
    { years: 3, label: "3 Years", discount: 20 },
  ] as const;

  const calculatePrice = (monthlyPrice: number) => {
    const selectedOption = yearOptions.find(
      (opt) => opt.years === selectedYears
    );
    const discount = selectedOption?.discount || 0;
    const totalMonths = selectedYears * 12;
    const totalPrice = monthlyPrice * totalMonths;
    const discountedPrice = totalPrice * (1 - discount / 100);
    const monthlyDiscounted = discountedPrice / totalMonths;

    return {
      originalMonthly: monthlyPrice,
      discountedMonthly: Math.round(monthlyDiscounted),
      totalPrice: Math.round(discountedPrice),
      hasDiscount: discount > 0,
    };
  };

  return (
    <section
      id="plans"
      className="relative py-12 sm:py-16 md:py-20 md:pb-40 px-4"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 px-2">
            <GradientText>Choose Your Plan</GradientText>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible Hosting Plans Designed To Grow With Your Business
          </p>

          {/* Year Selection Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {yearOptions.map((option) => (
              <button
                key={option.years}
                onClick={() => setSelectedYears(option.years)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                  selectedYears === option.years
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                {option.label}
                {option.discount > 0 && (
                  <span className="ml-2 text-xs">- {option.discount}% Off</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-full"
            >
              {plan.popular ? (
                <ElectricBorder
                  color="#00EFAE"
                  speed={0.8}
                  chaos={0.3}
                  thickness={4}
                  style={{
                    borderRadius: 16,
                    overflow: "visible",
                    position: "relative",
                    zIndex: 20,
                  }}
                  className="h-full"
                >
                  <div className="p-8 flex flex-col h-full rounded-2xl backdrop-blur-sm overflow-visible bg-primary/5 shadow-xl border border-white/5">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {plan.description}
                      </p>
                      {(() => {
                        const pricing = calculatePrice(plan.monthlyPrice);
                        return (
                          <div>
                            <div className="flex items-baseline gap-2">
                              {pricing.hasDiscount && (
                                <span className="text-2xl font-semibold text-muted-foreground line-through">
                                  ৳{pricing.originalMonthly}
                                </span>
                              )}
                              <span className="text-4xl font-bold text-primary">
                                ৳{pricing.discountedMonthly}
                              </span>
                              <span className="text-muted-foreground">
                                /month
                              </span>
                            </div>
                            {pricing.hasDiscount && (
                              <p className="text-sm text-primary mt-2">
                                Total: ৳{pricing.totalPrice.toLocaleString()}{" "}
                                for {selectedYears}{" "}
                                {selectedYears === 1 ? "year" : "years"}
                              </p>
                            )}
                          </div>
                        );
                      })()}
                    </div>

                    <div className="flex-1 flex flex-col">
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a href="/order" className="block w-full cursor-pointer">
                      <BorderMagicButton
                        className="w-full cursor-pointer"
                        size="lg"
                        shape="pill"
                      >
                        Get Started
                      </BorderMagicButton>
                    </a>
                  </div>
                </ElectricBorder>
              ) : (
                <div
                  className="p-8 flex flex-col h-full rounded-2xl bg-card/80 border-2 hover:border-dashed border-dotted transition-colors"
                  style={{
                    borderColor:
                      plan.name === "Starter" ? "#334EFC" : "#e7000b",
                  }}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {plan.description}
                    </p>
                    {(() => {
                      const pricing = calculatePrice(plan.monthlyPrice);
                      return (
                        <div>
                          <div className="flex items-baseline gap-2">
                            {pricing.hasDiscount && (
                              <span className="text-2xl font-semibold text-muted-foreground line-through">
                                ৳{pricing.originalMonthly}
                              </span>
                            )}
                            <span className="text-4xl font-bold text-primary">
                              ৳{pricing.discountedMonthly}
                            </span>
                            <span className="text-muted-foreground">
                              /month
                            </span>
                          </div>
                          {pricing.hasDiscount && (
                            <p className="text-sm text-primary mt-2">
                              Total: ৳{pricing.totalPrice.toLocaleString()} for{" "}
                              {selectedYears}{" "}
                              {selectedYears === 1 ? "year" : "years"}
                            </p>
                          )}
                        </div>
                      );
                    })()}
                  </div>

                  <div className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="/order" className="block w-full cursor-pointer">
                    <HoverBorderGradientButton
                      className="w-full cursor-pointer"
                      size="lg"
                      shape="pill"
                    >
                      Get Started
                    </HoverBorderGradientButton>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
