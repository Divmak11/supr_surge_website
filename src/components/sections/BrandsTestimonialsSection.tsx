"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BrandsTestimonialsSection = () => {
  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Brands we have worked with
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-purple to-accent-green mx-auto rounded-full"></div>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
          {[
            { name: "Samsung", src: "/brands/samsung_logo.svg", color: "#1428A0" },
            { name: "Flipkart", src: "/brands/flipkart_logo.svg", color: "#2874F0" },
            { name: "Dettol", src: "/brands/dettol_logo.png", color: "#007F3E" },
            { name: "Lenskart", src: "/brands/lenskart_logo.svg", color: "#000045" },
            { name: "POCO", src: "/brands/poco_logo.png", color: "#000000" },
            { name: "Rapido", src: "/brands/rapido_logo.svg", color: "#F8D021" },
            { name: "ALT BALAJI", src: "/brands/altbalaji_Logo.svg", color: "#000000", serif: true },
            { name: "PRIMEPLAY", src: "/brands/primeplay.png", color: "#E50914" },
            { name: "AMAZON", src: "/brands/amazon_logo.svg", color: "#FF9900" },
            { name: "NYKAA", src: "/brands/nykaa_logo.svg", color: "#E80071" },
            { name: "DOT & KEY", src: "/brands/dotnkey.png", color: "#333333" },
          ].map((brand: { name: string; src: string; color: string; serif?: boolean }, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3, delay: (index % 5) * 0.1 }}
              viewport={{ once: true }}
              className={`relative w-full aspect-square max-w-[140px] rounded-2xl shadow-lg hover:shadow-2xl flex items-center justify-center p-6 transition-all duration-300 border border-black/5 group overflow-hidden ${brand.name === "PRIMEPLAY" ? "bg-zinc-900" : "bg-white"
                }`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  width={200}
                  height={100}
                  className="object-contain w-full h-full transition-all duration-500 relative z-10"
                  onError={(e: any) => {
                    const img = e.target;
                    img.style.display = 'none';
                    const fallback = img.nextSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div
                  className="absolute inset-0 hidden items-center justify-center p-2 text-center"
                  style={{ display: 'none' }}
                >
                  <span
                    className={`font-black tracking-tight leading-none ${brand.serif ? "font-serif italic" : "font-sans"
                      }`}
                    style={{
                      color: brand.color,
                      fontSize: brand.name.length > 8 ? "0.8rem" : "1rem",
                    }}
                  >
                    {brand.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsTestimonialsSection;