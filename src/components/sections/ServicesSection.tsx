"use client";
import React from "react";
import { motion, useMotionTemplate, useMotionValue, MotionValue } from "framer-motion";

const services = [
  { title: "Meme Marketing", emoji: "😂", color: "#FFFF00", desc: "Viral content that spreads like wildfire", accent: "from-neutral-900 to-yellow-900/20" },
  { title: "Influencer Marketing", emoji: "🌟", color: "#FAFF00", desc: "Connect with voices that matter", accent: "from-neutral-900 to-yellow-800/20" },
  { title: "Rating & Reviews", emoji: "⭐", color: "#FFFF00", desc: "Build trust through social proof", accent: "from-neutral-900 to-yellow-900/20" },
  { title: "PR Activity", emoji: "📰", color: "#FAFF00", desc: "Get featured in top publications", accent: "from-neutral-900 to-yellow-800/20" },
  { title: "Quora/Reddit Marketing", emoji: "💬", color: "#FFFF00", desc: "Community-driven brand presence", accent: "from-neutral-900 to-yellow-900/20" },
  { title: "Snapchat Marketing", emoji: "👻", color: "#FAFF00", desc: "Reach Gen-Z where they live", accent: "from-neutral-900 to-yellow-800/20" },
  { title: "Youtube Marketing", emoji: "▶️", color: "#FFFF00", desc: "Video content that converts", accent: "from-neutral-900 to-yellow-900/20" },
  { title: "Performance Marketing", emoji: "📈", color: "#FAFF00", desc: "Data-driven growth strategies", accent: "from-neutral-900 to-yellow-800/20" },
  { title: "Social Media Management", emoji: "📱", color: "#FFFF00", desc: "Your brand, always on point", accent: "from-neutral-900 to-yellow-900/20" },
];

const ServiceCard = ({ service, mouseX, mouseY }: { service: typeof services[0], mouseX: MotionValue<number>, mouseY: MotionValue<number> }) => {
  return (
    <div
      className="group relative rounded-3xl cursor-pointer"
    >
      {/* Spotlight Border Effect */}
      <motion.div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${service.color}40,
              transparent 80%
            )
          `,
        }}
      />

      {/* Main Card Content */}
      <div className="relative h-full bg-neutral-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 overflow-hidden transition-all duration-300 group-hover:shadow-[#FFFF00]/10 group-hover:shadow-2xl group-hover:border-[#FFFF00]/30">

        {/* Subtle Pastel Gradient Reveal on Hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.accent}`}
        />

        <div className="relative z-10">
          {/* Header with Emoji */}
          <div className="flex items-start justify-between mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-white/10 bg-neutral-800 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            >
              {service.emoji}
            </div>

            {/* Arrow Icon */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              style={{ backgroundColor: `${service.color}20` }}
            >
              <span className="text-sm font-bold" style={{ color: service.color }}>↗</span>
            </div>
          </div>

          {/* Text Content */}
          <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#FFFF00] transition-colors">
            {service.title}
          </h3>

          <p className="text-neutral-400 text-sm leading-relaxed font-medium transition-colors group-hover:text-neutral-300">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden bg-black"
    >
      {/* Ambient Pastel Aurora Background + Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Very subtle moving blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FFFF00]/5 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[0%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px] animate-float-medium" />
        <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-[#FAFF00]/5 rounded-full blur-[80px] animate-float" />

        {/* Crisp Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `radial-gradient(#FFFF00 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />

        {/* Floating Geometric Shapes - Professional & Abstract */}
        {/* Circles */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[8%] w-16 h-16 rounded-full border-2 border-[#FFFF00]/20"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-32 right-[12%] w-12 h-12 rounded-full bg-[#FFFF00]/10"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[15%] left-[75%] w-10 h-10 rounded-full border-2 border-white/10"
        />

        {/* Squares */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute top-[35%] left-[5%] w-14 h-14 border-2 border-[#FFFF00]/20 rounded-sm"
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[40%] right-[8%] w-16 h-16 bg-white/5 rounded-lg"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, 60, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[45%] left-[85%] w-12 h-12 border-2 border-[#FAFF00]/10"
        />

        {/* Triangles (using CSS clip-path) */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 120, 0],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-[20%] left-[15%] w-14 h-14 bg-gradient-to-br from-[#FFFF00]/10 to-transparent"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />

        <motion.div
          animate={{
            y: [0, 22, 0],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute bottom-[25%] right-[20%] w-16 h-16 border-2 border-white/5"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />

        <motion.div
          animate={{
            y: [0, -28, 0],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[15%] left-[65%] w-12 h-12 bg-gradient-to-tr from-[#FFFF00]/5 to-transparent"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />

        {/* Additional Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[25%] right-[25%] w-12 h-12 border-2 border-[#FFFF00]/10 rounded-lg"
        />

        <motion.div
          animate={{
            rotate: [0, -360],
            y: [0, 15, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[35%] left-[35%] w-8 h-8 border-2 border-white/5 rounded-full"
        />

        <motion.div
          animate={{
            rotate: [0, 180, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] left-[12%] w-10 h-10 bg-gradient-to-br from-[#FFFF00]/5 to-white/5 rounded-lg backdrop-blur-sm"
        />

        {/* Small Accent Dots */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[45%] w-2 h-2 bg-[#FFFF00]/20 rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[40%] right-[30%] w-3 h-3 bg-white/10 rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[55%] right-[15%] w-2 h-2 bg-[#FFFF00]/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Clean & Sharp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block mb-6">
            <span className="px-5 py-2 rounded-full bg-[#FFFF00] text-black font-bold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFF00] via-[#FAFF00] to-white">
              Bring to the Table
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            A full arsenal of digital marketing services to make your brand unforgettable
          </p>
        </motion.div>

        {/* Services Grid with Spotlight Interaction */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto group"
          onMouseMove={handleMouseMove}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
        </div>

        {/* CTA - Minimalist & Light */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 rounded-full bg-[#FFFF00] text-black font-bold text-lg shadow-[#FFFF00]/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
          >
            <span>Let&apos;s Build Your Strategy</span>
            <span className="w-8 h-8 rounded-full bg-black text-[#FFFF00] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;