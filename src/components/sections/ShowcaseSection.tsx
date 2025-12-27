"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import ShowcaseCard from "../ui/ShowcaseCard";

const headlineEmojis = ["🔥", "🚀", "💥", "⚡", "🎯", "✨"];

const projects = [
  {
    id: 1,
    title: "Tu Ru Ruu Campaign",
    tagline: "Harrdy Sandhu",
    description: "We drove Harrdy Sandhu's 'Tu Ru Ruu' to viral status with strategic planning and innovative digital tactics, turning it into a cultural phenomenon!",
    imageUrl: "/campaign_tururuu.png",
    accentColor: "#FF4D8C",
    metrics: [
      { value: "100M+", label: "YouTube Views", color: "#FF4D8C" },
      { value: "7 Days", label: "To Viral", color: "#22C55E" },
      { value: "5M+", label: "Engagement", color: "#FFD700" },
      { value: "#1", label: "Trending", color: "#00D4FF" },
    ],
    highlights: [
      "Influencer Collabs on Instagram & Snapchat",
      "Memes, BTS clips & viral moments",
      "Became the anthem of December 2024",
      "Turned fans into marketers",
    ],
  },
  {
    id: 2,
    title: "Raghav Juyal PR",
    tagline: "IIFA Award Winner",
    description: "Strategic PR campaign that secured massive visibility for Raghav Juyal, culminating in an IIFA Award win with unprecedented social media engagement.",
    imageUrl: "/campaign_raghav_pr.png",
    accentColor: "#FFD700",
    metrics: [
      { value: "40M+", label: "Impressions", color: "#FF4D8C" },
      { value: "800K", label: "Likes", color: "#22C55E" },
      { value: "16M", label: "Reach", color: "#FFD700" },
      { value: "IIFA", label: "Award", color: "#8B5CF6" },
    ],
    highlights: [
      "IIFA Award winning campaign",
      "Multi-platform PR strategy",
      "16M+ organic reach achieved",
      "800K+ engagement across platforms",
    ],
  },
  {
    id: 3,
    title: "Moonwalkr",
    tagline: "Cricket Gear Brand",
    description: "Executed a comprehensive visibility campaign across 200 cricket pages, establishing Moonwalkr as a premium cricket gear brand with massive reach.",
    imageUrl: "/campaign_moonwalkr.png",
    accentColor: "#22C55E",
    metrics: [
      { value: "1M+", label: "Impressions", color: "#22C55E" },
      { value: "500K", label: "Reach", color: "#FFD700" },
      { value: "10K+", label: "Likes", color: "#FF4D8C" },
      { value: "200", label: "Pages", color: "#00D4FF" },
    ],
    highlights: [
      "200 cricket pages for visibility",
      "Targeted sports audience reach",
      "Brand awareness boost",
      "Engaged cricket community",
    ],
  },
];

const ShowcaseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Headline emoji animation
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % headlineEmojis.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Simple unflip-then-navigate wrapper
  const navigateWithUnflip = (newIndex: number) => {
    if (flippedCardId !== null) {
      setFlippedCardId(null);
      setTimeout(() => setCurrentIndex(newIndex), 400);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const handleNext = () => navigateWithUnflip((currentIndex + 1) % projects.length);
  const handlePrev = () => navigateWithUnflip((currentIndex - 1 + projects.length) % projects.length);

  const handleCardInteraction = (index: number) => {
    if (index === currentIndex) {
      setFlippedCardId(flippedCardId === projects[index].id ? null : projects[index].id);
    } else {
      navigateWithUnflip(index);
    }
  };

  // Intersection observer for entrance animations
  const sectionRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(node);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative bg-gradient-to-b from-[#0f0f14] via-[#1a1a2e] to-[#0f0f14] py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-purple-600/30"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ top: '10%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 bg-pink-600/30"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          style={{ bottom: '20%', right: '-5%' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Play className="w-4 h-4 text-highlight-pink" fill="currentColor" />
            <span className="text-sm text-neutral-gray">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Our Top Works{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={headlineIndex}
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 20 }}
                className="inline-block"
              >
                {headlineEmojis[headlineIndex]}
              </motion.span>
            </AnimatePresence>
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Where creativity meets data. Check out campaigns that broke the internet.
          </p>
        </motion.div>

        {/* Improved Carousel Track */}
        <div className="relative h-[600px] flex items-center justify-center">
          {projects.map((project, index) => {
            // Calculate relative position with wrap-around
            let diff = index - currentIndex;
            if (diff < -1) diff += projects.length;
            if (diff > 1) diff -= projects.length;

            const isActive = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;

            // Define animation properties based on position
            const xOffset = diff * 380; // Distance between cards
            const opacity = isActive ? 1 : 0.4;
            const scale = isActive ? 1 : 0.8;
            const zIndex = isActive ? 20 : 10;
            const blur = isActive ? "blur(0px)" : "blur(2px)";
            const visibility = (isActive || isLeft || isRight) ? "visible" : "hidden";

            return (
              <motion.div
                key={project.id}
                initial={false}
                animate={{
                  x: xOffset,
                  opacity,
                  scale,
                  zIndex,
                  filter: blur,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                }}
                className="absolute w-[300px] sm:w-[350px] h-[500px]"
                style={{
                  visibility: visibility as React.CSSProperties["visibility"],
                  cursor: isActive ? "default" : "pointer"
                }}
                onClick={() => handleCardInteraction(index)}
              >
                <div className="w-full h-full transform transition-transform duration-500">
                  <ShowcaseCard
                    {...project}
                    isFlipped={isActive && flippedCardId === project.id}
                    onCardClick={() => handleCardInteraction(index)}
                  />
                </div>

                {/* Center Card Shadow/Glow */}
                {isActive && (
                  <motion.div
                    layoutId="glow"
                    className="absolute -inset-4 bg-purple-500/20 rounded-[2.5rem] blur-3xl -z-10"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-8 mt-4">
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => navigateWithUnflip(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-purple-500" : "w-2 bg-white/20"
                    }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-xl shadow-purple-500/20"
          >
            Let&apos;s Make Magic! ✨
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;