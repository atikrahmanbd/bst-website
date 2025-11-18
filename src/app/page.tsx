import { HeroPortalPreview } from "@/components/sections/hero-portal-preview";
import { HeroMainHome } from "@/components/sections/hero-main-home";
import { ServicesOffered } from "@/components/sections/services-offered";
import { AdditionalServices } from "@/components/sections/additional-services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustedBrands } from "@/components/sections/trusted-brands";
import { FaqSection } from "@/components/sections/faq-section";
import { WhatsNext } from "@/components/sections/whats-next";

export default function Home() {
  return (
    <>
      <HeroMainHome />
      <ServicesOffered />
      <AdditionalServices />
      <HeroPortalPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <TrustedBrands />
      <FaqSection />
      <WhatsNext />
    </>
  );
}
