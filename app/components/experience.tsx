"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    duration: string;
    description: string;
    tech: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: "Software Developer Intern",
        company: "UniConverge Technologies",
        duration: "Jan 2026 - Present",
        description: "Developing scalable backend systems using Python and Qt. Integrating Amazon KVS for real-time video streaming capabilities and implementing high-performance async APIs with FastAPI to support data-intensive operations.",
        tech: ["Qt", "FastAPI", "Amazon KVS", "Asyncio"],
    },
    {
        id: 2,
        role: "Project Intern",
        company: "DRDO",
        duration: "Jun 2025 - Aug 2025",
        description: "Worked on advanced thermal imaging and computer vision systems. Implemented Pleora Vision standards and GigE Vision protocols to interface with industrial cameras for defense applications.",
        tech: ["Computer Vision", "Thermal Imaging", "Pleora Vision", "GigE Vision"],
    },
    {
        id: 3,
        role: "Web Development Intern",
        company: "Nexus Info",
        duration: "Jul 2024 - Aug 2024",
        description: "Built responsive frontend interfaces using React and developed robust RESTful APIs with Node.js. Collaborated on full-stack features to improve user engagement and data handling efficiency.",
        tech: ["React", "Node.js", "REST APIs"],
    },
];

export function Experience() {
    return (
        <section className="relative z-10 w-full px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                        Professional <span className="text-neon-cyan">Experience</span>
                    </h2>
                    <div className="mt-4 h-1 w-20 rounded-full bg-neon-purple" />
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent md:left-1/2 md:-translate-x-1/2" />

                    <div className="flex flex-col gap-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`relative flex flex-col gap-8 md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-neon-cyan bg-black shadow-[0_0_10px_rgba(0,255,255,0.5)] md:left-1/2">
                                    <div className="h-3 w-3 rounded-full bg-neon-cyan" />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-12 w-full md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                                    <div className="group rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-neon-purple/50 hover:bg-white/10">
                                        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex items-center gap-2 text-neon-purple">
                                                <Briefcase className="h-4 w-4" />
                                                <span className="font-bold">{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                                <Calendar className="h-3 w-3" />
                                                <span>{exp.duration}</span>
                                            </div>
                                        </div>

                                        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                            {exp.role}
                                        </h3>

                                        <p className="mb-4 text-zinc-400 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t) => (
                                                <span key={t} className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-medium text-neon-cyan border border-white/5">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Space for alternate side on desktop */}
                                <div className="hidden w-1/2 md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
