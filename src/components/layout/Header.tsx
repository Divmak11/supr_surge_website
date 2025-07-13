"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Sparkles } from "lucide-react";
import Logo from "../ui/Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navigationItems = [
    { name: "Home", href: "#", emoji: "🏠" },
    { name: "About Us", href: "#about", emoji: "👥" },
    { name: "Services", href: "#services", emoji: "🚀" },
    { name: "Portfolio", href: "#portfolio", emoji: "🎨" },
    { name: "Contact", href: "#contact", emoji: "💬" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      // Home link - scroll to hero section
      const element = document.querySelector("#hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href !== "#") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-primary-purple/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer min-h-[44px] min-w-[44px] touch-target"
              onClick={() => handleNavClick("#")}
            >
              <Logo />
              <span className="font-extrabold text-xs sm:text-sm md:text-lg lg:text-2xl text-primary-purple">
                Bread n Buttr
              </span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="hidden sm:block"
              >
                <Zap className="w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 text-accent-green" />
              </motion.div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="relative text-neutral-dark hover:text-primary-purple font-semibold transition-colors duration-200 min-h-[44px] min-w-[44px] touch-target"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="flex items-center space-x-2 text-sm xl:text-base">
                    <span>{item.name}</span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: hoveredItem === item.name ? 1 : 0,
                        scale: hoveredItem === item.name ? 1 : 0,
                      }}
                      transition={{ type: "spring", bounce: 0.6 }}
                    >
                      {item.emoji}
                    </motion.span>
                  </span>
                  {hoveredItem === item.name && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-purple to-accent-green rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* CTA Button - Show on mobile but smaller */}
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#contact")}
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-purple to-highlight-pink text-white px-2 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-full font-bold hover:shadow-lg transition-all duration-200 min-h-[44px] touch-target text-xs sm:text-sm lg:text-base"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden xl:inline">Let&apos;s Create Magic</span>
              <span className="xl:hidden">Get Started</span>
            </motion.button>

            {/* Mobile Menu Button - Hidden on desktop */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 sm:p-3 rounded-lg bg-primary-purple/10 hover:bg-primary-purple/20 transition-colors min-h-[44px] min-w-[44px] touch-target mobile-menu-button"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-primary-purple" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-primary-purple" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.1 }}
              className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/98 backdrop-blur-lg shadow-2xl mobile-menu"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-primary-purple/10">
                  <div className="flex items-center space-x-2">
                    <Logo />
                    <span className="font-extrabold text-lg sm:text-xl text-primary-purple">
                      Bread n Buttr
                    </span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-primary-purple/10 hover:bg-primary-purple/20 transition-colors min-h-[44px] min-w-[44px] touch-target"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-primary-purple" />
                  </motion.button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="flex-1 p-4 sm:p-6">
                  <nav className="space-y-2 sm:space-y-3">
                    {navigationItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 sm:space-x-4 text-neutral-dark hover:text-primary-purple font-semibold text-base sm:text-lg transition-colors duration-200 w-full text-left p-3 sm:p-4 rounded-xl hover:bg-primary-purple/5 min-h-[44px] touch-target"
                      >
                        <span className="text-xl sm:text-2xl">{item.emoji}</span>
                        <span>{item.name}</span>
                      </motion.button>
                    ))}
                  </nav>
                </div>

                {/* Mobile CTA */}
                <div className="p-4 sm:p-6 border-t border-primary-purple/10">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => handleNavClick("#contact")}
                    className="w-full bg-gradient-to-r from-primary-purple to-highlight-pink text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center justify-center space-x-2 min-h-[44px] touch-target"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Let&apos;s Create Magic</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 