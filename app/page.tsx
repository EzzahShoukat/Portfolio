import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import RecentActivity from "@/components/RecentActivity";
import Research from "@/components/Research";
import HashScrollHandler from "@/components/HashScrollHandler";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { heroData } from "@/data/hero";
import { socialLinks } from "@/data/socialLinks";

export default function Home() {
  return (
    <main>
      <HashScrollHandler />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Research />
      <RecentActivity />
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-beige border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Contact</h2>
          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-lg">
              <FaEnvelope className="text-accent-600" />
              <span>{heroData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FaMapMarkerAlt className="text-accent-600" />
              <span>{heroData.location}</span>
            </div>
            <div className="flex items-center gap-5 pt-1">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="text-slate-700 hover:text-accent-600 text-2xl transition-colors"><FaGithub /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-slate-700 hover:text-accent-600 text-2xl transition-colors"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

