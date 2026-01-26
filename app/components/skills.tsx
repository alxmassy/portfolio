"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Terminal,
    Cpu,
    Globe,
    Zap,
    Layout,
    Key,
    Database,
    RefreshCw,
    Brain,
    MessageSquareText,
    Smile,
    Workflow,
    ChartBar,
    Container,
    Cloud,
    GitBranch
} from "lucide-react";

// Define the skills data structure
const skillsData = [
    {
        category: "Languages",
        skills: [
            { name: "Python", icon: Code2 },
            { name: "Go", icon: Terminal },
            { name: "C++", icon: Cpu },
        ],
    },
    {
        category: "Backend & Systems",
        skills: [
            { name: "REST APIs", icon: Globe },
            { name: "FastAPI", icon: Zap },
            { name: "Django", icon: Layout },
            { name: "JWT", icon: Key },
            { name: "Redis", icon: Database },
            { name: "CI/CD", icon: RefreshCw },
        ],
    },
    {
        category: "AI & ML",
        skills: [
            { name: "PyTorch", icon: Brain },
            { name: "NLP", icon: MessageSquareText },
            { name: "Hugging Face", icon: Smile },
            { name: "RAG pipelines", icon: Workflow },
            { name: "SHAP", icon: ChartBar },
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "Docker", icon: Container },
            { name: "Linux", icon: Terminal },
            { name: "Azure", icon: Cloud },
            { name: "Git", icon: GitBranch },
            { name: "PostgreSQL", icon: Database },
            { name: "Supabase", icon: Zap },
        ],
    },
];

export function Skills() {
    return (
        <section className="relative z-10 w-full px-6 py-24">
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                        Technical <span className="text-neon-cyan">Skills</span>
                    </h2>
                    <div className="mt-4 h-1 w-20 rounded-full bg-neon-purple" />
                </div>

                {/* Skills Grid */}
                <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-semibold text-zinc-200 border-b border-white/10 pb-2">
                                {category.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="group relative flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white border border-transparent hover:border-neon-cyan/30"
                                    >
                                        <skill.icon className="h-4 w-4 text-zinc-400 group-hover:text-neon-cyan transition-colors" />
                                        <span>{skill.name}</span>

                                        {/* Subtle Glow Effect on Hover */}
                                        <div className="absolute inset-0 -z-10 rounded-md bg-neon-cyan/5 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
