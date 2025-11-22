import { AboutHero } from "@/components/sections-about/about-hero";
// import { AboutStory } from "@/components/sections-about/about-story";
import { AboutFeaturesShowcase } from "@/components/sections-about/about-features-showcase";
import { AboutBetterExperience } from "@/components/sections-about/about-better-experience";
import { AboutWhyChoose } from "@/components/sections-about/about-why-choose";
import { CommonTrustedBrands } from "@/components/sections-common/common-trusted-brands";
import { CommonTestimonials } from "@/components/sections-common/common-testimonials";
import { CommonWhatsNext } from "@/components/sections-common/common-whats-next";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* <AboutStory /> */}
      <AboutFeaturesShowcase />
      <AboutBetterExperience />
      <AboutWhyChoose />
      <CommonTestimonials />
      <CommonTrustedBrands />
      <CommonWhatsNext />
    </>
  );
}
