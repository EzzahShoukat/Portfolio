"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceEntries, ExperienceEntry } from "@/data/experience";

export default function Experience() {
  const [selectedId, setSelectedId] = useState(experienceEntries[0]?.id || "");

  const selectedEntry = experienceEntries.find((entry) => entry.id === selectedId) || experienceEntries[0];

  return (
    <section id="experience" className="py-24 px-6 bg-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Where I Worked
        </motion.h2>

        <div className="grid md:grid-cols-[200px_1fr] gap-8 lg:gap-12">
          {/* Left: Company/Role List */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {experienceEntries.map((entry) => (
              <button
                key={entry.id}
                onClick={() => setSelectedId(entry.id)}
                className={`text-left px-4 py-3 whitespace-nowrap md:whitespace-normal border-l-2 md:border-l-2 transition-colors ${
                  selectedId === entry.id
                    ? "border-accent-500 bg-accent-50 text-accent-700"
                    : "border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-400"
                }`}
              >
                {entry.company}
              </button>
            ))}
          </div>

          {/* Right: Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            >
              {/* 👇 EDIT YOUR EXPERIENCE ENTRIES IN data/experience.ts */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {selectedEntry.role}{" "}
                    <span className="text-accent-600">@{selectedEntry.company}</span>
                  </h3>
                  <p className="text-slate-600 mt-1">{selectedEntry.location}</p>
                  <p className="text-slate-500 text-sm mt-1">
                    {selectedEntry.startDate} - {selectedEntry.endDate}
                  </p>
                </div>

                <ul className="space-y-2 mt-6">
                  {selectedEntry.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent-500 mt-2">▹</span>
                      <span className="text-slate-700 leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

