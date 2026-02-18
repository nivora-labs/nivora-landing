"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_CONTENT } from "@/models";

export function HeroView() {
  return (
<section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#020612] pt-20 pb-20">
      {/* --- PREMIUM BACKGROUND SYSTEM (Wind/Motion Style) --- */}
      
      {/* 1. Top Wind Trail */}
      <div className="absolute top-[-10%] left-[-20%] w-[140%] h-[500px] rounded-[100%] pointer-events-none opacity-40 blur-[80px] -rotate-3 mix-blend-screen">
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #1F1C51 20%, #7037A2 50%, #3D1A80 80%, transparent 100%)'
          }} 
        />
      </div>

      {/* 2. Bottom Wind Trail */}
      <div className="absolute bottom-[-15%] right-[-20%] w-[140%] h-[500px] rounded-[100%] pointer-events-none opacity-30 blur-[90px] rotate-2">
        <div 
          className="w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #0A112B 20%, #3D1A80 50%, #1F1C51 80%, transparent 100%)'
          }} 
        />
      </div>

      {/* 3. Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full pointer-events-none opacity-10 blur-[120px]">
         <div className="w-full h-full bg-[#7037A2]" />
      </div>

      {/* 4. Cinematic Vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020612_100%)] opacity-80 pointer-events-none" />
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-blue-100/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#020612] rounded-full font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(112,55,162,0.5)] hover:scale-[1.02]"
            >
              <span>{HERO_CONTENT.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* <a
              href="#learn-more"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/20"
            >
              <span>Saiba mais</span>
            </a> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}