"use client";

import { useState, useEffect } from "react";
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
  { src: "/file.svg", alt: "File Sticker", style: "top-8 left-8 w-10 animate-float-slow" },
  { src: "/globe.svg", alt: "Globe Sticker", style: "bottom-8 right-8 w-12 animate-float-medium" },
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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % headlineEmojis.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (clickedIndex: number, clickedId: number) => {
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
  };

  useEffect(() => {
    if (swiper) {
      swiper.on('sliderMove', () => setFlippedCardId(null));
    }
    return () => {
      if (swiper) {
        swiper.off('sliderMove', () => setFlippedCardId(null));
      }
    }
  }, [swiper]);

  return (
    <section id="portfolio" className="relative bg-neutral-dark py-24 overflow-hidden">
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
      
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Our Top Works{" "}
            <motion.span
              key={headlineIndex}
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
              className="inline-block text-accent-green"
            >
              {headlineEmojis[headlineIndex]}
            </motion.span>
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Where creativity meets data, and pixels meet purpose. Check out some campaigns that broke the internet.
          </p>
        </motion.div>

        {/* Showcase Carousel */}
        <div className="relative">
          <Swiper
            onSwiper={setSwiper}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="h-[500px] w-full"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id} className="!w-[400px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
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

          {/* Navigation Controls */}
          <div className="relative mx-auto mt-8 flex w-64 items-center justify-center gap-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="swiper-button-prev !static !h-14 !w-14 rounded-full bg-primary-purple/50 !text-white transition-colors hover:bg-primary-purple flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="h-8 w-8" />
            </motion.div>
            
            <div className="swiper-pagination !static !w-auto"></div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="swiper-button-next !static !h-14 !w-14 rounded-full bg-primary-purple/50 !text-white transition-colors hover:bg-primary-purple flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="h-8 w-8" />
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-gray mb-6">
            Ready to create your own viral moment?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-accent-green to-highlight-pink text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            Let's Make Magic! ✨
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection; 