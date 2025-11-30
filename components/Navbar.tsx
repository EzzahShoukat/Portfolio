"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { heroData } from "@/data/hero";
import { socialLinks } from "@/data/socialLinks";

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Research', href: '#research', id: 'research' },
  { label: 'Works', href: '/works', isRoute: true, id: 'works' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll-based active section detection
  useEffect(() => {
    if (!isHomePage) {
      // If on /works page, highlight Works
      if (pathname === "/works") {
        setActiveSection("works");
      }
      return;
    }

    const sections = navItems
      .filter((item) => !item.isRoute)
      .map((item) => item.id);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [isHomePage, pathname]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (href: string, isRoute: boolean, e?: React.MouseEvent) => {
    if (isRoute) {
      router.push(href);
    } else {
      if (isHomePage) {
        // If we're on the home page, just scroll
        e?.preventDefault();
        scrollToSection(href);
      } else {
        // If we're on a different page, navigate to home with hash
        router.push(`/${href}`);
      }
    }
  };


  return (
    <nav className="sticky top-0 z-50 bg-beige/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Social Icons */}
          <div className="flex items-center gap-4">
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-accent-600 transition-colors"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-accent-600 transition-colors"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </motion.a>
            {/* Mail icon: scroll to #contact */}
            <motion.button
              className="text-slate-700 hover:text-accent-600 transition-colors"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Contact"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({behavior: "smooth"});
              }}
            >
              <FaEnvelope size={20} />
            </motion.button>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id || (item.isRoute && pathname === "/works");
              
              return item.isRoute ? (
                <Link
                  key={item.label}
                  href="/works"
                  className={`font-medium transition-colors relative group ${
                    isActive
                      ? "text-accent-600"
                      : "text-slate-700 hover:text-accent-600"
                  }`}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-accent-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={(e) => handleNavClick(item.href, false, e)}
                  className={`font-medium transition-colors relative group ${
                    isActive
                      ? "text-accent-600"
                      : "text-slate-700 hover:text-accent-600"
                  }`}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-accent-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Resume Button */}
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-accent-500 text-white rounded-lg font-medium hover:bg-accent-600 transition-colors flex items-center gap-2"
          >
            Resume
            <FaDownload size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
}
