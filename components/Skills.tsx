"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState(skillCategories[0]?.id || "");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeCategory = skillCategories.find((cat) => cat.id === activeCategoryId) || skillCategories[0];

  return (
    <section id="skills" className="py-24 px-6 bg-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-[200px_1fr] gap-8 lg:gap-12">
          {/* Left: Category List */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`text-left px-4 py-3 whitespace-nowrap md:whitespace-normal border-l-2 transition-colors ${
                  activeCategoryId === category.id
                    ? "border-accent-500 bg-accent-50 text-accent-700"
                    : "border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-400"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Right: Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              {/* 👇 EDIT YOUR SKILLS IN data/skills.ts */}
              {activeCategory?.skills.map((skill) => {
                const isHovered = hoveredSkill === skill.id;
                return (
                  <motion.div
                    key={skill.id}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Circle */}
                    <motion.div
                      className="w-24 h-24 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-md cursor-pointer"
                      whileHover={{ scale: 1.1, shadow: "lg" }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm font-medium text-slate-700 text-center px-2">
                        {skill.name}
                      </span>
                    </motion.div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-10"
                        >
                          {skill.efficiency}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
