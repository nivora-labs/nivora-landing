"use client";

import { motion } from "framer-motion";
import { Sparkles, GitBranch, Layers, LayoutGrid, ArrowRight } from "lucide-react";
import { SERVICES_CONTENT } from "@/models";

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-8 h-8" strokeWidth={1.5} />,
  GitBranch: <GitBranch className="w-8 h-8" strokeWidth={1.5} />,
  Layers: <Layers className="w-8 h-8" strokeWidth={1.5} />,
  LayoutGrid: <LayoutGrid className="w-8 h-8" strokeWidth={1.5} />,
};

export function ServicesView() {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              {SERVICES_CONTENT.title.split(' ').slice(0, 3).join(' ')}{" "}
              <span className="gradient-text">
                {SERVICES_CONTENT.title.split(' ').slice(3, 6).join(' ')}
              </span>{" "}
              {SERVICES_CONTENT.title.split(' ').slice(6).join(' ')}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-white/50 mb-6 leading-relaxed">
              {SERVICES_CONTENT.subtitle}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 w-fit px-6 py-3 bg-transparent border border-white/20 rounded-full text-white hover:bg-white/5 transition-all group hover:shadow-[0_0_20px_rgba(32,53,174,0.2)]"
            >
              <span className="font-medium">{SERVICES_CONTENT.cta}</span>
              <span className="w-8 h-8 rounded-full bg-[#2035ae] flex items-center justify-center group-hover:bg-[#2a45be] transition-colors shadow-[0_0_15px_rgba(32,53,174,0.4)]">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES_CONTENT.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#2035ae]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:border-[#2035ae]/40 transition-all h-full hover:shadow-[0_0_30px_rgba(32,53,174,0.15)]">
                <div className="text-white/80 mb-6 group-hover:text-[#8fc2e6] transition-colors">
                  {iconMap[card.icon]}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {card.title}
                </h3>
                
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
