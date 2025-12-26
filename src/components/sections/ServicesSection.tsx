"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Meme Marketing", emoji: "😂", color: "#FF6B6B", desc: "Viral content that spreads like wildfire" },
  { title: "Influencer Marketing", emoji: "🌟", color: "#4ECDC4", desc: "Connect with voices that matter" },
  { title: "Rating & Reviews", emoji: "⭐", color: "#45B7D1", desc: "Build trust through social proof" },
  { title: "PR Activity", emoji: "📰", color: "#96CEB4", desc: "Get featured in top publications" },
  { title: "Quora/Reddit Marketing", emoji: "💬", color: "#F1C40F", desc: "Community-driven brand presence" },
  { title: "Snapchat Marketing", emoji: "👻", color: "#FFEB3B", desc: "Reach Gen-Z where they live" },
  { title: "Youtube Marketing", emoji: "▶️", color: "#FF5252", desc: "Video content that converts" },
  { title: "Performance Marketing", emoji: "📈", color: "#9B59B6", desc: "Data-driven growth strategies" },
  { title: "Social Media Management", emoji: "📱", color: "#3498DB", desc: "Your brand, always on point" },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group cursor-pointer h-full"
    >
      <div
        className="relative h-full bg-white rounded-2xl p-6 border-2 border-neutral-100 overflow-hidden transition-all duration-300 group-hover:border-transparent group-hover:shadow-2xl"
        style={{
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* Color Accent Top Bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: service.color }}
        />

        {/* Hover Glow Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
          style={{ backgroundColor: service.color }}
        />

        {/* Emoji Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${service.color}15`,
          }}
        >
          {service.emoji}
        </div>

        {/* Title */}
        <h3 className="text-lg font-black text-neutral-800 mb-2 leading-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-500 leading-relaxed">
          {service.desc}
        </p>

        {/* Arrow Icon */}
        <motion.div
          className="absolute bottom-5 right-5 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ backgroundColor: service.color }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white text-sm">→</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 50%, #FAFAFA 100%)",
      }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 rounded-full bg-black text-white font-bold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-800 mb-6">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
              Bring to the Table
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            A full arsenal of digital marketing services to make your brand unforgettable
          </p>
        </motion.div>

        {/* Services Grid - Full Width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-14 md:mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-5 rounded-full font-bold text-lg md:text-xl text-white"
            style={{
              background: "linear-gradient(135deg, #000000 0%, #333333 100%)",
              boxShadow: "4px 4px 0px 0px #8B5CF6",
            }}
          >
            <span className="flex items-center gap-3">
              Let&apos;s Build Your Strategy 🎯
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;