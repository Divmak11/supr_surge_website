"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart, Users, Zap, Award, Target, TrendingUp } from "lucide-react";
import dynamic from "next/dynamic";

const LiveCounter = dynamic(() => import("../ui/LiveCounter"), {
  ssr: false,
});

const metrics = [
  {
    icon: TrendingUp,
    metric: 150,
    label: "Campaigns Launched",
    description: "Viral campaigns across all platforms",
    emoji: "🚀"
  },
  {
    icon: Users,
    metric: 99,
    label: "Happy Clients",
    description: "Brands we've made legendary",
    emoji: "😍"
  },
  {
    icon: Zap,
    metric: 3.4,
    label: "Avg. Engagement Uplift",
    suffix: "x",
    description: "Higher than industry average",
    emoji: "⚡"
  },
  {
    icon: Award,
    metric: 12,
    label: "Industry Awards",
    description: "Recognition for viral creativity",
    emoji: "🏆"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring" as const,
      bounce: 0.4,
    },
  },
};

const MetricsSection = () => {
  return (
    <section id="metrics" className="relative py-24 bg-neutral-light overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-10 -z-10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          📊
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/3 right-20 text-5xl opacity-20"
        >
          📈
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-1/4 text-4xl opacity-20"
        >
          🎯
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-dark mb-6">
            Our Track Record{" "}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block text-primary-purple"
            >
              📊
            </motion.span>
          </h2>
          <p className="text-xl text-neutral-medium max-w-3xl mx-auto leading-relaxed">
            Numbers that speak louder than memes. Here's the proof that our creative chaos actually works.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              {/* Enhanced Metric Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border-4 border-dashed border-primary-purple/20 hover:border-primary-purple/60 transition-all duration-300 text-center group-hover:shadow-2xl">
                {/* Floating Emoji */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5 
                  }}
                  className="absolute -top-4 right-4 text-3xl bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-accent-green"
                >
                  {item.emoji}
                </motion.div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-accent-green rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Metric Number */}
                <div className="mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, type: "spring", bounce: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-neutral-dark"
                  >
                    <LiveCounter from={0} to={item.metric} suffix={item.suffix} />
                  </motion.div>
                  <p className="text-lg font-semibold text-neutral-dark mt-2">
                    {item.label}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-medium group-hover:text-neutral-dark transition-colors duration-300">
                  {item.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-medium mb-6">
            Ready to add your success story to these numbers?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-purple to-highlight-pink text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            Let's Break Some Records! 🎯
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsSection; 