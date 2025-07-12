"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bot, Network, PersonStanding, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const FeatureMap = dynamic(() => import("@/components/ui/FeatureMap"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64 sm:h-80 md:h-96 rounded-2xl bg-primary-purple/10">
      <p className="text-sm sm:text-base">Loading Map...</p>
    </div>
  ),
});

const floatingStickers = [
  { src: "/globe.svg", alt: "Globe Sticker", style: "top-8 right-8 w-8 sm:w-10 md:w-12 animate-float-slow" },
  { src: "/window.svg", alt: "Window Sticker", style: "bottom-8 left-8 w-6 sm:w-8 md:w-10 animate-float-medium" },
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
    <section id="why-different" className="relative bg-neutral-dark text-neutral-light py-16 sm:py-20 md:py-28 overflow-hidden">
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
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 text-white">
                Why We're{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-highlight-pink">
                  Different
                </span>
                <motion.span
                  key={headlineIndex}
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
                  className="inline-block ml-2 sm:ml-4 text-accent-green"
                >
                  {headlineEmojis[headlineIndex]}
                </motion.span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray leading-relaxed">
                While others chase trends, we create them. Our unique blend of viral creativity and AI-driven insights gives you the best of both worlds.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                  className={`flex items-start gap-2 sm:gap-3 md:gap-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-3 sm:p-4 md:p-6 shadow-lg hover:bg-white/15 transition-all duration-300 group cursor-pointer min-h-[44px] touch-target`}
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center relative">
                    <Image 
                      src={feature.icon} 
                      alt={feature.title} 
                      width={48} 
                      height={48} 
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
                    />
                    <motion.span
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.3 
                      }}
                      className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-sm sm:text-base md:text-xl"
                    >
                      {feature.emoji}
                    </motion.span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-accent-green transition-colors duration-300">
                        {feature.title}
                      </h3>
                      {feature.badge && (
                        <span className="bg-highlight-pink text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full animate-pulse">
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-neutral-gray leading-relaxed group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center h-full min-h-[300px] sm:min-h-[400px]"
          >
            <div className="relative w-full max-w-lg">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/20 to-accent-green/20 rounded-2xl sm:rounded-3xl blur-xl"></div>
              
              {/* Main Graphic Container */}
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
                <FeatureMap />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-accent-green rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg"
              >
                AI
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 
                }}
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-highlight-pink rounded-full flex items-center justify-center text-white text-lg sm:text-xl shadow-lg"
              >
                🔥
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection; 