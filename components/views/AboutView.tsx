"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_CONTENT } from "@/models";

export function AboutView() {
  return (
    <section id="about" className="py-32 px-6 bg-[#e8e7ed] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-gray-900 leading-snug max-w-3xl">
            Vediamos picole e agora estamos aqui
          </h2>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {ABOUT_CONTENT.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-semibold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative py-8"
        >
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-4xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative"
              >
                <Image 
                  src="/images/about/infinity_loop_light_background.png"
                  alt="Nosso Ciclo" 
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />

                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute left-0 md:left-8 top-[20%]"
                >
                  <div className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    1. {ABOUT_CONTENT.diagram.steps[0]}
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="absolute left-4 md:left-16 bottom-[20%]"
                >
                  <div className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    2. {ABOUT_CONTENT.diagram.steps[1]}
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="absolute right-0 md:right-8 top-[20%]"
                >
                  <div className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    3. {ABOUT_CONTENT.diagram.steps[2]}
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="absolute right-4 md:right-16 bottom-[20%]"
                >
                  <div className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    4. {ABOUT_CONTENT.diagram.steps[3]}
                  </div>
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-gray-600 text-lg md:text-xl font-medium">
                    {ABOUT_CONTENT.diagram.centerText}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center text-gray-400 text-sm mt-12"
          >
            {ABOUT_CONTENT.diagram.footnote}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

