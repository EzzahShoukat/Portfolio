"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroData } from "@/data/hero";
import TypewriterText from "./TypewriterText";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Subtle background decoration */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-200/30 rounded-full blur-[120px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content container */}
      <div className="max-w-7xl w-full mx-auto">
        {/* Content with image on left and text on right */}
        <div className="flex items-start gap-6 lg:gap-8">
          {/* Circular profile image - aligned with greeting+title block */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg border-4 border-white bg-gradient-to-br from-accent-200 to-accent-400">
              {/* 👇 REPLACE /public/profile.jpg WITH YOUR OWN PROFILE PHOTO */}
              <Image
                src="/profile.jpg"
                alt={heroData.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text content on the right */}
          <div className="flex-1 space-y-4 lg:space-y-6">
            {/* Greeting text */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* 👇 CHANGE YOUR NAME HERE - Edit the 'name' field in data/hero.ts */}
              Hey, I'm {heroData.name} 👋
            </motion.h1>

            {/* Subtitle (title) */}
            <motion.p
              className="text-lg md:text-xl text-slate-600 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {/* 👇 CHANGE YOUR TITLE HERE - Edit the 'title' field in data/hero.ts */}
              {heroData.title}
            </motion.p>

            {/* Typewriter sentences */}
            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-700 min-h-[4rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {/* 👇 CHANGE YOUR SENTENCES HERE - Edit the 'sentences' array in data/hero.ts */}
              <TypewriterText sentences={heroData.sentences} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator targetId="#about" />
    </section>
  );
}
