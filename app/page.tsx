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
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const socialLinks = [
    { icon: Github, href: "https://github.com/alxmassy", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/alex-massy-alx777", label: "LinkedIn" },
    { icon: Mail, href: "mailto:work.alexmassy@gmail.com", label: "Email" },
    { icon: FileText, href: "https://drive.google.com/file/d/1Ku8sCKXYGG3Kn4En5fKBrX2cMK6nV_GK/view?usp=sharing", label: "Resume" },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* Mobile Optimization Message - Visible only on mobile */}
      <div className="flex md:hidden h-screen w-full flex-col items-center justify-center p-6 text-center z-50 relative">
        <div className="space-y-6 max-w-sm">
          <h1 className="text-3xl font-bold tracking-tighter text-white">
            ALEX MASSY
          </h1>
          <p className="text-zinc-400">
            Please use a PC for the best immersive experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-neon-cyan/50 transition-colors"
              >
                <social.icon className="h-5 w-5 text-neon-cyan" />
                <span className="text-sm font-medium text-zinc-300">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Application - Hidden on mobile */}
      <div className="hidden md:block">
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
      </div>
    </main>
  );
}
