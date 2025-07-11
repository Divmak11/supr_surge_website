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
    <section className="py-20 bg-neutral-light">
      <div className="mx-auto max-w-screen-lg px-4">
        <h2 className="text-center font-montserrat text-4xl font-bold text-neutral-dark">
          Our Track Record
        </h2>
        <p className="mt-4 text-center font-sans text-lg text-neutral-medium">
          Numbers that speak louder than memes.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => (
            <MetricCard
              key={index}
              icon={item.icon}
              metric={item.metric}
              label={item.label}
              suffix={item.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection; 