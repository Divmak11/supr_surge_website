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
      className="min-h-screen bg-neutral-dark text-neutral-light flex items-center justify-center p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-extrabold"
          >
            From{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={dynamicWords[index]}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="text-highlight-pink inline-block"
              >
                {dynamicWords[index]}
              </motion.span>
            </AnimatePresence>{" "}
            to Mainstream — Your Brand, Our Playground
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-xl text-neutral-gray"
          >
            Crafty digital campaigns that stop scrolls and spark conversations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <Button>Make Memes, Make Impact</Button>
            <a
              href="#"
              className="text-neutral-light/60 hover:text-neutral-light transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-neutral-light after:transition-all after:duration-200 hover:after:w-full"
            >
              See Our Viral Lab →
            </a>
          </motion.div>
        </div>
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="flex items-center justify-center"
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
    </section>
  );
};

export default HeroSection; 