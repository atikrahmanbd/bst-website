import { HomeMainHero } from "@/components/sections-home/home-main-hero";
import { HomeServicesOffered } from "@/components/sections-home/home-services-offered";
import { HomeAdditionalServices } from "@/components/sections-home/home-additional-services";
import { HomeWhyChooseUs } from "@/components/sections-home/home-why-choose-us";
import { HomeFaqSection } from "@/components/sections-home/home-faq-section";
import { CommonPortalPreview } from "@/components/sections-common/common-portal-preview";
import { CommonTestimonials } from "@/components/sections-common/common-testimonials";
import { CommonTrustedBrands } from "@/components/sections-common/common-trusted-brands";
import { CommonWhatsNext } from "@/components/sections-common/common-whats-next";

export default function Home() {
  return (
    <>
      <HomeMainHero />
      <HomeServicesOffered />
      <HomeAdditionalServices />
      <CommonPortalPreview />
      <HomeWhyChooseUs />
      <CommonTestimonials />
      <CommonTrustedBrands />
      <HomeFaqSection />
      <CommonWhatsNext />
    </>
  );
}
