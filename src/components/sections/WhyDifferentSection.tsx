"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bot, Network, PersonStanding, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";

const FeatureMap = dynamic(() => import("@/components/ui/FeatureMap"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 rounded-2xl bg-primary-purple/10">
      <p>Loading Map...</p>
    </div>
  ),
});

const features = [
  {
    icon: <Network className="w-8 h-8 text-accent-green" />,
    title: "Omni-Channel Amplification",
    description:
      "We’re masters across every major feed—from meme pages on Instagram to trend-driving TikTok hubs.",
  },
  {
    icon: <Bot className="w-8 h-8 text-accent-green" />,
    title: "AI-Driven Strategy",
    description:
      "Our proprietary AI analyzes trend velocity and audience sentiment, so your campaigns land at the perfect moment.",
    badge: "Proprietary Tech",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent-green" />,
    title: "Real-Time Optimization",
    description:
      "Live dashboards update every 5 seconds—letting us pivot on the fly for maximum ROI.",
  },
  {
    icon: <PersonStanding className="w-8 h-8 text-accent-green" />,
    title: "Creative Collective",
    description:
      "A hand-picked team of meme-lords, data nerds and creative strategists—all under one roof.",
  },
];

const WhyDifferentSection = () => {
  return (
    <section className="bg-neutral-dark text-neutral-light py-28">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold mb-4"
          >
            Not Just Another Agency—Your Strategic Meme & Data Powerhouse
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-gray mb-12"
          >
            We blend viral creativity with AI-driven insights, giving you the
            best of both worlds.
          </motion.p>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-neutral-gray mt-1">
                    {feature.description}
                  </p>
                  {feature.badge && (
                    <span className="mt-2 inline-block bg-highlight-pink text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Graphic Placeholder */}
        <div className="flex items-center justify-center h-full min-h-[400px]">
          <FeatureMap />
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection; 