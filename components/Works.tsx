"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { works, Work } from "@/data/works";

export default function Works() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const typeOptions = [
    { label: 'All', value: 'all' },
    { label: 'Projects', value: 'project' },
    { label: 'Courses', value: 'course' },
    { label: 'Workshops', value: 'workshop' },
  ];

  // Filter and sort works
  const filteredWorks = [...works]
    .filter((work) => activeFilter === "all" || work.type === activeFilter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Get all works sorted by date for timeline
  const timelineWorks = [...works]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="works" className="py-24 px-6 bg-beige">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Left Sidebar: Timeline */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Timeline</h3>
            <div className="relative pl-6 border-l-2 border-slate-300">
              {timelineWorks.map((work, index) => (
                <Link
                  key={work.id}
                  href={`/works/${work.id}`}
                  className="block mb-6 relative group"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent-500 border-2 border-white shadow-md group-hover:scale-125 transition-transform" />
                  <div className="ml-4">
                    <p className="text-xs text-slate-500 mb-1">{work.date}</p>
                    <p className="text-sm font-medium text-slate-900 group-hover:text-accent-600 transition-colors line-clamp-2">
                      {work.title}
                    </p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded mt-1 inline-block ${
                        work.type === "project"
                          ? "bg-accent-100 text-accent-700"
                          : work.type === "workshop"
                          ? "bg-green-100 text-green-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {work.type === "project"
                        ? "Project"
                        : work.type === "workshop"
                        ? "Workshop"
                        : "Course"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Works
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {typeOptions.map((option) => {
            const isActive = activeFilter === option.value;
            return (
              <motion.button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-accent-500 text-white shadow-lg shadow-accent-500/30"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-accent-300"
                }`}
                whileHover={!isActive ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
                animate={isActive ? { scale: 1.05 } : { scale: 1 }}
              >
                {option.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* 👇 EDIT YOUR WORKS IN data/works.ts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/works/${work.id}`}>
                {/* Image */}
                {work.imageUrl ? (
                  <div className="relative w-full h-48">
                    <Image
                      src={work.imageUrl}
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-accent-100 to-accent-200" />
                )}

                <div className="p-6">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        work.type === "project"
                          ? "bg-accent-100 text-accent-700"
                          : work.type === "workshop"
                          ? "bg-green-100 text-green-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {work.type === "project"
                        ? "Project"
                        : work.type === "workshop"
                        ? "Workshop"
                        : "Course"}
                    </span>
                    <span className="text-sm text-slate-500">{work.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{work.title}</h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">{work.description}</p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-4" onClick={(e) => e.stopPropagation()}>
                    {work.githubUrl && (
                      <a
                        href={work.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-700 hover:text-accent-600 transition-colors text-sm"
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    )}
                    {work.demoUrl && (
                      <a
                        href={work.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-700 hover:text-accent-600 transition-colors text-sm"
                      >
                        <FaExternalLinkAlt />
                        <span>{work.type === "project" ? "Demo" : "View"}</span>
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

