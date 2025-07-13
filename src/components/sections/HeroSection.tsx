"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import Button from "../ui/Button";
import Image from "next/image";



const greetings = [
  "Hello!", "¡Hola!", "Ciao!", "नमस्ते!", "Meme Time!", "👋", "Salut!", "Hallo!", "こんにちは!"
];

const dynamicWords = [
  { word: "Meme", emoji: "😂" },
  { word: "Trend", emoji: "🔥" },
  { word: "Viral Moment", emoji: "🚀" },
  { word: "Inside Joke", emoji: "🤫" },
  { word: "Culture Drop", emoji: "🎉" },
  { word: "Story", emoji: "📖" },
  { word: "LOL", emoji: "🤣" },
  { word: "👀", emoji: "" },
];

const floatingStickers = [
  { src: "/globe.svg", alt: "Globe Sticker", style: "top-4 left-4 w-6 sm:w-8 md:w-10 lg:w-12 animate-float-slow" },
  { src: "/window.svg", alt: "Window Sticker", style: "top-1/2 left-2 sm:left-4 w-5 sm:w-6 md:w-8 lg:w-10 animate-float-medium" },
  { src: "/file.svg", alt: "File Sticker", style: "bottom-4 right-4 w-6 sm:w-8 md:w-10 lg:w-12 animate-float-slow" },
  { src: "/next.svg", alt: "Next Sticker", style: "bottom-1/3 right-2 sm:right-8 w-8 sm:w-10 md:w-12 lg:w-16 animate-float-medium" },
];

const HeroSection = () => {
  const [showGreeting, setShowGreeting] = useState(true);
  const [greetIndex, setGreetIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Optimized greeting animation with reduced complexity
  useEffect(() => {
    if (!showGreeting) return;
    
    const interval = setInterval(() => {
      setGreetIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowGreeting(false), 600);
          return prev;
        }
      });
    }, 180);

    return () => clearInterval(interval);
  }, [showGreeting]);

  // Optimized dynamic headline with reduced re-renders
  useEffect(() => {
    if (!showGreeting) {
      const interval = setInterval(() => {
        setWordIndex((prev) => (prev + 1) % dynamicWords.length);
      }, 2200);
      return () => clearInterval(interval);
    }
  }, [showGreeting]);

  // Optimized hover handlers
  const handleIllustrationHover = useCallback(() => setIsHovered(true), []);
  const handleIllustrationLeave = useCallback(() => setIsHovered(false), []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      {/* Floating SVG Stickers - Optimized with priority loading */}
      {floatingStickers.map((sticker, i) => (
        <Image
          key={i}
          src={sticker.src}
          alt={sticker.alt}
          width={64}
          height={64}
          priority={i < 2} // Only prioritize first 2 images
          className={`pointer-events-none select-none opacity-70 absolute z-0 ${sticker.style}`}
        />
      ))}
      
      {/* Opening Greeting Overlay - Simplified animation */}
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.span
              key={greetIndex}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.18 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-purple drop-shadow-lg flex items-center gap-2 sm:gap-4"
            >
              {greetings[greetIndex]}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main Content - Optimized with intersection observer */}
      <div className="relative grid grid-cols-1 gap-6 sm:gap-8 max-w-6xl w-full z-10">
        <div className="flex flex-col justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: showGreeting ? 0 : 1, y: showGreeting ? 40 : 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-neutral-dark mb-4 leading-tight"
          >
            From Punchlines to Profits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: showGreeting ? 0 : 1, y: showGreeting ? 40 : 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring', bounce: 0.3 }}
            className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-neutral-medium font-semibold flex items-center gap-2 justify-center md:justify-start"
          >
            We engineer viral moments—memes, influencers & data fused into scroll‑stopping campaigns.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: showGreeting ? 0 : 1, scale: showGreeting ? 0.8 : 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <Button 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-5 font-extrabold bg-primary-purple text-white rounded-full shadow-lg hover:bg-accent-green hover:text-primary-purple transition-all duration-200 min-h-[44px] touch-target w-full sm:w-auto"
            >
              Let's Create Your First Meme
            </Button>
          </motion.div>
        </div>

      </div>
      
      {/* Playful Scroll Down Indicator - Simplified */}
      <div className="scroll-indicator z-20">
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-8 sm:h-8 md:w-10 md:h-10">
          <circle cx="20" cy="20" r="18" stroke="#8B5CF6" strokeWidth="3" fill="none" />
          <path d="M20 13V27" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
          <path d="M15 22L20 27L25 22" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 