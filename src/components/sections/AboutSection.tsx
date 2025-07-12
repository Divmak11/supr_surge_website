"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Zap, Heart, Brain, Coffee, Gamepad2, Target, Sparkles } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  expertise: string[];
  fun_fact: string;
  emoji: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Thompson",
    role: "Chief Meme Officer",
    avatar: "👨‍💼",
    bio: "Former social media manager turned meme lord. Alex has been creating viral content since before TikTok was a thing.",
    expertise: ["Viral Strategy", "Community Building", "Trend Analysis"],
    fun_fact: "Created a meme that got 50M views in 24 hours",
    emoji: "🚀"
  },
  {
    id: "2",
    name: "Sam Chen",
    role: "Data Wizard",
    avatar: "👩‍💻",
    bio: "Our analytics genius who can predict which memes will go viral with 87% accuracy using custom AI models.",
    expertise: ["AI/ML", "Data Analytics", "Performance Optimization"],
    fun_fact: "Built our trend prediction algorithm in a weekend",
    emoji: "🔮"
  },
  {
    id: "3",
    name: "Jordan Kim",
    role: "Creative Chaos Coordinator",
    avatar: "🎨",
    bio: "The creative mastermind behind our most viral campaigns. Jordan thinks in memes and dreams in pixels.",
    expertise: ["Visual Design", "Brand Strategy", "Content Creation"],
    fun_fact: "Designs memes faster than most people can scroll",
    emoji: "⚡"
  },
  {
    id: "4",
    name: "Casey Rodriguez",
    role: "Culture Translator",
    avatar: "🌟",
    bio: "Our Gen Z whisperer who keeps us ahead of internet culture. If it's trending, Casey saw it first.",
    expertise: ["Cultural Intelligence", "Platform Strategy", "Influencer Relations"],
    fun_fact: "Predicted the rise of BeReal 6 months early",
    emoji: "🎯"
  }
];

const stats = [
  { label: "Years Combined Experience", value: "25+", icon: Zap },
  { label: "Viral Campaigns Created", value: "200+", icon: Target },
  { label: "Coffee Cups Consumed", value: "∞", icon: Coffee },
  { label: "Memes Per Minute", value: "42", icon: Heart }
];

const AboutSection = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-neutral-light to-white overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 text-4xl sm:text-5xl md:text-6xl opacity-10"
        >
          👥
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 right-20 text-3xl sm:text-4xl md:text-5xl opacity-10"
        >
          🎨
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 left-1/4 text-3xl sm:text-4xl opacity-10"
        >
          🚀
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-neutral-dark mb-4 sm:mb-6">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-accent-green">
              Meme Team
            </span>
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block ml-2 sm:ml-4 text-highlight-pink"
            >
              👋
            </motion.span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-medium max-w-4xl mx-auto leading-relaxed">
            We're not your typical marketing agency. We're cultural hackers, trend predictors, and meme scientists all rolled into one chaotic (but effective) team.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg border-2 border-dashed border-primary-purple/20 hover:border-primary-purple/60 transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-purple to-accent-green rounded-xl flex items-center justify-center">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-dark mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-primary-purple/20 hover:border-primary-purple/60 transition-all duration-300 h-full relative overflow-hidden"
              >
                {/* Floating Emoji */}
                <motion.div
                  animate={{ 
                    y: hoveredMember === member.id ? [0, -10, 0] : 0,
                    rotate: hoveredMember === member.id ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: hoveredMember === member.id ? Infinity : 0 
                  }}
                  className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 text-lg sm:text-xl md:text-2xl lg:text-3xl bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg border-2 border-accent-green"
                >
                  {member.emoji}
                </motion.div>

                {/* Avatar */}
                <div className="text-center mb-4 sm:mb-6">
                  <motion.div
                    animate={{ 
                      scale: hoveredMember === member.id ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 inline-block bg-gradient-to-br from-primary-purple/10 to-accent-green/10 rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center"
                  >
                    {member.avatar}
                  </motion.div>
                  
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-neutral-dark mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-primary-purple font-semibold mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-sm sm:text-base md:text-lg text-neutral-medium leading-relaxed mb-4 sm:mb-6">
                  {member.bio}
                </p>

                {/* Expertise */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-dark mb-2 sm:mb-3 uppercase tracking-wide">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {member.expertise.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="px-2 sm:px-3 py-1 bg-primary-purple/10 text-primary-purple text-xs rounded-full font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Fun Fact */}
                <div className="bg-gradient-to-r from-accent-green/10 to-highlight-pink/10 rounded-xl p-2 sm:p-3 md:p-4 border-l-4 border-accent-green">
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-dark mb-2 flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Fun Fact
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-medium">
                    {member.fun_fact}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <div className="bg-gradient-to-r from-primary-purple/10 to-accent-green/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border-2 border-dashed border-primary-purple/30">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl sm:text-4xl mb-4 sm:mb-6"
            >
              🤝
            </motion.div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-dark mb-3 sm:mb-4">
              Want to Join Our Chaos?
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg text-neutral-medium mb-6 sm:mb-8 max-w-2xl mx-auto">
              We're always looking for creative minds who think in memes and speak fluent internet. 
              If you've got the skills and the humor, let's talk!
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-highlight-pink to-primary-purple text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-lg transition-all duration-300 min-h-[44px] touch-target"
            >
              <span className="flex items-center space-x-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Join the Meme Team! 🎉</span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;