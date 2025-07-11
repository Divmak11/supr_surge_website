"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import { Lightbulb, Presentation, TrendingUp } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const LiveCounter = dynamic(() => import("../ui/LiveCounter"), {
  ssr: false,
});

const floatingStickers = [
  { src: "/window.svg", alt: "Window Sticker", style: "top-8 left-8 w-10 animate-float-slow" },
  { src: "/file.svg", alt: "File Sticker", style: "bottom-8 right-8 w-12 animate-float-medium" },
];

const headlineEmojis = ["💡", "🚀", "📈", "🎨", "🔥", "😂"];

const serviceCards = [
  {
    icon: "/globe.svg",
    emoji: "💡",
    color: "bg-[#F9FAFB] border-[#8B5CF6]",
    title: "Ideate & Strategize",
    description:
      "We decode your brand’s voice and audience DNA—combining memetic trends with data-backed insights to craft a blueprint that’s both playful and precise.",
  },
  {
    icon: "/window.svg",
    emoji: "🚀",
    color: "bg-[#F0F5FF] border-[#22C55E]",
    title: "Create & Amplify",
    description:
      "From scroll-stopping memes to influencer collabs, we roll out content on the ideal channels—powered by AI-driven curation and real-time campaign boosts.",
    badge: "AI-Powered",
  },
  {
    icon: "/file.svg",
    emoji: "📈",
    color: "bg-[#FFF7F0] border-[#EC4899]",
    title: "Analyze & Optimize",
    description:
      "We track every click, view and share—using custom dashboards and ML-powered insights to double down on winners and pivot from duds.",
    counter: {
      from: 0,
      to: 3.4,
      suffix: "x engagement",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const ServicesSection = () => {
  const [headlineIndex, setHeadlineIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % headlineEmojis.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Floating SVG Stickers */}
      {floatingStickers.map((sticker, i) => (
        <Image
          key={i}
          src={sticker.src}
          alt={sticker.alt}
          width={48}
          height={48}
          className={`pointer-events-none select-none opacity-60 absolute z-0 ${sticker.style}`}
        />
      ))}
      <div className="container mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-dark mb-12 flex items-center gap-4">
          Our Services
          <span className="text-4xl md:text-5xl animate-bounce inline-block">{headlineEmojis[headlineIndex]}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border-4 ${service.color} shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:-rotate-2 group`}
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center relative">
                <Image src={service.icon} alt={service.title} width={64} height={64} className="w-16 h-16 drop-shadow-lg" />
                <span className="absolute -top-3 -right-3 text-2xl animate-bounce">{service.emoji}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-neutral-medium mb-4">{service.description}</p>
              {service.badge && (
                <span className="mt-2 inline-block bg-accent-green text-neutral-dark text-xs font-semibold px-3 py-1 rounded-full">
                  {service.badge}
                </span>
              )}
              {service.counter && (
                <div className="mt-4 text-lg font-bold">
                  <LiveCounter from={service.counter.from} to={service.counter.to} />
                  <span className="ml-1">{service.counter.suffix}</span>
                </div>
              )}
              {/* Emoji burst on hover */}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-0">
                <span className="text-2xl animate-bounce">😂🔥🎉</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 