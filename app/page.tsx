"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "./components/hero";
import { InteractiveBackground } from "./components/interactive-background";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { TerminalLoader } from "./components/terminal-loader";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden bg-black text-white">
      <TerminalLoader onComplete={() => setShowContent(true)} />

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <InteractiveBackground />
          {/* Hero handles its own fixed positioning and height */}
          <Hero />

          {/* Projects and Skills section (Scroll destination) */}
          <div className="relative z-10 w-full bg-gradient-to-b from-transparent to-black/80">
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </motion.div>
      )}
    </main>
  );
}
