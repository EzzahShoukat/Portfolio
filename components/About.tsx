"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* 👇 REPLACE /public/about.jpg WITH YOUR OWN IMAGE */}
            <Image
              src={aboutData.imagePath}
              alt="About"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* 👇 EDIT YOUR ABOUT TEXT IN data/about.ts */}
            {aboutData.text.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-slate-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

