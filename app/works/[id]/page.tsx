"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { works } from "@/data/works";
import Navbar from "@/components/Navbar";

export default function WorkDetailPage() {
  const params = useParams();
  const workId = params?.id as string;
  const work = works.find((w) => w.id === workId);

  if (!work) {
    return (
      <main>
        <Navbar />
        <section className="py-24 px-6 bg-beige min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Work Not Found</h1>
            <Link href="/works" className="text-accent-600 hover:text-accent-700">
              ← Back to Works
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <section className="py-24 px-6 bg-beige min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-accent-600 transition-colors"
            >
              <FaArrowLeft />
              <span>Back to Works</span>
            </Link>
          </motion.div>

          <div className="flex gap-8">
            {/* Left Sidebar: Timeline - Only shows if timeline data exists */}
            {work.timeline && work.timeline.length > 0 && (
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Timeline</h3>
                  <div className="relative pl-6 border-l-2 border-accent-300">
                    {work.timeline.map((item, index) => (
                      <motion.div
                        key={index}
                        className="mb-6 relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent-500 border-2 border-white shadow-md" />
                        <div className="ml-4">
                          {item.week && (
                            <p className="text-sm font-semibold text-accent-600 mb-1">
                              {item.week}
                            </p>
                          )}
                          <h4 className="text-sm font-semibold text-slate-900 mb-1">
                            {item.title}
                          </h4>
                          {item.description && (
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Image */}
              {work.imageUrl && (
                <motion.div
                  className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={work.imageUrl}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Type and Date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded ${
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
                  <span className="text-slate-500">{work.date}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{work.title}</h1>

                {/* Description */}
                <p className="text-lg text-slate-700 leading-relaxed mb-8">{work.description}</p>

                {/* Tech Tags */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {work.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 bg-slate-100 text-slate-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {work.githubUrl && (
                    <a
                      href={work.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <FaGithub />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {work.demoUrl && (
                    <a
                      href={work.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>{work.type === "project" ? "View Demo" : "View Certificate"}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

