"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Zap, Lightbulb } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  emoji: string;
}

const faqs: FAQ[] = [
  {
    id: "1",
    question: "What makes your meme marketing different from traditional marketing?",
    answer: "We speak fluent internet! While traditional marketing talks AT people, we create content that people actually want to share. Our campaigns become part of the cultural conversation, not interruptions to it. We turn brands into memes, and memes into movements. 🚀",
    emoji: "🎯"
  },
  {
    id: "2",
    question: "How do you ensure our brand doesn't look unprofessional with meme marketing?",
    answer: "Great question! We master the art of being professionally playful. Our memes are strategic, on-brand, and culturally relevant. We help you join conversations authentically, not force jokes that don't land. Think Wendy's Twitter, not your dad trying to be cool. 😎",
    emoji: "✨"
  },
  {
    id: "3",
    question: "What's your process for creating viral content?",
    answer: "Viral content isn't luck – it's science! We analyze trends, study your audience, and create content that's perfectly timed and targeted. Our 3-step process: 1) Cultural Intelligence (what's trending), 2) Brand Translation (how you fit in), 3) Strategic Distribution (getting it seen). 📈",
    emoji: "🔬"
  },
  {
    id: "4",
    question: "How quickly can you create and deploy campaigns?",
    answer: "Speed is our superpower! For trend-jacking and reactive content, we can go from idea to live in under 2 hours. For strategic campaigns, we typically need 1-2 weeks for research, creation, and optimization. When the internet moves fast, so do we! ⚡",
    emoji: "⏰"
  },
  {
    id: "5",
    question: "What ROI can we expect from meme marketing?",
    answer: "Our clients typically see 3-5x higher engagement rates and 40-60% lower cost-per-impression compared to traditional ads. More importantly, meme marketing builds genuine brand affinity. People don't just buy from you – they become fans who spread your message organically. 💰",
    emoji: "📊"
  },
  {
    id: "6",
    question: "Do you work with B2B companies or just B2C?",
    answer: "We work with both! B2B doesn't have to be boring. We've helped SaaS companies, consulting firms, and even accounting firms go viral. The secret? Finding the human side of business and making it relatable. Even the most serious industries have inside jokes and pain points we can tap into. 🤝",
    emoji: "🏢"
  },
  {
    id: "7",
    question: "What if a meme campaign backfires or gets negative attention?",
    answer: "We have crisis management protocols and always pre-test content with diverse focus groups. But if something does go sideways, we have a 24/7 response team ready to pivot, apologize authentically, or lean into the moment strategically. Sometimes 'failures' become our biggest wins! 🛡️",
    emoji: "🚨"
  },
  {
    id: "8",
    question: "How do you stay on top of constantly changing internet trends?",
    answer: "Our team is always online (probably too much, tbh). We have trend-monitoring systems, cultural intelligence tools, and a network of Gen Z advisors who keep us plugged into what's next. We don't just follow trends – we spot them before they peak. 🌊",
    emoji: "🔮"
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
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-5xl sm:text-6xl md:text-8xl animate-float-slow">❓</div>
        <div className="absolute top-1/4 right-10 text-4xl sm:text-5xl md:text-6xl animate-float-medium">💡</div>
        <div className="absolute bottom-1/3 left-10 text-5xl sm:text-6xl md:text-7xl animate-float-slow">🤔</div>
        <div className="absolute bottom-20 right-1/4 text-3xl sm:text-4xl md:text-5xl animate-float-medium">💭</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-4 sm:mb-6"
          >
            <HelpCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-accent-green" />
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6">
            Got Questions?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-highlight-pink">
              We've Got Answers!
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray max-w-3xl mx-auto">
            Everything you wanted to know about turning your brand into internet gold 🏆
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300"
            >
              <motion.button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-3 sm:p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200 min-h-[44px] touch-target"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                  <motion.span
                    animate={openItems.includes(faq.id) ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl"
                  >
                    {faq.emoji}
                  </motion.span>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight">
                    {faq.question}
                  </h3>
                </div>
                
                <motion.div
                  animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-2 sm:ml-3 md:ml-4"
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent-green" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openItems.includes(faq.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 border-l-4 border-accent-green"
                      >
                        <p className="text-xs sm:text-sm md:text-base text-neutral-gray leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-primary-purple/20 to-accent-green/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 backdrop-blur-lg">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-3 sm:mb-4"
            >
              <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-highlight-pink" />
            </motion.div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3 sm:mb-4">
              Still Have Questions?
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg text-neutral-gray mb-4 sm:mb-6">
              Let's hop on a call and discuss how we can make your brand the talk of the internet! 📞
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-green to-highlight-pink text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-lg transition-all duration-300 min-h-[44px] touch-target"
            >
              <span className="flex items-center space-x-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book a Free Strategy Call</span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQsSection;