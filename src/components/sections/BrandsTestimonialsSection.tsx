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
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 cursor-pointer">
          {[
            { name: "Samsung", src: "/brand_samsung.svg" },
            { name: "Amazon", src: "/brand_amazon.svg" },
            { name: "Flipkart", src: "/brand_flipkart.svg" },
            { name: "Lenskart", src: "/brand_lenskart.svg" },
            { name: "Dettol", src: "/brand_dettol.svg" },
          ].map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl shadow-lg hover:shadow-2xl flex items-center justify-center p-6 transition-all duration-300"
            >
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                width={120}
                height={60}
                className="object-contain w-full h-full p-2"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsTestimonialsSection;