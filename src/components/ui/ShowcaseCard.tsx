"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ShowcaseCardProps {
  id: number;
  title: string;
  metric: string;
  description: string;
  imageUrl: string;
  platform: string;
  keyResult: string;
  isFlipped: boolean;
  onCardClick: () => void;
}

const ShowcaseCard = ({
  title,
  metric,
  description,
  imageUrl,
  platform,
  keyResult,
  isFlipped,
  onCardClick,
}: ShowcaseCardProps) => {
  return (
    <div
      className="h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full [perspective:1000px] cursor-pointer min-h-[44px] touch-target"
      onClick={onCardClick}
    >
      <motion.div
        className="relative h-full w-full rounded-xl shadow-xl [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={450}
            className="h-full w-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-black/50 rounded-xl" />
          <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-6">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white font-montserrat">
              {title}
            </h3>
            <span className="mt-2 inline-block rounded-full bg-highlight-pink px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-white">
              {metric}
            </span>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-neutral-dark to-slate-800 p-3 sm:p-4 md:p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex h-full flex-col justify-between text-left">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white font-montserrat">
                {title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-gray font-sans">
                {description}
              </p>
            </div>
            <div className="w-full border-t border-neutral-medium/30 pt-2 sm:pt-3 md:pt-4">
              <div className="flex justify-between">
                <p className="font-sans text-xs sm:text-sm font-semibold text-neutral-gray">
                  Platform
                </p>
                <p className="font-sans text-xs sm:text-sm font-bold text-white">
                  {platform}
                </p>
              </div>
              <div className="mt-2 flex justify-between">
                <p className="font-sans text-xs sm:text-sm font-semibold text-neutral-gray">
                  Key Result
                </p>
                <p className="font-sans text-xs sm:text-sm font-bold text-accent-green">
                  {keyResult}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShowcaseCard; 