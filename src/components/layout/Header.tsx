"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../ui/Logo";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="absolute top-0 left-0 right-0 z-50 pointer-events-auto"
            style={{
                background: "radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f14 50%, #000000 100%)",
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center h-20 md:h-24">
                    {/* Animated Logo Container */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer"
                        onClick={() => {
                            const element = document.querySelector("#hero");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        <Logo />
                    </motion.div>
                </div>
            </div>

            {/* Subtle bottom border on scroll */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isScrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.header>
    );
};

export default Header;
