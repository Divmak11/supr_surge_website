"use client";

import { BarChart, Users, Zap, Award } from "lucide-react";
import MetricCard from "../ui/MetricCard";

const metrics = [
  {
    icon: BarChart,
    metric: 150,
    label: "Campaigns Launched",
  },
  {
    icon: Users,
    metric: 99,
    label: "Happy Clients",
  },
  {
    icon: Zap,
    metric: 3.4,
    label: "Avg. Engagement Uplift",
    suffix: "x",
  },
  {
    icon: Award,
    metric: 12,
    label: "Industry Awards",
  },
];

const MetricsSection = () => {
  return (
    <section className="relative py-20 bg-neutral-light overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-10 -z-10" />
      {/* Confetti Burst (shown when in view) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Example: SVG confetti or sparkles can be added here */}
      </div>
      <div className="mx-auto max-w-screen-lg px-4">
        <h2 className="text-center font-montserrat text-4xl font-bold text-neutral-dark fade-in-up">
          Our Track Record
        </h2>
        <p className="mt-4 text-center font-sans text-lg text-neutral-medium fade-in-up">
          Numbers that speak louder than memes.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => (
            <div className="bounce-in" key={index}>
              <MetricCard
                icon={item.icon}
                metric={item.metric}
                label={item.label}
                suffix={item.suffix}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection; 