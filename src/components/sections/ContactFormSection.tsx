"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, User, Globe, Target, DollarSign, Zap, Sparkles, Heart } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  website: string;
  goals: string;
  budget: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  website?: string;
  goals?: string;
  budget?: string;
}

const dynamicPrompts = [
  "Ready to go viral?",
  "Want to break the internet?",
  "Need meme magic?",
  "Time to trend?",
  "Ready to be iconic?",
];

const budgetOptions = [
  { value: "5k-15k", label: "$5k - $15k", emoji: "💰" },
  { value: "15k-50k", label: "$15k - $50k", emoji: "💎" },
  { value: "50k-100k", label: "$50k - $100k", emoji: "🚀" },
  { value: "100k+", label: "$100k+", emoji: "🌟" },
];

const ContactFormSection = () => {
  const [promptIndex, setPromptIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    website: "",
    goals: "",
    budget: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Dynamic headline rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % dynamicPrompts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "What should we call you? 🤔";
    }

    if (!formData.email.trim()) {
      newErrors.email = "We need your email to send memes! 📧";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "That doesn't look like an email 🤨";
    }

    if (!formData.goals.trim()) {
      newErrors.goals = "Tell us your wildest dreams! ✨";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
        {/* Success Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-accent-green mx-auto" />
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-dark mb-4 sm:mb-6">
            You're In! 🎉
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-medium mb-6 sm:mb-8">
            Our meme masters will get back to you within 24 hours. Time to make magic happen! ✨
          </p>
          
          <div className="flex justify-center space-x-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }}>🚀</motion.span>
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>💫</motion.span>
            <motion.span animate={{ rotate: [0, -20, 20, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>🎯</motion.span>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-20"
        >
          💬
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/3 right-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl opacity-20"
        >
          🎨
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-1/4 text-xl sm:text-2xl md:text-3xl opacity-20"
        >
          📈
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Intro & Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-neutral-dark mb-4 sm:mb-6">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicPrompts[promptIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-highlight-pink"
                  >
                    {dynamicPrompts[promptIndex]}
                  </motion.span>
                </AnimatePresence>
                <br />
                <span className="text-neutral-dark">Let's Talk!</span>
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-medium leading-relaxed mb-6 sm:mb-8">
                Drop us a line and let's turn your brand into the next internet sensation. 
                From memes to mainstream – we've got the secret sauce! 🌶️
              </p>
            </div>

            {/* Interactive Illustration */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="relative bg-gradient-to-br from-primary-purple/10 to-accent-green/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-dashed border-primary-purple/30"
            >
              <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                >
                  🎯
                </motion.div>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-neutral-dark">
                  Your message = Our mission
                </p>
                <div className="flex justify-center space-x-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-highlight-pink" />
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent-green" />
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-purple" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-primary-purple/20"
          >
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Name Field */}
              <div>
                <label className="flex items-center space-x-2 text-sm sm:text-base md:text-lg font-semibold text-neutral-dark mb-2 sm:mb-3">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary-purple" />
                  <span>What's your name?</span>
                </label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your awesome name here..."
                  className={`w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 focus:outline-none min-h-[44px] ${
                    errors.name
                      ? "border-error-red bg-error-red/5"
                      : focusedField === "name"
                      ? "border-primary-purple bg-primary-purple/5"
                      : "border-neutral-gray bg-neutral-light"
                  }`}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error-red text-xs sm:text-sm mt-2"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="flex items-center space-x-2 text-sm sm:text-base md:text-lg font-semibold text-neutral-dark mb-2 sm:mb-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-purple" />
                  <span>Email address</span>
                </label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="your.email@awesome.com"
                  className={`w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 focus:outline-none min-h-[44px] ${
                    errors.email
                      ? "border-error-red bg-error-red/5"
                      : focusedField === "email"
                      ? "border-primary-purple bg-primary-purple/5"
                      : "border-neutral-gray bg-neutral-light"
                  }`}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error-red text-xs sm:text-sm mt-2"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Website Field */}
              <div>
                <label className="flex items-center space-x-2 text-sm sm:text-base md:text-lg font-semibold text-neutral-dark mb-2 sm:mb-3">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary-purple" />
                  <span>Website (optional)</span>
                </label>
                <motion.input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  onFocus={() => setFocusedField("website")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="https://your-awesome-site.com"
                  className={`w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 focus:outline-none min-h-[44px] ${
                    focusedField === "website"
                      ? "border-primary-purple bg-primary-purple/5"
                      : "border-neutral-gray bg-neutral-light"
                  }`}
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Goals Field */}
              <div>
                <label className="flex items-center space-x-2 text-sm sm:text-base md:text-lg font-semibold text-neutral-dark mb-2 sm:mb-3">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary-purple" />
                  <span>What are your goals?</span>
                </label>
                <motion.textarea
                  value={formData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
                  onFocus={() => setFocusedField("goals")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us about your wildest marketing dreams..."
                  rows={4}
                  className={`w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 focus:outline-none resize-none min-h-[44px] ${
                    errors.goals
                      ? "border-error-red bg-error-red/5"
                      : focusedField === "goals"
                      ? "border-primary-purple bg-primary-purple/5"
                      : "border-neutral-gray bg-neutral-light"
                  }`}
                  whileFocus={{ scale: 1.02 }}
                />
                {errors.goals && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error-red text-xs sm:text-sm mt-2"
                  >
                    {errors.goals}
                  </motion.p>
                )}
              </div>

              {/* Budget Field */}
              <div>
                <label className="flex items-center space-x-2 text-sm sm:text-base md:text-lg font-semibold text-neutral-dark mb-2 sm:mb-3">
                  <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-primary-purple" />
                  <span>Budget range</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {budgetOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleInputChange("budget", option.value)}
                      className={`p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 min-h-[44px] touch-target ${
                        formData.budget === option.value
                          ? "border-primary-purple bg-primary-purple text-white"
                          : "border-neutral-gray bg-neutral-light hover:border-primary-purple/50"
                      }`}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span className="text-sm sm:text-base md:text-lg">{option.emoji}</span>
                        <span className="font-semibold text-xs sm:text-sm md:text-base">{option.label}</span>
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-primary-purple to-accent-green text-white py-3 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed min-h-[44px] touch-target"
              >
                <span className="flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending magic...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      <span>Let's Make Magic! ✨</span>
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;