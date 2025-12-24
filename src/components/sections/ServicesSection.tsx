"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Meme Marketing", emoji: "😂", color: "#FF6B6B" },
  { title: "Influencer Marketing", emoji: "🌟", color: "#4ECDC4" },
  { title: "Rating & Reviews", emoji: "⭐", color: "#45B7D1" },
  { title: "PR Activity", emoji: "📰", color: "#96CEB4" },
  { title: "Quora/Reddit Marketing", emoji: "💬", color: "#F1C40F" },
  { title: "Snapchat Influencer Marketing", emoji: "👻", color: "#FFEB3B" },
  { title: "Youtube Marketing", emoji: "▶️", color: "#FF5252" },
  { title: "Performance Marketing", emoji: "📈", color: "#9B59B6" },
  { title: "Social Media Management", emoji: "📱", color: "#3498DB" },
];

// Memoized service card for performance
const ServiceCard = React.memo(({
  service,
  index,
}: {
  service: { title: string; emoji: string; color: string };
  index: number;
}) => {
  const staggerOffset = useMemo(() => {
    const row = Math.floor(index / 3);
    const isEven = row % 2 === 0;
    return isEven ? (index % 3) * 30 : (2 - (index % 3)) * 30;
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group cursor-pointer"
      style={{ marginTop: staggerOffset }}
    >
      {/* Card */}
      <div
        className="relative bg-white rounded-3xl p-6 md:p-8 border-4 border-black overflow-hidden transition-shadow duration-300 group-hover:shadow-2xl"
        style={{
          boxShadow: `6px 6px 0px 0px ${service.color}`,
        }}
      >
        {/* Emoji */}
        <div className="text-4xl md:text-5xl mb-4">{service.emoji}</div>

        {/* Title */}
        <h3 className="font-black text-lg md:text-xl text-neutral-800 leading-tight">
          {service.title}
        </h3>

        {/* Color accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: service.color }}
        />
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FDFBF7 0%, #FFF8F0 50%, #FDFBF7 100%)",
      }}
    >
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
              Our Arsenal
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-800 mb-6">
            What do we{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
              offer
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Everything you need to break the internet and rebuild it in your brand&apos;s image 🚀
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
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