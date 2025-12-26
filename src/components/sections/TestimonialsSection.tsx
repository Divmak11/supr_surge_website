"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
    accentColor: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Marketing Director",
        company: "TechStart India",
        content: "Brand & Butter transformed our digital presence completely. Their meme marketing strategy generated 5x more engagement than our traditional campaigns. Absolutely brilliant team!",
        rating: 5,
        avatar: "RS",
        accentColor: "#FF4D8C",
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "Founder & CEO",
        company: "StyleVerse",
        content: "Working with them felt like having an in-house creative team. They understood our brand voice perfectly and delivered content that our audience truly resonated with.",
        rating: 5,
        avatar: "PP",
        accentColor: "#8B5CF6",
    },
    {
        id: 3,
        name: "Arjun Menon",
        role: "Head of Growth",
        company: "FinFlow",
        content: "The ROI we achieved was incredible. Our influencer collaboration campaign reached 10M+ people in just 2 weeks. They know how to make content go viral!",
        rating: 5,
        avatar: "AM",
        accentColor: "#22C55E",
    },
    {
        id: 4,
        name: "Sneha Reddy",
        role: "Brand Manager",
        company: "EcoLife Products",
        content: "Their attention to detail and deep understanding of social trends is unmatched. Every campaign they delivered exceeded our expectations. Highly recommended!",
        rating: 5,
        avatar: "SR",
        accentColor: "#FFD700",
    },
    {
        id: 5,
        name: "Vikram Singh",
        role: "Co-Founder",
        company: "GameZone Studios",
        content: "Best decision we made for our product launch. The meme-driven approach they suggested was perfect for our Gen-Z audience. 200K+ app downloads in the first month!",
        rating: 5,
        avatar: "VS",
        accentColor: "#00D4FF",
    },
    {
        id: 6,
        name: "Ananya Kapoor",
        role: "Digital Marketing Lead",
        company: "FoodieHub",
        content: "They don't just create content; they create conversations. Our social media engagement increased by 400% after partnering with Brand & Butter. Simply amazing!",
        rating: 5,
        avatar: "AK",
        accentColor: "#FF6B9D",
    },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
        >
            {/* Card Container */}
            <div
                className="relative h-full p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-500 group-hover:translate-y-[-4px]"
                style={{
                    background: 'linear-gradient(145deg, rgba(26, 26, 46, 0.9) 0%, rgba(15, 15, 32, 0.95) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
            >
                {/* Accent Gradient Overlay */}
                <div
                    className="absolute top-0 left-0 w-full h-1 opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{
                        background: `linear-gradient(90deg, ${testimonial.accentColor}, ${testimonial.accentColor}88, transparent)`,
                    }}
                />

                {/* Corner Glow */}
                <div
                    className="absolute top-0 left-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{
                        background: `radial-gradient(circle at 0% 0%, ${testimonial.accentColor}, transparent 70%)`,
                    }}
                />

                {/* Quote Icon */}
                <div className="relative mb-4">
                    <Quote
                        className="w-8 h-8 sm:w-10 sm:h-10 opacity-30 group-hover:opacity-50 transition-opacity"
                        style={{ color: testimonial.accentColor }}
                    />
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all">
                    &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Star
                                className="w-4 h-4 fill-current"
                                style={{ color: '#FFD700' }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {/* Avatar */}
                    <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base"
                        style={{
                            background: `linear-gradient(135deg, ${testimonial.accentColor}, ${testimonial.accentColor}AA)`,
                            boxShadow: `0 4px 15px ${testimonial.accentColor}40`,
                        }}
                    >
                        {testimonial.avatar}
                    </div>

                    {/* Name & Role */}
                    <div>
                        <h4 className="text-white font-semibold text-sm sm:text-base">
                            {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400">
                            {testimonial.role} • <span style={{ color: testimonial.accentColor }}>{testimonial.company}</span>
                        </p>
                    </div>
                </div>

                {/* Decorative Element */}
                <motion.div
                    className="absolute bottom-4 right-4 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity"
                    style={{
                        background: `radial-gradient(circle, ${testimonial.accentColor}, transparent)`,
                    }}
                />
            </div>
        </motion.div>
    );
};

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mobile carousel navigation
    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Intersection observer for visibility
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
        <section
            ref={sectionRef}
            id="testimonials"
            className="relative bg-gradient-to-b from-[#0f0f14] via-[#12121a] to-[#0f0f14] py-16 sm:py-20 md:py-28 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Floating Orbs */}
                <motion.div
                    className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-10"
                    style={{
                        background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
                        top: '5%',
                        right: '-10%',
                    }}
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-10"
                    style={{
                        background: 'radial-gradient(circle, #FF4D8C 0%, transparent 70%)',
                        bottom: '10%',
                        left: '-5%',
                    }}
                    animate={{
                        x: [0, 25, 0],
                        y: [0, -15, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Subtle Grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <span className="text-lg">💬</span>
                        <span className="text-sm text-neutral-gray font-medium">Client Love</span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        What Our{" "}
                        <span className="bg-gradient-to-r from-highlight-pink via-primary-purple to-accent-green bg-clip-text text-transparent">
                            Partners
                        </span>{" "}
                        Say
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-neutral-gray max-w-2xl mx-auto">
                        Real stories from brands that achieved extraordinary results with our creative strategies.
                    </p>
                </motion.div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden relative">
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${activeIndex * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                                    <TestimonialCard testimonial={testimonial} index={index} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>

                        {/* Dots Indicator */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                            ? 'w-6 bg-highlight-pink'
                                            : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl sm:text-3xl font-black text-accent-green">50+</span>
                            <span className="text-xs sm:text-sm text-neutral-gray">Happy Clients</span>
                        </div>
                        <div className="w-px h-8 bg-white/20 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="text-2xl sm:text-3xl font-black text-highlight-pink">100+</span>
                            <span className="text-xs sm:text-sm text-neutral-gray">Campaigns</span>
                        </div>
                        <div className="w-px h-8 bg-white/20 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="text-2xl sm:text-3xl font-black text-primary-purple">5★</span>
                            <span className="text-xs sm:text-sm text-neutral-gray">Average Rating</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
