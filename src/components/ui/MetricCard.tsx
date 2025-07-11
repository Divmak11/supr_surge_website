"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import dynamic from "next/dynamic";

const LiveCounter = dynamic(() => import("./LiveCounter"), {
  ssr: false,
});

interface MetricCardProps {
  icon: LucideIcon;
  metric: number;
  label: string;
  suffix?: string;
}

const MetricCard = ({ icon: Icon, metric, label, suffix }: MetricCardProps) => {
  return (
    <motion.div
      className="group rounded-2xl border-2 border-dashed border-neutral-gray p-6 text-center shadow-lg transition-all duration-300 hover:border-solid hover:border-accent-green hover:shadow-2xl"
      whileHover={{
        y: -10,
        rotate: [0, -2, 2, -2, 0],
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      <div className="flex justify-center">
        <Icon className="h-12 w-12 text-primary-purple transition-colors duration-300 group-hover:text-accent-green" />
      </div>
      <div className="mt-4 font-montserrat text-5xl font-bold text-neutral-dark">
        <LiveCounter from={0} to={metric} suffix={suffix} />
      </div>
      <p className="mt-2 font-sans text-lg text-neutral-medium">{label}</p>
    </motion.div>
  );
};

export default MetricCard; 