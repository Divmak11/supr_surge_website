"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Metric {
  value: string;
  label: string;
  color: string;
}

interface ShowcaseCardProps {
  id: number;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  metrics: Metric[];
  highlights: string[];
  accentColor: string;
  isFlipped: boolean;
  onCardClick: () => void;
}

const ShowcaseCard = ({
  title,
  tagline,
  description,
  imageUrl,
  metrics,
  highlights,
  accentColor,
  isFlipped,
  onCardClick,
}: ShowcaseCardProps) => {
  return (
    <div
      className="h-full w-full cursor-pointer"
      onClick={onCardClick}
      style={{ perspective: '1500px' }}
    >
      <motion.div
        className="relative w-full h-full rounded-2xl"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 1
        }}
      >
        {/* Front Face - Playful & Catchy Design */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {/* Animated Border Glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-60"
            style={{
              background: `linear-gradient(135deg, ${accentColor}40, transparent 50%, ${accentColor}40)`,
              padding: '2px',
            }}
          />

          {/* Card Container */}
          <div className="absolute inset-[2px] bg-gradient-to-br from-[#000000] via-[#111111] to-[#000000] rounded-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div
              className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-20"
              style={{
                background: `radial-gradient(circle at 100% 0%, ${accentColor}, transparent 70%)`,
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-20 h-20 sm:w-28 sm:h-28 opacity-15 rounded-full blur-xl"
              style={{ backgroundColor: accentColor }}
            />

            {/* Floating Decorative Dots */}
            <motion.div
              className="absolute top-4 left-4 w-2 h-2 rounded-full opacity-60"
              style={{ backgroundColor: accentColor }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-8 left-10 w-1.5 h-1.5 rounded-full opacity-40"
              style={{ backgroundColor: '#FFFFFF' }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />

            {/* Title Badge */}
            <div className="relative z-10 pt-4 px-4 sm:pt-5 sm:px-5">
              <motion.div
                className="inline-block"
                whileHover={{ rotate: [-1, 1, -1], transition: { duration: 0.3 } }}
              >
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold text-white shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}, ${accentColor}CC)`,
                    boxShadow: `0 4px 20px ${accentColor}40`,
                  }}
                >
                  <span className="animate-pulse">✨</span>
                  {tagline}
                </span>
              </motion.div>
            </div>

            {/* Campaign Image */}
            <div className="relative mt-3 mx-4 sm:mx-5 h-32 sm:h-40 md:h-48 rounded-xl overflow-hidden group">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)`,
                }}
              />
            </div>

            {/* Title & Metrics */}
            <div className="relative z-10 px-4 sm:px-5 mt-3">
              <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight line-clamp-1">
                {title}
              </h3>

              {/* Metric Pills */}
              <div className="flex flex-wrap gap-2 mt-2.5">
                {metrics.slice(0, 2).map((metric, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span
                      className="text-sm sm:text-base font-black"
                      style={{ color: metric.color }}
                    >
                      {metric.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-neutral-gray uppercase tracking-wide">
                      {metric.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Click Hint */}
            <div className="absolute bottom-3 right-4">
              <motion.span
                className="text-xs text-white/40 flex items-center gap-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Tap for details
                <span className="text-sm">→</span>
              </motion.span>
            </div>
          </div>
        </div>

        {/* Back Face - Detailed Info with Scroll */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {/* Background with Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(145deg, #000000 0%, #111111 50%, ${accentColor}15 100%)`,
            }}
          />

          {/* Decorative Corner */}
          <div
            className="absolute top-0 right-0 w-40 h-40 opacity-10"
            style={{
              background: `radial-gradient(circle at 100% 0%, ${accentColor}, transparent 60%)`,
            }}
          />

          {/* Scrollable Content Container */}
          <div className="relative h-full overflow-y-auto overflow-x-hidden p-4 sm:p-5">
            {/* Header */}
            <div className="mb-3">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                style={{
                  backgroundColor: `${accentColor}30`,
                  color: accentColor,
                }}
              >
                Campaign Details
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-2">{title}</h3>
              <p className="text-xs sm:text-sm text-neutral-gray mt-2 leading-relaxed line-clamp-3">{description}</p>
            </div>

            {/* Highlights */}
            <div className="mb-3">
              <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                Key Highlights
              </p>
              <div className="space-y-1.5">
                {highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 bg-white/5 rounded-lg px-2.5 py-1.5"
                  >
                    <span className="text-[#FFFF00] text-xs mt-0.5">✓</span>
                    <span className="text-xs text-neutral-gray leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="pt-3 border-t border-white/10">
              <div className="grid grid-cols-2 gap-2">
                {metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="text-center p-2 rounded-lg bg-white/5"
                  >
                    <p
                      className="text-base sm:text-lg font-black"
                      style={{ color: metric.color }}
                    >
                      {metric.value}
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-neutral-gray uppercase leading-tight">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Back Button Hint */}
            <div className="text-center mt-3 pb-2">
              <span className="text-xs text-white/40">Tap to flip back</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShowcaseCard;