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
      className="group rounded-2xl border-2 border-dashed border-neutral-gray p-3 sm:p-4 md:p-6 text-center shadow-lg transition-all duration-300 hover:border-solid hover:border-accent-green hover:shadow-2xl min-h-[44px] touch-target"
      whileHover={{
        y: -10,
        rotate: [0, -2, 2, -2, 0],
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      <div className="flex justify-center">
        <Icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-primary-purple transition-colors duration-300 group-hover:text-accent-green" />
      </div>
      <div className="mt-2 sm:mt-3 md:mt-4 font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark">
        <LiveCounter from={0} to={metric} suffix={suffix} />
      </div>
      <p className="mt-1 sm:mt-2 font-sans text-xs sm:text-sm md:text-base lg:text-lg text-neutral-medium">{label}</p>
    </motion.div>
  );
};

export default MetricCard; 