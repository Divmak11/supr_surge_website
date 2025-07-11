import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

// Lazy load sections for better performance
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: true,
});

const WhyDifferentSection = dynamic(() => import("@/components/sections/WhyDifferentSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: true,
});

const MetricsSection = dynamic(() => import("@/components/sections/MetricsSection"), {
  loading: () => <div className="h-96 bg-neutral-dark animate-pulse" />,
  ssr: true,
});

const ShowcaseSection = dynamic(() => import("@/components/sections/ShowcaseSection"), {
  loading: () => <div className="h-96 bg-neutral-dark animate-pulse" />,
  ssr: true,
});

const BrandsTestimonialsSection = dynamic(() => import("@/components/sections/BrandsTestimonialsSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: true,
});

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: true,
});

const ContactFormSection = dynamic(() => import("@/components/sections/ContactFormSection"), {
  loading: () => <div className="h-96 bg-neutral-dark animate-pulse" />,
  ssr: true,
});

const FAQsSection = dynamic(() => import("@/components/sections/FAQsSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
  ssr: true,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <WhyDifferentSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-neutral-dark animate-pulse" />}>
        <MetricsSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-neutral-dark animate-pulse" />}>
        <ShowcaseSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <BrandsTestimonialsSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-neutral-dark animate-pulse" />}>
        <ContactFormSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <FAQsSection />
      </Suspense>
    </>
  );
} 