"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterTextProps {
  sentences: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenSentences?: number;
  pauseAfterTyping?: number;
}

export default function TypewriterText({
  sentences,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenSentences = 2000,
  pauseAfterTyping = 3000,
}: TypewriterTextProps) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping && !isDeleting) {
      // Typing phase
      if (displayText.length < currentSentence.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentSentence.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, pauseAfterTyping);
      }
    } else if (isDeleting) {
      // Deleting phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next sentence
        setIsDeleting(false);
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isTyping,
    isDeleting,
    currentSentenceIndex,
    sentences,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyping,
  ]);

  // Cursor blink animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentSentenceIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {displayText}
          <span className={`inline-block w-0.5 h-5 bg-accent-500 ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`} />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
