"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQ {
    id: string;
    question: string;
    answer: string;
    emoji: string;
}

const faqs: FAQ[] = [
    {
        id: "1",
        question: "What makes your meme marketing different?",
        answer: "We speak fluent internet! While traditional marketing talks AT people, we create content that people actually want to share. Our campaigns become part of the cultural conversation, not interruptions to it. 🚀",
        emoji: "🎯"
    },
    {
        id: "2",
        question: "Will our brand look unprofessional with meme marketing?",
        answer: "Not at all! We master the art of being professionally playful. Our memes are strategic, on-brand, and culturally relevant. Think Wendy's Twitter, not your dad trying to be cool. 😎",
        emoji: "✨"
    },
    {
        id: "3",
        question: "What's your process for creating viral content?",
        answer: "Viral content isn't luck – it's science! We analyze trends, study your audience, and create perfectly timed content. Our 3-step process: Cultural Intelligence, Brand Translation, Strategic Distribution. 📈",
        emoji: "🔬"
    },
    {
        id: "4",
        question: "How quickly can you deploy campaigns?",
        answer: "Speed is our superpower! For trend-jacking, we can go live in under 2 hours. For strategic campaigns, 1-2 weeks. When the internet moves fast, so do we! ⚡",
        emoji: "⏰"
    },
    {
        id: "5",
        question: "What ROI can we expect?",
        answer: "Our clients typically see 3-5x higher engagement and 40-60% lower cost-per-impression vs traditional ads. Plus, you build genuine brand fans who spread your message organically. 💰",
        emoji: "📊"
    },
    {
        id: "6",
        question: "What is Reddit Marketing?",
        answer: "Reddit Marketing is about engaging authentically with niche communities on Reddit. We help brands participate in relevant subreddits, create valuable content, and build genuine connections with highly engaged audiences. Reddit users hate obvious ads, so we focus on real value. 🤝",
        emoji: "👽"
    },
    {
        id: "7",
        question: "What if a campaign gets negative attention?",
        answer: "We have crisis protocols and pre-test all content. If something goes sideways, our 24/7 response team pivots fast. Sometimes 'failures' become our biggest wins! 🛡️",
        emoji: "🚨"
    },
    {
        id: "8",
        question: "How do you stay on top of trends?",
        answer: "Our team is always online (probably too much!). We have trend-monitoring tools, AI systems, and Gen Z advisors. We don't follow trends – we spot them before they peak. 🌊",
        emoji: "📱"
    }
];

const FAQsSection = () => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <section className="relative py-16 sm:py-20 md:py-24 bg-neutral-dark overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <HelpCircle className="w-12 h-12 text-accent-green mx-auto mb-4" />

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                        Got Questions?{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-highlight-pink">
                            We&apos;ve Got Answers!
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-neutral-gray max-w-2xl mx-auto">
                        Everything you wanted to know about turning your brand into internet gold 🏆
                    </p>
                </motion.div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-colors"
                        >
                            <button
                                onClick={() => toggleItem(faq.id)}
                                className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-xl">{faq.emoji}</span>
                                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                                        {faq.question}
                                    </h3>
                                </div>

                                <motion.div
                                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 ml-3"
                                >
                                    <ChevronDown className="w-5 h-5 text-accent-green" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openItems.includes(faq.id) && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 pb-4">
                                            <div className="bg-white/5 rounded-lg p-3 border-l-4 border-accent-green">
                                                <p className="text-sm text-neutral-gray leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQsSection;
