"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import { Lightbulb, Presentation, TrendingUp, Brain, Rocket, BarChart3 } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const LiveCounter = dynamic(() => import("../ui/LiveCounter"), {
  ssr: false,
});

const floatingStickers = [
  { src: "/window.svg", alt: "Window Sticker", style: "top-4 sm:top-8 left-4 sm:left-8 w-6 sm:w-8 md:w-10 animate-float-slow" },
  { src: "/file.svg", alt: "File Sticker", style: "bottom-4 sm:bottom-8 right-4 sm:right-8 w-8 sm:w-10 md:w-12 animate-float-medium" },
];

const headlineEmojis = ["💡", "🚀", "📈", "🎨", "🔥", "😂"];

const serviceCards = [
  {
    icon: Brain,
    emoji: "💡",
    color: "bg-[#F9FAFB] border-[#8B5CF6]",
    title: "Ideate & Strategize",
    description: "We decode your brand's voice and audience DNA—combining memetic trends with data-backed insights to craft a blueprint that's both playful and precise.",
    features: [
      "Cultural Intelligence Research",
      "Audience Persona Mapping",
      "Competitive Meme Analysis",
      "Strategic Content Planning"
    ]
  },
  {
    icon: Rocket,
    emoji: "🚀",
    color: "bg-[#F0F5FF] border-[#22C55E]",
    title: "Create & Amplify",
    description: "From scroll-stopping memes to influencer collabs, we roll out content on the ideal channels—powered by AI-driven curation and real-time campaign boosts.",
    badge: "AI-Powered",
    features: [
      "Viral Content Creation",
      "Multi-Platform Distribution",
      "Influencer Partnerships",
      "Real-Time Optimization"
    ]
  },
  {
    icon: BarChart3,
    emoji: "📈",
    color: "bg-[#FFF7F0] border-[#EC4899]",
    title: "Analyze & Optimize",
    description: "We track every click, view and share—using custom dashboards and ML-powered insights to double down on winners and pivot from duds.",
    counter: {
      from: 0,
      to: 3.4,
      suffix: "x engagement",
    },
    features: [
      "Performance Analytics",
      "A/B Testing",
      "Sentiment Analysis",
      "ROI Optimization"
    ]
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-dark mb-4 sm:mb-6">
            What We Do{" "}
            <motion.span
              key={headlineIndex}
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
              className="inline-block text-primary-purple"
            >
              {headlineEmojis[headlineIndex]}
            </motion.span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-medium max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Our three-phase workflow turns brands into internet legends through strategic meme mastery and data-driven creativity.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
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
              className={`relative rounded-2xl sm:rounded-3xl border-4 ${service.color} shadow-xl p-6 sm:p-8 flex flex-col text-center group cursor-pointer touch-target`}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-green text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                  <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-purple" />
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
                    className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-lg sm:text-2xl"
                  >
                    {service.emoji}
                  </motion.span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4 text-neutral-dark">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-neutral-medium mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-xs sm:text-sm text-neutral-dark"
                  >
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-purple rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span className="text-left">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Counter */}
              {service.counter && (
                <div className="mt-auto">
                  <div className="bg-white/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-highlight-pink/20">
                    <div className="text-lg sm:text-2xl font-extrabold text-highlight-pink">
                      <LiveCounter from={service.counter.from} to={service.counter.to} />
                      <span className="ml-1">{service.counter.suffix}</span>
                    </div>
                    <p className="text-xs text-neutral-medium mt-1">Average uplift</p>
                  </div>
                </div>
              )}

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
          <p className="text-base sm:text-lg text-neutral-medium mb-4 sm:mb-6 px-4 sm:px-0">
            Ready to see your brand become the talk of the internet?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-purple to-accent-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-lg transition-all duration-300 touch-target"
          >
            Let's Craft Your Strategy! 🎯
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 