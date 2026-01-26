"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    githubLink: string;
    demoLink?: string;
    delay: number;
}

export function ProjectCard({ title, description, techStack, githubLink, demoLink, delay }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true }}
            className="group relative flex flex-col justify-between rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-neon-cyan/50 hover:bg-white/10"
        >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

            <div>
                <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-neon-cyan">
                    {title}
                </h3>
                <p className="mb-4 text-zinc-400">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-neon-cyan/80 backdrop-blur-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
                <Link
                    href={githubLink}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                </Link>
                {demoLink && (
                    <Link
                        href={demoLink}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-neon-cyan"
                    >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                    </Link>
                )}
            </div>
        </motion.div>
    );
}
