"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import Button from "../ui/Button";
import dynamic from "next/dynamic";
import Image from "next/image";

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
  { src: "/globe.svg", alt: "Globe Sticker", style: "top-10 left-10 w-12 animate-float-slow" },
  { src: "/window.svg", alt: "Window Sticker", style: "top-1/2 left-4 w-10 animate-float-medium" },
  { src: "/file.svg", alt: "File Sticker", style: "bottom-10 right-10 w-12 animate-float-slow" },
  { src: "/next.svg", alt: "Next Sticker", style: "bottom-1/3 right-8 w-16 animate-float-medium" },
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
    <section ref={sectionRef} className="relative min-h-screen bg-white flex items-center justify-center p-8 overflow-hidden">
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
              className="text-5xl md:text-7xl font-extrabold text-primary-purple drop-shadow-lg flex items-center gap-4"
            >
              {greetings[greetIndex]}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main Content - Optimized with intersection observer */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full z-10">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: showGreeting ? 0 : 1, y: showGreeting ? 40 : 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.4 }}
            className="text-5xl md:text-6xl font-extrabold text-neutral-dark mb-4"
          >
            From{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={dynamicWords[wordIndex].word}
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1.1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
                className="inline-block text-primary-purple px-2 rounded-lg bg-primary-purple/10 shadow font-extrabold text-6xl md:text-7xl align-middle"
              >
                {dynamicWords[wordIndex].word} {dynamicWords[wordIndex].emoji}
              </motion.span>
            </AnimatePresence>{' '}
            to Mainstream —<br />Your Brand, Our Playground
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: showGreeting ? 0 : 1, y: showGreeting ? 40 : 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring', bounce: 0.3 }}
            className="mt-4 text-2xl text-neutral-medium font-semibold flex items-center gap-2"
          >
            Crafty digital campaigns that stop scrolls and spark conversations. <span className="text-2xl">🎯</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: showGreeting ? 0 : 1, scale: showGreeting ? 0.8 : 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex items-center gap-4"
          >
            <Button className="text-lg md:text-xl px-8 py-5 font-extrabold bg-primary-purple text-white rounded-full shadow-lg hover:bg-accent-green hover:text-primary-purple transition-all duration-200">
              Make Memes, Make Impact 🚀
            </Button>
            <a
              href="#"
              className="text-primary-purple/80 hover:text-primary-purple font-bold text-lg transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-primary-purple after:transition-all after:duration-200 hover:after:w-full"
            >
              See Our Viral Lab →
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: showGreeting ? 0 : 1, y: showGreeting ? 40 : 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring', bounce: 0.3 }}
          className="flex items-center justify-center"
        >
          <motion.div
            whileHover={{ rotate: isHovered ? [0, 8, -8, 0] : 0, scale: 1.08 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.5 }}
            onMouseEnter={handleIllustrationHover}
            onMouseLeave={handleIllustrationLeave}
            className="bg-white rounded-3xl border-4 border-primary-purple shadow-2xl p-2 md:p-4 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
            style={{ boxShadow: '0 8px 32px 0 rgba(139,92,246,0.15)' }}
          >
            <Image 
              src="/globe.svg" 
              alt="Meme Sticker" 
              width={220} 
              height={220} 
              priority
              className="w-40 h-40 md:w-56 md:h-56" 
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Playful Scroll Down Indicator - Simplified */}
      <div className="scroll-indicator z-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" stroke="#8B5CF6" strokeWidth="3" fill="none" />
          <path d="M20 13V27" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
          <path d="M15 22L20 27L25 22" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 