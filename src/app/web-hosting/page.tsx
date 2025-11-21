import { HostingHero } from "@/components/sections-hosting/hosting-hero";
import { HostingPlans } from "@/components/sections-hosting/hosting-plans";
import { HostingFeatures } from "@/components/sections-hosting/hosting-features";
import { HostingFaqSection } from "@/components/sections-hosting/hosting-faq-section";
import { HostingWhatsNext } from "@/components/sections-hosting/hosting-whats-next";

export default function WebHostingPage() {
  return (
    <>
      <HostingHero />
      <HostingPlans />
      <HostingFeatures />
      <HostingFaqSection />
      <HostingWhatsNext />
    </>
  );
}
