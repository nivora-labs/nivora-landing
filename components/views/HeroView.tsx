"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_CONTENT } from "@/models";

export function HeroView() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden flex items-center">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 text-white leading-tight"
          >
            Soluções de software e IA para quem leva tecnologia a sério<span className="text-[#ef4444]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#2035ae]/20 border border-[#2035ae]/40 rounded-full text-white hover:bg-[#2035ae]/30 transition-all group shadow-[0_0_30px_rgba(32,53,174,0.3)]"
            >
              <span className="font-medium">{HERO_CONTENT.cta}</span>
              <span className="w-8 h-8 rounded-full bg-[#2035ae] flex items-center justify-center group-hover:bg-[#2a45be] transition-colors shadow-[0_0_20px_rgba(32,53,174,0.5)]">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>
        </motion.div>

    
      </div>
    </section>
  );
}
