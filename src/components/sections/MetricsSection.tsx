"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Globe } from "lucide-react";
import dynamic from "next/dynamic";

const LiveCounter = dynamic(() => import("../ui/LiveCounter"), {
    ssr: false,
});

const metrics = [
    {
        icon: TrendingUp,
        metric: 200,
        suffix: "+",
        label: "Viral Campaigns",
        description: "20M+ Impressions per Campaign Avg.",
        emoji: "🚀"
    },
    {
        icon: Users,
        metric: 100,
        suffix: "+",
        label: "Happy Brands",
        description: "Trusted by leading companies",
        emoji: "😍"
    },
    {
        icon: Zap,
        metric: 4.7,
        suffix: "x",
        label: "Avg. ROI",
        description: "Return on every rupee spent",
        emoji: "⚡"
    },
    {
        icon: Globe,
        metric: 500,
        suffix: "M+",
        label: "Meme User Base",
        description: "Exclusive reach through meme pages",
        emoji: "🌍"
    },
];

const MetricsSection = () => {
    return (
        <section id="metrics" className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                        Numbers That{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFF00] to-[#FAFF00]">
                            Don&apos;t Lie
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
                        Real results from real campaigns. Here&apos;s the proof that our creative chaos works.
                    </p>
                </motion.div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="group"
                        >
                            <div className="relative bg-neutral-900 rounded-2xl p-6 shadow-lg border-4 border-dashed border-[#FFFF00]/20 hover:border-[#FFFF00]/50 transition-all duration-300 text-center">
                                {/* Floating Emoji */}
                                <div className="absolute -top-3 right-4 text-2xl bg-neutral-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md border-2 border-[#FFFF00]">
                                    {item.emoji}
                                </div>

                                {/* Icon */}
                                <div className="flex justify-center mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFFF00] to-[#FAFF00] rounded-xl flex items-center justify-center shadow-lg">
                                        <item.icon className="w-7 h-7 text-black" />
                                    </div>
                                </div>

                                {/* Metric Number */}
                                <div className="mb-2">
                                    <div className="text-3xl sm:text-4xl font-black text-white">
                                        <LiveCounter from={0} to={item.metric} suffix={item.suffix} />
                                    </div>
                                    <p className="text-base font-bold text-[#FFFF00] mt-1">
                                        {item.label}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-neutral-400">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-base text-neutral-400 mb-4">
                        Ready to add your brand to these stats?
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const element = document.querySelector("#contact");
                            if (element) element.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-[#FFFF00] text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-[#FFFF00]/20"
                    >
                        Let&apos;s Break Some Records! 🏆
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default MetricsSection;
