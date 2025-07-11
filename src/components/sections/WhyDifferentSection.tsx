"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bot, Network, PersonStanding, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const FeatureMap = dynamic(() => import("@/components/ui/FeatureMap"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 rounded-2xl bg-primary-purple/10">
      <p>Loading Map...</p>
    </div>
  ),
});

const floatingStickers = [
  { src: "/globe.svg", alt: "Globe Sticker", style: "top-8 right-8 w-12 animate-float-slow" },
  { src: "/window.svg", alt: "Window Sticker", style: "bottom-8 left-8 w-10 animate-float-medium" },
];

const headlineEmojis = ["🤓", "🤖", "🎯", "🔥", "💡", "😂"];

const features = [
  {
    icon: "/globe.svg",
    emoji: "🌍",
    color: "bg-[#F9FAFB] border-[#8B5CF6]",
    title: "Omni-Channel Amplification",
    description:
      "Masters across every major feed—from meme pages on Instagram to trend-driving TikTok hubs.",
  },
  {
    icon: "/window.svg",
    emoji: "🤖",
    color: "bg-[#F0F5FF] border-[#22C55E]",
    title: "AI-Driven Strategy",
    description:
      "Proprietary AI analyzes trend velocity and audience sentiment, so your campaigns land at the perfect moment.",
    badge: "Proprietary Tech",
  },
  {
    icon: "/file.svg",
    emoji: "⚡",
    color: "bg-[#FFF7F0] border-[#EC4899]",
    title: "Real-Time Optimization",
    description:
      "Live dashboards update every 5 seconds—letting us pivot on the fly for maximum ROI.",
  },
  {
    icon: "/next.svg",
    emoji: "🧑‍🎤",
    color: "bg-[#F9FAFB] border-[#8B5CF6]",
    title: "Creative Collective",
    description:
      "A hand-picked team of meme-lords, data nerds and creative strategists—all under one roof.",
  },
];

const WhyDifferentSection = () => {
  const [headlineIndex, setHeadlineIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % headlineEmojis.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-neutral-dark text-neutral-light py-28 overflow-hidden">
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
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center gap-4">
            Why We’re Different
            <span className="text-4xl md:text-5xl animate-bounce inline-block">{headlineEmojis[headlineIndex]}</span>
          </h2>
          <p className="text-xl text-neutral-gray mb-12">
            Viral creativity meets AI-driven insights, giving you the best of both worlds.
          </p>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 rounded-2xl border-4 ${feature.color} p-6 shadow-lg transition-transform duration-300 
                  ${index === 0 ? 'hover:scale-105 hover:animate-pulse' : ''}
                  ${index === 1 ? 'hover:bg-highlight-pink/10 hover:scale-105' : ''}
                  ${index === 2 ? 'hover:scale-105 hover:-rotate-2' : ''}
                  group`}
              >
                <div className="w-16 h-16 flex items-center justify-center relative">
                  <Image src={feature.icon} alt={feature.title} width={48} height={48} className="w-12 h-12 drop-shadow-lg" />
                  <span className="absolute -top-2 -right-2 text-xl">{feature.emoji}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{color: '#F9FAFB'}}>{feature.title}</h3>
                  <p className="text-neutral-gray mb-1" style={{color: '#E5E7EB'}}>{feature.description}</p>
                  {feature.badge && (
                    <span className="mt-2 inline-block bg-highlight-pink text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Column: Interactive Graphic Placeholder */}
        <div className="flex items-center justify-center h-full min-h-[400px]">
          <FeatureMap />
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection; 