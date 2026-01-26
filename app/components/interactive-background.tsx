"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
}

export function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const lastMouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const particleCount = 200; // Slightly reduced for cleaner look
            const colors = ["#00FFFF", "#D500F9", "#ffffff", "#4a4a4a"];

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.2, // Very slow natural drift
                    vy: (Math.random() - 0.5) * 0.2,
                    size: Math.random() * 2 + 0.5,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate mouse velocity (how fast is it moving?)
            const mouseVx = mouseRef.current.x - lastMouseRef.current.x;
            const mouseVy = mouseRef.current.y - lastMouseRef.current.y;
            const mouseSpeed = Math.sqrt(mouseVx * mouseVx + mouseVy * mouseVy);

            // Update last mouse position for next frame
            lastMouseRef.current = { ...mouseRef.current };

            particles.forEach((p) => {
                // Base movement
                p.x += p.vx;
                p.y += p.vy;

                // Interaction
                const dx = mouseRef.current.x - p.x;
                const dy = mouseRef.current.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 200; // Smaller interaction radius

                if (distance < maxDist) {
                    // Only apply significant force if mouse is moving (stirring effect)
                    if (mouseSpeed > 1) {
                        const force = (maxDist - distance) / maxDist;
                        // Add velocity in the direction of mouse movement (drag)
                        // plus a little bit of attraction to keep them involved
                        p.vx += (mouseVx * 0.05 * force) + (dx * 0.001);
                        p.vy += (mouseVy * 0.05 * force) + (dy * 0.001);
                    }
                }

                // Strong Friction to stop them when not interacting
                p.vx *= 0.94;
                p.vy *= 0.94;

                // Keep a tiny bit of life so they aren't frozen dead
                if (Math.abs(p.vx) < 0.05 && Math.abs(p.vy) < 0.05) {
                    // Very subtle idle drift
                    p.vx += (Math.random() - 0.5) * 0.005;
                    p.vy += (Math.random() - 0.5) * 0.005;
                }

                // Screen wrap
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Draw
                ctx.fillStyle = p.color;

                // Hide particles that are barely moving to reduce visual noise? 
                // No, let's keep them visible but faint if needed. 
                // For now standard opacity is fine.
                ctx.globalAlpha = 0.6; // Softer look
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1.0;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);

        // Initialize lastMouse to current to prevent jump on load
        lastMouseRef.current = { x: 0, y: 0 };

        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
}
