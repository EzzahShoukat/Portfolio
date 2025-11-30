"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { works } from "@/data/works";

/**
 * Recent Activity shows the most recent items from data/works.ts (projects and courses),
 * sorted by date. Add or edit works in data/works.ts and they will appear here automatically.
 */
export default function RecentActivity() {
  // Sort works by date (most recent first) and take top 6
  const recentWorks = [...works]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <section id="recents" className="py-24 px-6 bg-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >Recents</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentWorks.map((work, index) => (
            <motion.div
              key={work.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/works/${work.id}`}>{work.imageUrl ? (
                <div className="relative w-full h-48"><Image src={work.imageUrl} alt={work.title} fill className="object-cover" /></div>
              ) : (<div className="w-full h-48 bg-gradient-to-br from-accent-100 to-accent-200" />)}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${work.type === 'project' ? 'bg-accent-100 text-accent-700' : work.type === 'workshop' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>{work.type.charAt(0).toUpperCase() + work.type.slice(1)}</span>
                  <span className="text-sm text-slate-500">{work.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{work.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">{work.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">{work.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">{t}</span>)}</div>
                {work.githubUrl && <a href={work.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block mr-3 text-accent-600">GitHub</a>}
                {work.demoUrl && <a href={work.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-accent-600">Demo</a>}
              </div></Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/works" className="text-accent-700 hover:underline text-lg font-medium">View more</Link>
        </div>
      </div>
    </section>
  );
}

