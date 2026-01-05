"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Mail, User, Globe, Phone, Zap, Sparkles, Heart } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  website: string;
  mobile: string;
  marketingTypes: string[];
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
}

const dynamicPrompts = [
  "Ready to go viral?",
  "Want to break the internet?",
  "Need meme magic?",
  "Time to trend?",
  "Ready to be iconic?",
];

const marketingOptions = [
  "Meme Marketing",
  "Influencer Marketing",
  "Rating & Reviews",
  "PR Activity",
  "Quora/Reddit Marketing",
  "Youtube Marketing",
  "Performance Marketing",
  "Social Media Management",
];

const ContactFormSection = () => {
  const [promptIndex, setPromptIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    website: "",
    mobile: "",
    marketingTypes: [],
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

    if (!formData.mobile.trim()) {
      newErrors.mobile = "How do we call you? 📞";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // ----------------------------------------------------------------------
      // TODO: Replace 'YOUR_FORM_ID' with your actual Formspree Form ID.
      // Get one for free at https://formspree.io/
      // ----------------------------------------------------------------------
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvedeqk";

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok || FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
        // If placeholder is used, we simulate success for demonstration
        setIsSubmitted(true);
      } else {
        console.error("Submission failed");
        // Optionally handle error state
      }
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleMarketingType = (type: string) => {
    setFormData(prev => {
      const types = prev.marketingTypes.includes(type)
        ? prev.marketingTypes.filter(t => t !== type)
        : [...prev.marketingTypes, type];
      return { ...prev, marketingTypes: types };
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <CheckCircle className="w-24 h-24 text-[#FFFF00] mx-auto" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            You&apos;re In! 🎉
          </h2>

          <p className="text-xl md:text-2xl text-neutral-400 mb-8">
            Team will reach out to you shortly. Time to make magic happen! ✨
          </p>

          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", email: "", website: "", mobile: "", marketingTypes: [] });
            }}
            className="text-[#FFFF00] font-bold hover:underline"
          >
            Submit another query
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Side - Intro */}
          <div className="space-y-8 sticky top-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicPrompts[promptIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFF00] to-[#FAFF00]"
                  >
                    {dynamicPrompts[promptIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="text-white">Let&apos;s Talk!</span>
              </h2>

              <p className="text-xl text-neutral-400 leading-relaxed mb-8">
                Drop us a line and let&apos;s turn your brand into the next internet sensation.
                From memes to mainstream – we&apos;ve got the secret sauce! 🌶️
              </p>
            </div>

            {/* Interactive Badge */}
            <div className="hidden md:block bg-gradient-to-br from-[#FFFF00]/10 to-white/5 rounded-3xl p-8 border-2 border-dashed border-[#FFFF00]/30 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <p className="text-lg font-bold text-white">Your message = Our mission</p>
              <div className="flex justify-center gap-3 mt-4">
                <Heart className="w-6 h-6 text-[#FFFF00]/80" />
                <Zap className="w-6 h-6 text-[#FFFF00]" />
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-neutral-900 rounded-3xl shadow-2xl p-6 md:p-10 border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-white mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your name"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none text-white placeholder:text-neutral-500 ${errors.name ? "border-error-red bg-error-red/5" :
                      focusedField === "name" ? "border-[#FFFF00] bg-[#FFFF00]/5" : "border-white/10 bg-neutral-800"
                      }`}
                  />
                </div>
                {errors.name && <p className="text-error-red text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-white mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-neutral-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="your@email.com"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none text-white placeholder:text-neutral-500 ${errors.email ? "border-error-red bg-error-red/5" :
                      focusedField === "email" ? "border-[#FFFF00] bg-[#FFFF00]/5" : "border-white/10 bg-neutral-800"
                      }`}
                  />
                </div>
                {errors.email && <p className="text-error-red text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-bold text-white mb-2">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3.5 w-5 h-5 text-neutral-400" />
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    onFocus={() => setFocusedField("mobile")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="+91 98765 43210"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none text-white placeholder:text-neutral-500 ${errors.mobile ? "border-error-red bg-error-red/5" :
                      focusedField === "mobile" ? "border-[#FFFF00] bg-[#FFFF00]/5" : "border-white/10 bg-neutral-800"
                      }`}
                  />
                </div>
                {errors.mobile && <p className="text-error-red text-sm mt-1">{errors.mobile}</p>}
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-bold text-white mb-2">Company Website</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-3.5 w-5 h-5 text-neutral-400" />
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    onFocus={() => setFocusedField("website")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="https://brand.com"
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all outline-none text-white placeholder:text-neutral-500 ${focusedField === "website" ? "border-[#FFFF00] bg-[#FFFF00]/5" : "border-white/10 bg-neutral-800"
                      }`}
                  />
                </div>
              </div>

              {/* Marketing Type Checkboxes */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">What are you looking for?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {marketingOptions.map((type) => (
                    <label key={type} className={`
                        flex items-center space-x-3 p-3 rounded-xl border-2 cursor-pointer transition-all
                        ${formData.marketingTypes.includes(type)
                        ? "border-[#FFFF00] bg-[#FFFF00]/10"
                        : "border-white/10 bg-neutral-800 hover:border-[#FFFF00]/30"}
                    `}>
                      <input
                        type="checkbox"
                        checked={formData.marketingTypes.includes(type)}
                        onChange={() => toggleMarketingType(type)}
                        className="w-5 h-5 text-[#FFFF00] rounded focus:ring-[#FFFF00] bg-neutral-700 border-white/20"
                      />
                      <span className="text-sm font-medium text-white">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FFFF00] text-black py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-[#FFFF00]/20 hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Let's Create Magic! ✨"}
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;