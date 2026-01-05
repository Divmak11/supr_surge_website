"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Left Side: Logo & Brand Name */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
              <Logo />
              {/* Funky Brand Name Text */}
              <span
                className="text-2xl md:text-3xl font-black tracking-tight whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #FFFF00 0%, #FAFF00 50%, #FFFF00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Brand & Butter
              </span>
            </Link>

            <p className="text-neutral-gray text-sm max-w-xs leading-relaxed">
              Turning LOLs into ROI. <br />
              The meme marketing agency that gets it.
            </p>
          </div>

          {/* Right Side: Contact Details */}
          <div className="flex flex-col items-start md:items-end space-y-5 text-left md:text-right">

            {/* Address */}
            <div className="flex items-center gap-2 text-neutral-gray hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-[#FFFF00] flex-shrink-0" />
              <span className="text-sm">La Galaxia Newtech, Greater Noida West, UP</span>
            </div>

            {/* Email */}
            <a
              href="mailto:connect@brandandbutter.in"
              className="flex items-center gap-2 text-neutral-gray hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#FFFF00] flex-shrink-0" />
              <span className="text-sm">connect@brandandbutter.in</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_brandandbutter_?igsh=MTRkb3A2emZvdHE2aw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#FFFF00] hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm font-medium">Follow us on Instagram</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-neutral-gray">
            &copy; {new Date().getFullYear()} Brand & Butter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;