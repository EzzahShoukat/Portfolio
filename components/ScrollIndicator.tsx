"use client";

import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  targetId: string;
}

export default function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  const scrollToTarget = () => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={scrollToTarget}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-accent-600 transition-colors"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      aria-label="Scroll to next section"
    >
      <span className="text-sm font-medium">Scroll</span>
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path d="M6 9l6 6 6-6" />
      </motion.svg>
    </motion.button>
  );
}

