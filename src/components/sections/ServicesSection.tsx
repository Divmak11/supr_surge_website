"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import { Lightbulb, Presentation, TrendingUp } from "lucide-react";
import dynamic from "next/dynamic";

const LiveCounter = dynamic(() => import("../ui/LiveCounter"), {
  ssr: false,
});

const services = [
  {
    icon: (
      <motion.div whileHover={{ rotate: 360 }}>
        <Lightbulb size={40} className="mb-4 text-primary-purple" />
      </motion.div>
    ),
    title: "Ideate & Strategize",
    description:
      "We start by decoding your brand’s voice and audience DNA—combining memetic trends with data-backed insights to craft a blueprint that’s both playful and precise.",
  },
  {
    icon: (
      <motion.div whileHover={{ rotate: 360 }}>
        <Presentation size={40} className="mb-4 text-primary-purple" />
      </motion.div>
    ),
    title: "Create & Amplify",
    description:
      "From scroll-stopping memes to influencer collabs, we roll out content on the ideal channels—powered by AI-driven curation and real-time campaign boosts.",
    badge: "AI-Powered",
  },
  {
    icon: (
      <motion.div whileHover={{ rotate: 360 }}>
        <TrendingUp size={40} className="mb-4 text-primary-purple" />
      </motion.div>
    ),
    title: "Analyze & Optimize",
    description:
      "We track every click, view and share—using custom dashboards and ML-powered insights to double down on winners and pivot from duds.",
    counter: {
      from: 0,
      to: 3.4,
      suffix: "x engagement",
    },
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                {service.icon}
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-neutral-medium">{service.description}</p>
                {service.badge && (
                  <span className="mt-4 inline-block bg-accent-green text-neutral-dark text-xs font-semibold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                {service.counter && (
                  <div className="mt-4 text-lg font-bold">
                    <LiveCounter
                      from={service.counter.from}
                      to={service.counter.to}
                    />
                    <span className="ml-1">{service.counter.suffix}</span>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 