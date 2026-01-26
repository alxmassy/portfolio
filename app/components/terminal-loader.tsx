"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalLoaderProps {
    onComplete: () => void;
}

export function TerminalLoader({ onComplete }: TerminalLoaderProps) {
    const [displayText, setDisplayText] = useState("");
    const [showOutput, setShowOutput] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const command = "fastfetch";
    const prompt = "alxmassy@portfolio:~$ ";

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= command.length) {
                setDisplayText(command.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setShowOutput(true);
                    setTimeout(() => setShowPrompt(true), 500);
                }, 300);
            }
        }, 100); // Typing speed

        return () => clearInterval(typingInterval);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (showPrompt && e.key === "Enter") {
                setIsFinished(true);
                setTimeout(onComplete, 500); // Wait for exit animation
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [showPrompt, onComplete]);

    return (
        <AnimatePresence>
            {!isFinished && (
                <motion.div
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center bg-black font-mono text-sm sm:text-base"
                >
                    <div className="w-full max-w-3xl rounded-lg border border-white/10 bg-black/90 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
                        {/* Terminal Header */}
                        <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                            <span className="ml-4 text-xs text-zinc-500">alxmassy@portfolio -- -bash</span>
                        </div>

                        {/* Terminal Content */}
                        <div className="space-y-2 text-zinc-300">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-green-400">{prompt}</span>
                                <span>{displayText}</span>
                                {!showOutput && (
                                    <motion.span
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="block h-5 w-2 bg-zinc-500"
                                    />
                                )}
                            </div>

                            {showOutput && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_2fr]"
                                >
                                    {/* ASCII Art Logo */}
                                    <pre className="text-neon-cyan hidden font-bold leading-tight sm:block">
                                        {`       /\\
      /  \\
     / /\\ \\
    / /  \\ \\
   / /    \\ \\
  / /      \\ \\
 / /        \\ \\
/_/          \\_\\`}
                                    </pre>

                                    {/* FastFetch Stats */}
                                    <div className="flex flex-col gap-1">
                                        <div><span className="text-neon-cyan font-bold">alxmassy</span>@<span className="text-neon-cyan font-bold">portfolio</span></div>
                                        <div>-------------------</div>
                                        <div><span className="text-neon-purple font-bold">OS</span>: PortfolioOS v2.0</div>
                                        <div><span className="text-neon-purple font-bold">Host</span>: Vercel Edge Network</div>
                                        <div><span className="text-neon-purple font-bold">Kernel</span>: Next.js 14.2</div>
                                        <div><span className="text-neon-purple font-bold">Uptime</span>: Forever</div>
                                        <div><span className="text-neon-purple font-bold">Shell</span>: Zsh</div>
                                        <div><span className="text-neon-purple font-bold">Resolution</span>: 3840x2160</div>
                                        <div><span className="text-neon-purple font-bold">CPU</span>: Creative Neural Engine</div>
                                        <div><span className="text-neon-purple font-bold">Memory</span>: Infinite Context</div>
                                        <div className="mt-2 flex gap-2">
                                            <div className="h-3 w-3 bg-black"></div>
                                            <div className="h-3 w-3 bg-red-500"></div>
                                            <div className="h-3 w-3 bg-green-500"></div>
                                            <div className="h-3 w-3 bg-yellow-500"></div>
                                            <div className="h-3 w-3 bg-blue-500"></div>
                                            <div className="h-3 w-3 bg-magenta-500"></div>
                                            <div className="h-3 w-3 bg-cyan-500"></div>
                                            <div className="h-3 w-3 bg-white"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {showPrompt && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-6 text-zinc-400"
                                >
                                    <span>{prompt}</span>
                                    <span className="animate-pulse text-neon-cyan">Hit Enter to launch...</span>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
