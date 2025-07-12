"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Heart,
  Zap,
  Sparkles
} from "lucide-react";
import Logo from "../ui/Logo";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Meme Marketing", href: "#" },
    { name: "Social Media Management", href: "#" },
    { name: "Content Creation", href: "#" },
    { name: "Influencer Partnerships", href: "#" },
    { name: "Crisis Management", href: "#" },
  ];

  const socialLinks = [
    { 
      name: "Twitter", 
      icon: Twitter, 
      href: "#", 
      color: "hover:text-blue-400",
      emoji: "🐦"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "#", 
      color: "hover:text-pink-400",
      emoji: "📸"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "#", 
      color: "hover:text-blue-600",
      emoji: "💼"
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      href: "#", 
      color: "hover:text-red-500",
      emoji: "📺"
    },
  ];

  return (
    <>
      <footer className="relative bg-neutral-dark text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-4xl sm:text-6xl animate-float-slow">🚀</div>
          <div className="absolute top-1/3 right-4 sm:right-20 text-3xl sm:text-4xl animate-float-medium">⭐</div>
          <div className="absolute bottom-8 sm:bottom-20 left-1/4 text-4xl sm:text-5xl animate-float-slow">💫</div>
          <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 text-4xl sm:text-6xl animate-float-medium">🎉</div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto py-12 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Logo />
                  <span className="text-xl sm:text-2xl font-extrabold text-primary-purple">
                    Supr Surge
                  </span>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="hidden sm:block"
                  >
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                  </motion.div>
                </div>
                
                <p className="text-sm sm:text-base text-neutral-gray leading-relaxed">
                  From memes to mainstream – we turn brands into internet legends. 
                  Ready to break the internet? Let's chat! 🌟
                </p>

                {/* Contact Info */}
                <div className="space-y-2 sm:space-y-3">
                  <motion.a
                    href="mailto:hello@suprsurge.com"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-2 sm:space-x-3 text-neutral-gray hover:text-accent-green transition-colors duration-200 touch-target text-sm sm:text-base"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>hello@suprsurge.com</span>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+1234567890"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-2 sm:space-x-3 text-neutral-gray hover:text-accent-green transition-colors duration-200 touch-target text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>+1 (234) 567-8900</span>
                  </motion.a>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-2 sm:space-x-3 text-neutral-gray text-sm sm:text-base"
                  >
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>San Francisco, CA</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
                  <span>Quick Links</span>
                  <span className="text-xl sm:text-2xl">🔗</span>
                </h3>
                
                <ul className="space-y-2 sm:space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href={link.href}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="text-sm sm:text-base text-neutral-gray hover:text-accent-green transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-accent-green after:transition-all after:duration-200 hover:after:w-full touch-target"
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
                  <span>Our Services</span>
                  <span className="text-xl sm:text-2xl">⚡</span>
                </h3>
                
                <ul className="space-y-2 sm:space-y-3">
                  {services.map((service, index) => (
                    <motion.li
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href={service.href}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="text-sm sm:text-base text-neutral-gray hover:text-accent-green transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-accent-green after:transition-all after:duration-200 hover:after:w-full touch-target"
                      >
                        {service.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Social & Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center space-x-2">
                  <span>Stay Connected</span>
                  <span className="text-xl sm:text-2xl">💫</span>
                </h3>
                
                <p className="text-xs sm:text-sm text-neutral-gray">
                  Follow us for daily memes, marketing tips, and behind-the-scenes chaos!
                </p>

                {/* Social Links */}
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 ${social.color} group touch-target`}
                      title={social.name}
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">
                        {social.emoji}
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h4 className="font-bold text-white mb-2 sm:mb-3 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-highlight-pink" />
                    <span className="text-sm sm:text-base">Meme Newsletter</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-gray mb-3 sm:mb-4">
                    Get weekly meme trends and marketing tips!
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-gray focus:outline-none focus:border-accent-green transition-colors duration-200 text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-accent-green text-white rounded-lg sm:rounded-xl font-semibold hover:bg-accent-green/80 transition-colors duration-200 touch-target text-sm"
                    >
                      Go!
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 bg-white/5 backdrop-blur-lg">
            <div className="container mx-auto py-4 sm:py-6">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-neutral-gray text-xs sm:text-sm flex items-center space-x-2 text-center sm:text-left"
                >
                  <span>© 2024 Supr Surge. Made with</span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-highlight-pink fill-current" />
                  </motion.span>
                  <span>and lots of memes</span>
                  <span className="text-sm sm:text-lg">😄</span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-gray"
                >
                  <a href="#" className="hover:text-accent-green transition-colors duration-200 touch-target">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-accent-green transition-colors duration-200 touch-target">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-accent-green transition-colors duration-200 touch-target">
                    Cookie Policy
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-purple to-accent-green text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group touch-target"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
        <span className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-neutral-dark text-white px-2 sm:px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Back to top! 🚀
        </span>
      </motion.button>
    </>
  );
};

export default Footer; 