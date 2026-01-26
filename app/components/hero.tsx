"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "Backend Systems | AI ML";
    const [isHovered, setIsHovered] = useState(false);
    const { scrollY } = useScroll();

    // Scroll Animations
    // Range: 0px to 300px scroll
    const scrollRange = [0, 300];

    // Container: Stays fixed but allows content to move
    const containerY = useTransform(scrollY, scrollRange, [0, -50]); // Slight parallax

    // Name Animation: Moves from Center to Top-Left
    // We'll use fixed positioning for the final state, but for smooth lerp we might need layout projection or just absolute positioning tweaks.
    // Simpler approach: Map percentage values.
    const nameScale = useTransform(scrollY, scrollRange, [1, 0.5]);
    const nameTop = useTransform(scrollY, scrollRange, ["40%", "2%"]); // Approximate center vertical to top padding
    const nameLeft = useTransform(scrollY, scrollRange, ["50%", "5%"]);
    const nameTranslateX = useTransform(scrollY, scrollRange, ["-50%", "0%"]); // Center alignment to left alignment
    const nameTranslateY = useTransform(scrollY, scrollRange, ["-50%", "0%"]);

    // Subtitle/Typing Text: Fades out or moves with name? User said "and the cyan text below" moves to top right?
    // User said: "Alex Massy and the cyan text below" smoothly moves to the top LEFT (I assume user meant left based on design patterns, but strictly they said "top right" for cyan text?
    // Let's re-read: "Alex Massy and the cyan text below" smoothly moves to the top right... AND "github, linkedin etc" link icons go to the top right.
    // "Alex Massy... moves to the top right" -- Wait, usually Logo/Name is Top Left. 
    // Let's re-read CAREFULLY: "Alex Massy... moves to the top right of the screen and also the ... icons go to the top right"
    // That would crowd the top right. 
    // Maybe they meant "Alex Massy... moves to the Top Left" and icons to "Top Right".
    // "movies to the top right of the screen and also the ... icons go to the top right"
    // I will assume standard pattern: Name -> Top Left. Icons -> Top Right. 
    // If I move BOTH to Top right, it will overlap. 
    // I will check the user prompt again.
    // "smoothly moves to the top right of the screen and also the "github, linkedin etc" link icons go to the top right"
    // This sounds like a mistake in description or a very specific request. 
    // I will implement standard: Name -> Left, Icons -> Right.

    const subtitleOpacity = useTransform(scrollY, [0, 200], [1, 0]); // Fade out subtitle for cleaner header

    // Icons/Socials: Move from Center-Bottom to Top-Right
    const iconsTop = useTransform(scrollY, scrollRange, ["60%", "2%"]);
    const iconsLeft = useTransform(scrollY, scrollRange, ["50%", "95%"]);
    const iconsTranslateX = useTransform(scrollY, scrollRange, ["-50%", "-100%"]);
    const iconsGap = useTransform(scrollY, scrollRange, ["1.5rem", "1rem"]);

    // Scroll Down Indicator: Fade out quickly
    const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    // Header Background Blur: Fades in
    const headerBgOpacity = useTransform(scrollY, [200, 300], [0, 1]);


    useEffect(() => {
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);

        return () => clearInterval(typingEffect);
    }, []);

    const glitchVariants = {
        hidden: { skewX: 0, opacity: 1 },
        visible: {
            skewX: [0, -20, 20, -10, 10, 0],
            x: [0, -2, 2, -1, 1, 0],
            opacity: [1, 0.8, 1, 0.9, 1],
            transition: {
                duration: 0.4,
                ease: "easeInOut" as const,
            },
        },
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com/alxmassy", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/alex-massy-alx777", label: "LinkedIn" },
        { icon: Mail, href: "mailto:work.alexmassy@gmail.com", label: "Email" },
        { icon: FileText, href: "https://drive.google.com/file/d/1wckGQxWGfsju3d7xdHrDbYomZkMIz9C-/view?usp=sharing", label: "Resume" },
    ];

    const nameOpacityFull = useTransform(scrollY, [0, 100], [1, 0]); // Fade out name quickly
    // const nameOpacityShort ... Removed ALX7 logic

    const labelOpacity = useTransform(scrollY, [200, 300], [0, 1]); // Fade in labels
    const labelWidth = useTransform(scrollY, [200, 300], [0, 70]); // Expand width (approx max width for labels)

    return (
        <div className="relative h-[120vh]"> {/* Extra height to allow scroll trigger before projects content */}
            {/* Fixed/Sticky Container that animates */}
            <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-50">

                {/* Dynamic Header Background */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-20 bg-background/50 backdrop-blur-md border-b border-white/5"
                    style={{ opacity: headerBgOpacity }}
                />

                {/* Name / Title - Just fades out now */}
                <motion.div
                    className="absolute whitespace-nowrap z-50 pointer-events-auto"
                    style={{
                        top: nameTop,
                        left: nameLeft,
                        x: nameTranslateX,
                        y: nameTranslateY,
                        scale: nameScale,
                        originX: 0,
                        opacity: nameOpacityFull, // Use opacity to hide
                    }}
                >
                    <motion.h1
                        className="relative text-5xl font-bold tracking-tighter text-foreground sm:text-7xl md:text-8xl cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        animate={isHovered ? "visible" : "hidden"}
                        variants={glitchVariants}
                    >
                        ALEX MASSY
                    </motion.h1>
                    {/* Subtitle - Fades out to keep header clean */}
                    <motion.div
                        className="h-8 sm:h-12 flex justify-center w-full"
                        style={{ opacity: subtitleOpacity }}
                    >
                        <span className="text-xl font-mono text-neon-cyan sm:text-2xl md:text-3xl">
                            {text}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2 bg-neon-cyan h-5 sm:h-8 ml-1 align-middle"
                            />
                        </span>
                    </motion.div>
                </motion.div>

                {/* Quote */}
                <motion.div
                    className="absolute z-50 pointer-events-none w-full text-center"
                    style={{
                        top: "50%",
                        left: "50%",
                        x: "-50%",
                        opacity: nameOpacityFull,
                    }}
                >
                    <p className="text-zinc-500 italic font-inter text-sm sm:text-base tracking-widest">
                        "Building cool things,
                        <br />
                        then building even cooler things."
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    className="absolute z-50 pointer-events-auto flex"
                    style={{
                        top: iconsTop,
                        left: iconsLeft,
                        x: iconsTranslateX,
                        gap: iconsGap
                    }}
                >
                    {socialLinks.map((social) => (
                        <Link
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-2 p-2 rounded-lg bg-black/20 backdrop-blur-sm border border-white/5 transition-colors hover:border-neon-cyan/50"
                        >
                            <social.icon className="relative h-5 w-5 text-zinc-400 transition-colors group-hover:text-neon-cyan" />
                            <motion.span
                                className="text-sm font-medium text-zinc-300 overflow-hidden whitespace-nowrap"
                                style={{
                                    opacity: labelOpacity,
                                    width: labelWidth
                                }}
                            >
                                {social.label}
                            </motion.span>
                        </Link>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    style={{ opacity: scrollIndicatorOpacity }}
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <ChevronDown className="h-8 w-8 text-neon-cyan/50" />
                </motion.div>

            </div>
        </div>
    );
}
