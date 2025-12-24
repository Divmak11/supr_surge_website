"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
    "Hello",        // English
    "Namaste",      // Hindi
    "Bonjour",      // French
    "Hola",         // Spanish
    "Ciao",          // Italian
    "Kon'nichiwa",  // Japanese
    "As-salamu alaykum", // Arabic
];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === greetings.length) {
            setTimeout(onComplete, 500);
            return;
        }

        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, 250); // Speed of greeting changes

        return () => clearTimeout(timeout);
    }, [index, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]"
        >
            <div className="relative overflow-hidden h-20 sm:h-24 md:h-32 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {index < greetings.length && (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
                                {greetings[index]}
                            </h2>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full" />
            </div>
        </motion.div>
    );
};

export default Preloader;
