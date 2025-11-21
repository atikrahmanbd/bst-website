"use client";

import { motion } from "motion/react";
import {
  Server,
  Shield,
  Zap,
  HardDrive,
  Mail,
  Database,
  Code,
  Users,
  LifeBuoy,
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "cPanel Control Panel",
    description:
      "Easy-To-Use cPanel Interface For Complete Website Management And Control",
  },
  {
    icon: Shield,
    title: "Free SSL Certificates",
    description:
      "Automatic SSL Installation And Renewal For Secure HTTPS Connection",
  },
  {
    icon: Zap,
    title: "SSD Storage",
    description:
      "Ultra-Fast SSD Drives For Lightning-Quick Website Loading Speeds",
  },
  {
    icon: HardDrive,
    title: "Daily Backups",
    description:
      "Automated Daily Backups With Easy One-Click Restore From cPanel",
  },
  {
    icon: Mail,
    title: "Professional Email",
    description:
      "Create Unlimited Professional Email Addresses With Your Domain Name",
  },
  {
    icon: Database,
    title: "MySQL Databases",
    description:
      "Unlimited MySQL Databases For WordPress, Joomla, And Custom Applications",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Support For PHP, Python, Node.js, Git, SSH Access, And More",
  },
  {
    icon: Users,
    title: "Free Migration",
    description:
      "Professional Website Migration Service From Your Current Host To Ours",
  },
  {
    icon: LifeBuoy,
    title: "24/7 Support",
    description: "Round-The-Clock Technical Support Via Email, Chat, And Phone",
  },
];

export function HostingFeatures() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-black">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">
            Everything You Need To Succeed Online
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful Features And Tools Included With Every Hosting Plan
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <feature.icon
                className="h-10 w-10 text-primary mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
