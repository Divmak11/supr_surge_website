"use client";
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Optimized Particle Field Canvas Component
const ParticleField = React.memo(() => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const particleCount = 40;
        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
        }> = [];

        const colors = ["#8B5CF6", "#EC4899", "#22C55E", "#F59E0B", "#3B82F6"];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        const animate = (currentTime: number) => {
            if (currentTime - lastTimeRef.current < 33) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }
            lastTimeRef.current = currentTime;

            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[j].x - particle.x;
                    const dy = particles[j].y - particle.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < 20000) {
                        const dist = Math.sqrt(distSq);
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 - dist / 500})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ background: "radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f14 50%, #000000 100%)" }}
        />
    );
});

ParticleField.displayName = "ParticleField";

// Dramatically Animated Text Component
const DramaticText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const characters = text.split("");
    return (
        <span className="inline-block whitespace-nowrap">
            {characters.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                        delay: delay + i * 0.04,
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
};

// Animated LOL Badge Component
const AnimatedLOLBadge = React.memo(() => (
    <motion.span
        className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-2 border-dashed border-white/30 align-middle"
        style={{
            background: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
            boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
        }}
        initial={{ scale: 0, rotate: -15, y: 20 }}
        animate={{ scale: 1, rotate: 0, y: 0 }}
        transition={{ delay: 0.6, type: "spring", bounce: 0.5 }}
    >
        LOL
        <span className="text-2xl sm:text-3xl animate-bounce">😂</span>
    </motion.span>
));

AnimatedLOLBadge.displayName = "AnimatedLOLBadge";

// Animated ROI Text Component
const AnimatedROI = React.memo(() => (
    <motion.span
        className="font-black text-transparent bg-clip-text animate-shimmer relative align-middle"
        style={{
            backgroundImage: "linear-gradient(90deg, #F59E0B, #FBBF24, #F59E0B, #FBBF24)",
            backgroundSize: "200% 100%",
        }}
        initial={{ opacity: 0, scale: 1.5, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
    >
        ROI
        <motion.div
            className="absolute -inset-2 bg-yellow-500/20 blur-xl rounded-full -z-10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
    </motion.span>
));

AnimatedROI.displayName = "AnimatedROI";

// Enhanced Animated Punchline Component
const AnimatedPunchline = React.memo(() => {
    return (
        <motion.span
            className="relative inline-block align-baseline"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "backOut" }}
        >
            {/* Main text with dramatic gradient */}
            <span
                className="relative font-bold bg-clip-text text-transparent italic"
                style={{
                    backgroundImage: "linear-gradient(135deg, #FF4D8C 0%, #FF6B9D 40%, #8B5CF6 100%)",
                    backgroundSize: "200% 100%",
                    WebkitTextStroke: "1px rgba(255,255,255,0.1)",
                }}
            >
                well timed punchline
            </span>

            {/* Sweep effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                initial={{ x: "-150%" }}
                animate={{ x: ["-150%", "150%"] }}
                transition={{ delay: 2.5, duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
            />

            {/* Glowing Underline */}
            <motion.span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full shadow-[0_0_15px_rgba(255,77,140,0.8)]"
                style={{
                    background: "linear-gradient(90deg, transparent, #FF4D8C, #8B5CF6, transparent)",
                }}
                initial={{ width: "0%", opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
            />
        </motion.span>
    );
});

AnimatedPunchline.displayName = "AnimatedPunchline";

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToContact = useCallback(() => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background */}
            {mounted && <ParticleField />}

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {/* Dramatic Content Container */}
            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 text-center px-4 max-w-6xl mx-auto"
            >
                {/* Main Headline with Stagger Animation */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                        <DramaticText text="We turn" delay={0.2} />
                        <AnimatedLOLBadge />
                        <DramaticText text="to" delay={0.8} />
                        <AnimatedROI />
                    </div>
                </h1>

                {/* Subtitle with revealing effect */}
                <motion.p
                    className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-12 font-medium tracking-wide flex flex-wrap justify-center items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <span className="opacity-60">because nothing sells faster than a</span>
                    <AnimatedPunchline />
                </motion.p>

                {/* Refined CTA Button */}
                <motion.button
                    onClick={scrollToContact}
                    className="group relative px-10 py-5 rounded-full font-black text-xl text-white overflow-hidden transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 2.5, type: "spring", bounce: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* Pulsing Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 group-hover:bg-gradient-to-l transition-all duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 blur-xl" />

                    <span className="relative z-10 flex items-center gap-3">
                        Let&apos;s Create Magic
                        <motion.span
                            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            ✨
                        </motion.span>
                    </span>
                </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-purple-500 to-transparent" />
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Scroll to explore</span>
            </motion.div>
        </section>
    );
};

export default HeroSection;
