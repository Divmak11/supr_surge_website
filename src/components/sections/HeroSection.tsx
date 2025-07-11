"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Button from "../ui/Button";
import dynamic from "next/dynamic";

const InteractiveGraphic = dynamic(
  () => import("../ui/InteractiveGraphic"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-96 bg-primary-purple/20 rounded-2xl flex items-center justify-center">
        <p>Loading Animation...</p>
      </div>
    ),
  }
);

const dynamicWords = ["Meme", "Trend", "Viral Moment", "Story"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = (ref.current as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen text-neutral-light flex items-center justify-center p-8 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-80 -z-10" />
      {/* Subtle Particle Overlay (optional, can be added later) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Example: Add SVG sparkles or particles here if desired */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.4 }}
            className="text-5xl font-extrabold fade-in-up"
          >
            From{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={dynamicWords[index]}
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1.1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
                className="text-highlight-pink inline-block glow-animate"
              >
                {dynamicWords[index]}
              </motion.span>
            </AnimatePresence>{" "}
            to Mainstream  Your Brand, Our Playground
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring', bounce: 0.3 }}
            className="mt-4 text-xl text-neutral-gray fade-in-up"
          >
            Crafty digital campaigns that stop scrolls and spark conversations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <Button className="glow-animate">Make Memes, Make Impact</Button>
            <a
              href="#"
              className="text-neutral-light/60 hover:text-neutral-light transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-neutral-light after:transition-all after:duration-200 hover:after:w-full"
            >
              See Our Viral Lab 192
            </a>
          </motion.div>
        </div>
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="flex items-center justify-center float-animate"
        >
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
          >
            <InteractiveGraphic />
          </div>
        </motion.div>
      </div>
      {/* Animated Scroll Down Indicator */}
      <div className="scroll-indicator">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15" stroke="#EC4899" strokeWidth="2" fill="none" />
          <path d="M16 10V22" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 18L16 22L20 18" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 