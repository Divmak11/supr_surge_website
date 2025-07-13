"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Rocket, BarChart3 } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const LiveCounter = dynamic(() => import("../ui/LiveCounter"), {
  ssr: false,
});

const floatingStickers = [
  { src: "/window.svg", alt: "Window Sticker", style: "top-4 sm:top-8 left-4 sm:left-8 w-5 sm:w-6 md:w-8 lg:w-10 animate-float-slow" },
  { src: "/file.svg", alt: "File Sticker", style: "bottom-4 sm:bottom-8 right-4 sm:right-8 w-6 sm:w-8 md:w-10 lg:w-12 animate-float-medium" },
];

const headlineEmojis = ["💡", "🚀", "📈", "🎨", "🔥", "😂"];

const serviceCards = [
  {
    icon: Brain,
    emoji: "💡",
    color: "bg-[#F9FAFB] border-[#8B5CF6]",
    title: "Trend Intelligence & Strategy",
    description: "Deep‑dive cultural research meets AI‑powered forecast to pinpoint the next big thing.",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    color: "bg-[#F0F5FF] border-[#22C55E]",
    title: "Viral‑First Content Creation",
    description: "Memes, micro‑videos, AR filters—crafted for maximum shareability & branded impact.",
  },
  {
    icon: BarChart3,
    emoji: "📈",
    color: "bg-[#FFF7F0] border-[#EC4899]",
    title: "Seeding, Amplification & Optimization",
    description: "Hand‑picked creator networks + real‑time bidding pivot for ultimate ROI.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "spring" as const,
      bounce: 0.4,
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
    <section id="services" className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
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
      
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-neutral-dark mb-4 sm:mb-6">
            Our Three‑Phase Methodology
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-medium max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Our three-phase workflow turns brands into internet legends through strategic meme mastery and data-driven creativity.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {serviceCards.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotate: index === 0 ? -1 : index === 1 ? 0 : 1,
                transition: { duration: 0.3 }
              }}
              className={`relative rounded-2xl sm:rounded-3xl border-4 ${service.color} shadow-xl p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col text-center group cursor-pointer min-h-[44px] touch-target`}
            >


              {/* Icon */}
              <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary-purple" />
                  <motion.span
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5 
                    }}
                    className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-sm sm:text-base md:text-lg lg:text-2xl"
                  >
                    {service.emoji}
                  </motion.span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg md:text-xl font-extrabold mb-2 sm:mb-3 md:mb-4 text-neutral-dark">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-neutral-medium mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                {service.description}
              </p>



              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm sm:text-base md:text-lg text-neutral-medium mb-4 sm:mb-6 px-4 sm:px-0">
            Ready to see your brand become the talk of the internet?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-primary-purple to-accent-green text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-lg transition-all duration-300 min-h-[44px] touch-target"
          >
            Let&apos;s Craft Your Strategy! 🎯
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 