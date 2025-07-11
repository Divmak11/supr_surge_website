"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ShowcaseCard from "../ui/ShowcaseCard";

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

  const handleCardClick = (clickedIndex: number, clickedId: number) => {
    if (!swiper) return;

    if (swiper.realIndex === clickedIndex) {
      // Card is already in the center, toggle flip
      setFlippedCardId((current) => (current === clickedId ? null : clickedId));
    } else {
      // Card is not in the center, slide to it
      // Unflip any currently flipped card
      setFlippedCardId(null);
      
      // Set up a one-time event listener to flip the card *after* the slide transition ends
      const flipAfterSlide = () => {
        setFlippedCardId(clickedId);
        swiper.off("slideChangeTransitionEnd", flipAfterSlide);
      };
      swiper.on("slideChangeTransitionEnd", flipAfterSlide);
      
      swiper.slideToLoop(clickedIndex);
    }
  };
  
  // When the user drags the slider, unflip the card
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
    <section className="relative bg-neutral-dark py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-20 -z-10" />
      {/* Subtle Pattern Overlay (optional) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Example: SVG pattern or sparkles can be added here */}
      </div>
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="text-center font-montserrat text-4xl font-bold text-white fade-in-up">
          Our Top Works
        </h2>
        <p className="mt-4 text-center font-sans text-lg text-neutral-gray fade-in-up">
          Where creativity meets data, and pixels meet purpose.
        </p>
      </div>
      <div className="mt-12">
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
              <div className="glow-animate">
                <ShowcaseCard 
                  {...project} 
                  isFlipped={flippedCardId === project.id}
                  onCardClick={() => handleCardClick(index, project.id)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative mx-auto mt-8 flex w-64 items-center justify-center gap-8">
            <div className="swiper-button-prev !static !h-14 !w-14 rounded-full bg-primary-purple/50 !text-white transition-colors hover:bg-primary-purple flex items-center justify-center">
              <ChevronLeft className="h-8 w-8" />
            </div>
            <div className="swiper-pagination !static !w-auto"></div>
            <div className="swiper-button-next !static !h-14 !w-14 rounded-full bg-primary-purple/50 !text-white transition-colors hover:bg-primary-purple flex items-center justify-center">
              <ChevronRight className="h-8 w-8" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection; 