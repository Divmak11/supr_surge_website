import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyDifferentSection from "@/components/sections/WhyDifferentSection";
import MetricsSection from "@/components/sections/MetricsSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import BrandsTestimonialsSection from "@/components/sections/BrandsTestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import FAQsSection from "@/components/sections/FAQsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyDifferentSection />
      <MetricsSection />
      <ShowcaseSection />
      <BrandsTestimonialsSection />
      <AboutSection />
      <ContactFormSection />
      <FAQsSection />
    </>
  );
} 