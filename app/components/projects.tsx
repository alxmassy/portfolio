"use client";

import { ProjectCard } from "./project-card";

const projects = [
    {
        title: "FINTEL",
        description: "ML inference system processing financial news for stock prediction. Analyzes sentiment and trends to forecast market movements.",
        techStack: ["Python", "Pandas", "PyTorch", "Azure", "PostgreSQL", "Streamlit"],
        githubLink: "https://github.com/alxmassy/fintel", // Placeholder
    },
    {
        title: "Job Queue Service",
        description: "High-performance job queue backed by PostgreSQL. Features async worker pools, configurable retry logic, and REST API management.",
        techStack: ["Go", "PostgreSQL", "Goroutines", "REST APIs"],
        githubLink: "https://github.com/alxmassy/go-jobqueue",
    },
    {
        title: "Webhook Ingestion",
        description: "Production-grade webhook processing service. Handles verification (HMAC-SHA256), idempotency, and reliable event buffering.",
        techStack: ["Go", "PostgreSQL", "HMAC-SHA256", "HTTP"],
        githubLink: "https://github.com/alxmassy/go-webhooks",
    },
];

export function Projects() {
    return (
        <section className="relative z-10 w-full px-6 py-24 pb-48">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                        Featured <span className="text-neon-purple">Work</span>
                    </h2>
                    <div className="mt-4 h-1 w-20 rounded-full bg-neon-cyan" />
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
