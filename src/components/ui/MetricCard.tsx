import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  icon: ReactNode;
  metric: ReactNode;
  label: string;
}

const MetricCard: FC<MetricCardProps> = ({ icon, metric, label }) => {
  return (
    <motion.div 
      className="relative p-8 bg-white rounded-2xl border-2 border-dashed border-neutral-gray shadow-lg text-center group transition-all duration-300 hover:border-primary-purple hover:border-solid"
      whileHover={{ y: -10, scale: 1.05 }}
    >
      <div className="flex justify-center items-center text-primary-purple mb-4">
        {icon}
      </div>
      <div className="text-5xl font-bold font-montserrat text-neutral-dark">
        {metric}
      </div>
      <p className="text-neutral-medium font-sans mt-2">{label}</p>
    </motion.div>
  );
};

export default MetricCard; 