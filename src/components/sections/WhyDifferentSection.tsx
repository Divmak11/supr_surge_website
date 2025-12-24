"use client";
import React from "react";
import { motion } from "framer-motion";

// Simple, engaging features
const features = [
    {
        emoji: "🔥",
        title: "We Speak Internet",
        description: "We live on TikTok, Reddit & Discord. Your brand will too.",
    },
    {
        emoji: "📈",
        title: "Data + Creativity",
        description: "We know what's trending BEFORE it trends. Magic? Nope, just smart AI.",
    },
    {
        emoji: "💰",
        title: "Real Results",
        description: "Every meme is backed by real KPIs. No fluff, just growth.",
    },
];

// Animated viral chart component
const ViralChart = React.memo(() => {
    return (
        <div className="relative w-full h-80 bg-white/5 rounded-2xl p-6 border border-white/10">
            {/* Chart Background Grid */}
            <div className="absolute inset-6 flex flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-white/10" />
                ))}
            </div>

            {/* Animated Line Chart */}
            <svg className="absolute inset-6 w-[calc(100%-48px)] h-[calc(100%-48px)]" viewBox="0 0 300 200" preserveAspectRatio="none">
                {/* Chart Path */}
                <motion.path
                    d="M0 180 Q 30 170 60 160 Q 90 150 120 130 Q 150 110 180 70 Q 210 40 240 25 Q 270 15 300 5"
                    fill="none"
                    stroke="url(#chartGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    viewport={{ once: true }}
                />

                {/* Gradient Definition */}
                <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22C55E" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                </defs>

                {/* Animated Pointer/Dot */}
                <motion.circle
                    cx="300"
                    cy="5"
                    r="8"
                    fill="#EC4899"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 2, duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                />
            </svg>

            {/* "Viral Trends" Dialog Box */}
            <motion.div
                className="absolute top-4 right-4 bg-accent-green text-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
            >
                <span className="flex items-center gap-2">
                    🚀 Viral Trends!
                </span>
                {/* Arrow pointer */}
                <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-accent-green" />
            </motion.div>

            {/* Y-Axis Labels */}
            <div className="absolute left-2 top-6 bottom-6 flex flex-col justify-between text-xs text-white/40">
                <span>🔥</span>
                <span>📈</span>
                <span>📊</span>
            </div>

            {/* X-Axis Label */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white/40">
                Your Content Journey →
            </div>
        </div>
    );
});

ViralChart.displayName = "ViralChart";

const WhyDifferentSection = () => {
    return (
        <section id="why-different" className="relative bg-neutral-dark text-neutral-light py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Section Header */}
                        <div className="mb-8">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1 rounded-full bg-accent-green/20 text-accent-green font-bold text-sm mb-4"
                            >
                                Why Us?
                            </motion.span>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
                                Why We&apos;re{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-highlight-pink">
                                    Different
                                </span>{" "}
                                🎯
                            </h2>

                            <p className="text-lg text-neutral-gray">
                                Others follow trends. We create them. Simple as that.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 8 }}
                                    className="flex items-start gap-4 rounded-xl bg-white/5 border border-white/10 p-4 cursor-pointer hover:bg-white/10 transition-colors"
                                >
                                    <span className="text-3xl">{feature.emoji}</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-neutral-gray">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Viral Chart Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-md">
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent-green/20 to-highlight-pink/20 rounded-3xl blur-2xl" />

                            {/* Chart */}
                            <ViralChart />

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-4 -left-4 bg-highlight-pink text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                            >
                                📊 Your Content
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyDifferentSection;
