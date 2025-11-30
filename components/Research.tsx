"use client";
import { motion } from "framer-motion";
import { researchItems } from "@/data/research";

// Edit data/research.ts to add or change your publications and preprints.

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-1 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Research
        </motion.h2>
        <p className="text-lg text-slate-600 text-center mb-10">Publications & preprints</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchItems.map(item => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
              {(item.venue || item.year) && (
                <p className="text-sm text-slate-600 mb-2 font-semibold">
                  {item.venue}{item.venue && item.year ? ', ' : ''}{item.year}
                </p>
              )}
              {item.description && <p className="text-slate-700 mb-4">{item.description}</p>}
              {item.linkUrl && (
                <a href={item.linkUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-block text-sm px-4 py-2 bg-accent-100 text-accent-700 font-medium rounded hover:underline">
                  View paper
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
