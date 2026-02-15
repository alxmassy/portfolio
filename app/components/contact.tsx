"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Terminal, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const links = [
        {
            name: "GitHub",
            url: "https://github.com/alxmassy",
            icon: Github,
            command: "git clone",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/alex-massy-alx777",
            icon: Linkedin,
            command: "connect",
        },
        {
            name: "Resume",
            url: "https://drive.google.com/file/d/1oANfQ-rjmLCoMnt7SG1EbZpbThJXNOIe/view?usp=sharing",
            icon: FileText,
            command: "cat resume.pdf",
        },
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText("work.alexmassy@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    return (
        <section className="relative w-full px-6 py-24 bg-black/50 overflow-hidden">
            {/* Background Matrix-like accent (optional, keeping it subtle) */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

            <div className="mx-auto max-w-4xl relative z-10">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl flex items-center justify-center md:justify-start gap-3">
                        <Terminal className="text-neon-cyan h-8 w-8" />
                        <span className="text-neon-cyan">~/contact</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 font-mono text-sm">
                        Initiate communication protocol...
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full bg-zinc-950/80 border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm shadow-2xl"
                >
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="text-xs text-zinc-500 font-mono">bash — 80x24</div>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 font-mono text-sm sm:text-base space-y-6">

                        {/* Email Section */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <span className="text-neon-purple">➜</span>
                                <span className="text-neon-cyan">~</span>
                                <span>echo $EMAIL</span>
                            </div>
                            <div className="flex items-center gap-4 pl-6 group">
                                <span className="text-zinc-200">work.alexmassy@gmail.com</span>
                                <button
                                    onClick={copyToClipboard}
                                    className="p-1.5 rounded-md hover:bg-white/10 text-zinc-500 hover:text-white transition-colors"
                                    title="Copy Email"
                                >
                                    {copiedEmail ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <span className="text-neon-purple">➜</span>
                                <span className="text-neon-cyan">~</span>
                                <span>ls -la ./socials</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pl-6">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-col p-3 rounded border border-transparent hover:border-white/10 hover:bg-white/5 transition-all"
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <link.icon className="h-5 w-5 text-zinc-400 group-hover:text-neon-cyan transition-colors" />
                                            <span className="text-white font-semibold">{link.name}</span>
                                        </div>
                                        <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
                                            $ {link.command}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Cursor */}
                        <div className="flex items-center gap-2 pt-2">
                            <span className="text-neon-purple">➜</span>
                            <span className="text-neon-cyan">~</span>
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2.5 h-4 bg-zinc-400 align-middle"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Footer Copyright */}
                <div className="mt-16 border-t border-white/5 pt-8 text-center text-zinc-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Alex Massy. Built with Next.js & Tailwind.</p>
                </div>
            </div>
        </section>
    );
}
