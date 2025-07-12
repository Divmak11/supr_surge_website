"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ShowcaseCard from "../ui/ShowcaseCard";
import Image from "next/image";

const floatingStickers = [
  { src: "/file.svg", alt: "File Sticker", style: "top-8 left-8 w-6 sm:w-8 md:w-10 animate-float-slow" },
  { src: "/globe.svg", alt: "Globe Sticker", style: "bottom-8 right-8 w-8 sm:w-10 md:w-12 animate-float-medium" },
];

const headlineEmojis = ["🎬", "🔥", "😂", "🚀", "🎉", "👑"];

const projects = [
  {
    id: 1,
    title: "Viral Meme Campaign",
    metric: "+20M Impressions",
    description: "Launched a multi-platform meme campaign that became a trending topic on Twitter.",
    imageUrl: "https://picsum.photos/seed/project1/800/900",
    platform: "Twitter, Instagram",
    keyResult: "20M+ Impressions",
  },
  {
    id: 2,
    title: "Influencer Collab",
    metric: "300% ROI",
    description: "Partnered with top-tier influencers to generate authentic, high-converting content.",
    imageUrl: "https://picsum.photos/seed/project2/800/900",
    platform: "YouTube",
    keyResult: "300% ROI on Ad Spend",
  },
  {
    id: 3,
    title: "AR Filter for Instagram",
    metric: "1M+ Uses",
    description: "Developed a branded AR filter that was used over a million times in the first week.",
    imageUrl: "https://picsum.photos/seed/project3/800/900",
    platform: "Instagram",
    keyResult: "1.2M Uses & Shares",
  },
  {
    id: 4,
    title: "TikTok Challenge",
    metric: "500K Submissions",
    description: "Created a viral TikTok challenge that drove massive user-generated content.",
    imageUrl: "https://picsum.photos/seed/project4/800/900",
    platform: "TikTok",
    keyResult: "500K+ Video Submissions",
  },
  {
    id: 5,
    title: "Data-Driven Content",
    metric: "+50% Engagement",
    description: "Used analytics to craft a content strategy that doubled user engagement.",
    imageUrl: "https://picsum.photos/seed/project5/800/900",
    platform: "Blog, Socials",
    keyResult: "53% Increase in Engagement",
  },
];

const ShowcaseSection = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Optimized headline animation with reduced frequency
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % headlineEmojis.length);
    }, 3000); // Increased from 1800ms to reduce CPU usage
    return () => clearInterval(interval);
  }, []);

  // Optimized card click handler
  const handleCardClick = useCallback((clickedIndex: number, clickedId: number) => {
    if (!swiper) return;

    if (swiper.realIndex === clickedIndex) {
      setFlippedCardId((current) => (current === clickedId ? null : clickedId));
    } else {
      setFlippedCardId(null);
      const flipAfterSlide = () => {
        setFlippedCardId(clickedId);
        swiper.off("slideChangeTransitionEnd", flipAfterSlide);
      };
      swiper.on("slideChangeTransitionEnd", flipAfterSlide);
      swiper.slideToLoop(clickedIndex);
    }
  }, [swiper]);

  // Optimized swiper event handling
  useEffect(() => {
    if (swiper) {
      const handleSliderMove = () => setFlippedCardId(null);
      swiper.on('sliderMove', handleSliderMove);
      return () => {
        swiper.off('sliderMove', handleSliderMove);
      };
    }
  }, [swiper]);

  // Intersection observer for performance
  const sectionRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(node);
    }
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="relative bg-neutral-dark py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Floating SVG Stickers - Optimized loading */}
      {floatingStickers.map((sticker, i) => (
        <Image
          key={i}
          src={sticker.src}
          alt={sticker.alt}
          width={48}
          height={48}
          priority={i === 0} // Only prioritize first sticker
          className={`pointer-events-none select-none opacity-60 absolute z-0 ${sticker.style}`}
        />
      ))}
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header - Optimized animations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6">
            Our Top Works{" "}
            <motion.span
              key={headlineIndex}
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
              className="inline-block text-accent-green"
            >
              {headlineEmojis[headlineIndex]}
            </motion.span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Where creativity meets data, and pixels meet purpose. Check out some campaigns that broke the internet.
          </p>
        </motion.div>

        {/* Showcase Carousel - Mobile-optimized Swiper config */}
        <div className="relative">
          <Swiper
            onSwiper={setSwiper}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.1}
            spaceBetween={15}
            breakpoints={{
              640: { slidesPerView: 1.3, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 30 },
              1024: { slidesPerView: 2.8, spaceBetween: 40 }
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 40,
              modifier: 1.2,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full"
            speed={500}
            autoplay={false}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id} className="!w-[260px] sm:!w-[300px] md:!w-[350px] lg:!w-[400px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  <ShowcaseCard 
                    {...project} 
                    isFlipped={flippedCardId === project.id}
                    onCardClick={() => handleCardClick(index, project.id)}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls - Mobile-optimized */}
          <div className="relative mx-auto mt-4 sm:mt-6 md:mt-8 flex w-40 sm:w-48 md:w-64 items-center justify-center gap-3 sm:gap-4 md:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="swiper-button-prev !static !h-10 !w-10 sm:!h-12 sm:!w-12 md:!h-14 md:!w-14 rounded-full bg-primary-purple/50 !text-white transition-colors hover:bg-primary-purple flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] touch-target"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
            </motion.div>
            
            <div className="swiper-pagination !static !w-auto"></div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="swiper-button-next !static !h-10 !w-10 sm:!h-12 sm:!w-12 md:!h-14 md:!w-14 rounded-full bg-primary-purple/50 !text-white transition-colors hover:bg-primary-purple flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px] touch-target"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA - Mobile-optimized */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm sm:text-base md:text-lg text-neutral-gray mb-4 sm:mb-6">
            Ready to create your own viral moment?
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-accent-green to-highlight-pink text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-lg transition-all duration-200 min-h-[44px] touch-target"
          >
            Let&apos;s Make Magic! ✨
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection; 