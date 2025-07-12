"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const brands: Brand[] = [
  { id: "1", name: "TechFlow", logo: "🚀", category: "Tech" },
  { id: "2", name: "FreshEats", logo: "🍔", category: "Food" },
  { id: "3", name: "StyleHub", logo: "👕", category: "Fashion" },
  { id: "4", name: "GameZone", logo: "🎮", category: "Gaming" },
  { id: "5", name: "HealthPlus", logo: "💪", category: "Health" },
  { id: "6", name: "EduTech", logo: "📚", category: "Education" },
  { id: "7", name: "TravelVibes", logo: "✈️", category: "Travel" },
  { id: "8", name: "FinanceFlow", logo: "💰", category: "Finance" },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow",
    content: "Supr Surge turned our boring product launches into viral sensations! Their meme game is absolutely unmatched. Our engagement went through the roof! 🚀",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    id: "2",
    name: "Mike Rodriguez",
    role: "Brand Manager",
    company: "FreshEats",
    content: "These guys GET it! They made our food brand relatable to Gen Z in ways we never imagined. The ROI speaks for itself - 300% increase in social engagement!",
    rating: 5,
    avatar: "👨‍🍳"
  },
  {
    id: "3",
    name: "Emily Johnson",
    role: "CEO",
    company: "StyleHub",
    content: "Working with Supr Surge was like having a cultural translator for the internet. They helped us speak fluent meme and our sales doubled! 💯",
    rating: 5,
    avatar: "👩‍💻"
  }
];

const categories = ["All", "Tech", "Food", "Fashion", "Gaming", "Health", "Education", "Travel", "Finance"];

const BrandsTestimonialsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const filteredBrands = activeFilter === "All" 
    ? brands 
    : brands.filter(brand => brand.category === activeFilter);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-neutral-dark overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-float-slow">⭐</div>
        <div className="absolute top-1/3 right-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-float-medium">💬</div>
        <div className="absolute bottom-20 left-1/4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-float-slow">🔥</div>
        <div className="absolute bottom-10 right-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-float-medium">💯</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            Brands We&apos;ve Made{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-highlight-pink">
              Legendary
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-gray max-w-3xl mx-auto">
            From startups to Fortune 500s, we&apos;ve helped brands become part of internet culture 🌟
          </p>
        </motion.div>

        {/* Brand Gallery */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base min-h-[44px] touch-target ${
                  activeFilter === category
                    ? "bg-primary-purple text-white shadow-lg"
                    : "bg-white/10 text-neutral-gray hover:bg-white/20 hover:text-white"
                }`}
              >
                <span className="flex items-center space-x-2">
                  {category === "All" && <Filter className="w-3 h-3 sm:w-4 sm:h-4" />}
                  <span>{category}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Brand Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 md:gap-6"
          >
            <AnimatePresence>
              {filteredBrands.map((brand, index) => (
                <motion.div
                  key={brand.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center aspect-square hover:bg-white/20 transition-all duration-300 cursor-pointer group min-h-[44px] touch-target"
                >
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {brand.logo}
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm text-center">
                    {brand.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white mb-3 sm:mb-4">
              What Our Clients Say
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-neutral-gray">
              Real stories from brands that went viral with us 📈
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                className="relative"
              >
                {/* Speech Bubble Card */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl relative">
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-[12px] sm:border-l-[16px] md:border-l-[24px] border-r-[12px] sm:border-r-[16px] md:border-r-[24px] border-t-[12px] sm:border-t-[16px] md:border-t-[24px] border-l-transparent border-r-transparent border-t-white"></div>
                  </div>

                  <div className="text-center">
                    {/* Quote Icon */}
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="inline-block mb-3 sm:mb-4 md:mb-6"
                    >
                      <Quote className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary-purple" />
                    </motion.div>

                    {/* Testimonial Content */}
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-neutral-dark font-medium mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                      {testimonials[currentTestimonial].content}
                    </p>

                    {/* Rating */}
                    <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-accent-green fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4">
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        {testimonials[currentTestimonial].avatar}
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-neutral-dark">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-medium">
                          {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-6 sm:mt-8 md:mt-12 space-x-2 sm:space-x-3 md:space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="bg-primary-purple/20 hover:bg-primary-purple text-white p-2 sm:p-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] touch-target"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>

              {/* Pagination dots */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] touch-target ${
                      index === currentTestimonial
                        ? "bg-primary-purple scale-125"
                        : "bg-neutral-gray hover:bg-white"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="bg-primary-purple/20 hover:bg-primary-purple text-white p-2 sm:p-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] touch-target"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsTestimonialsSection;