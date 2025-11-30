"use client";

import { useEffect } from "react";

export default function HashScrollHandler() {
  useEffect(() => {
    // Handle hash navigation when coming from another page
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return null;
}

