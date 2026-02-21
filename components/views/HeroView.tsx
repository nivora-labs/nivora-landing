"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_CONTENT } from "@/models";
import { Component as EtheralShadow } from "@/components/ui/etheral-shadow";

export function HeroView() {
  const containerRef = useRef<HTMLElement>(null);

  // --- Scroll Parallax ---
  const { scrollY } = useScroll();

  // Apply a spring to the scroll value to make it buttery smooth (no stutter/engasgadas)
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 20, mass: 0.5 });

  // Moves the text down as you scroll, creating a "fixed" or deep parallax feel
  // Fades out and scales down slightly before hitting the next section
  const scrollYContent = useTransform(smoothScrollY, [0, 800], [0, 600]);
  const scrollOpacity = useTransform(smoothScrollY, [0, 500], [1, 0]);
  const scrollScale = useTransform(smoothScrollY, [0, 500], [1, 0.95]);

  // --- Mouse Parallax ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 60 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const mouseXTitle = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const mouseYTitle = useTransform(springY, [-0.5, 0.5], [-30, 30]);

  const mouseXDesc = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const mouseYDesc = useTransform(springY, [-0.5, 0.5], [-15, 15]);

  const mouseXBtn = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const mouseYBtn = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#020612] pt-20 pb-20"
    >
      {/* --- ETHERAL SHADOW BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <EtheralShadow
          color="#3D1A80"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 0.5, scale: 1.2 }}
          sizing="fill"
          className="opacity-60"
        >
          <></>
        </EtheralShadow>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020612_100%)] opacity-80 pointer-events-none" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: scrollYContent, opacity: scrollOpacity, scale: scrollScale }}
          className="will-change-transform"
        >

          {/* Title Wrapper */}
          <motion.div style={{ x: mouseXTitle, y: mouseYTitle }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 text-white tracking-tight leading-[1.1]"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
                {HERO_CONTENT.title}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/80 to-white/50">
                {HERO_CONTENT.titleLine2}
              </span>
              <span className="text-[#7037A2]">.</span>
            </motion.h1>
          </motion.div>

          {/* Description Wrapper */}
          <motion.div style={{ x: mouseXDesc, y: mouseYDesc }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm md:text-xl text-blue-100/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
            >
              {HERO_CONTENT.description}
            </motion.p>
          </motion.div>

          {/* CTA Button Wrapper */}
          <motion.div
            style={{ x: mouseXBtn, y: mouseYBtn }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#020612] rounded-full font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(112,55,162,0.5)] hover:scale-[1.02]"
              >
                <span>{HERO_CONTENT.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}