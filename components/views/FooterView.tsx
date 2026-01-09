"use client";

import { motion } from "framer-motion";
import { MapPin, Facebook, Twitter, Instagram, Linkedin, Dribbble } from "lucide-react";
import { FOOTER_CONTENT } from "@/models";

export function FooterView() {
  return (
    <footer className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href={`mailto:${FOOTER_CONTENT.email}`}
              className="text-xl font-medium text-white hover:text-[#8fc2e6] transition-colors flex items-center gap-2 mb-4"
            >
              {FOOTER_CONTENT.email}
            </a>
            
            <div className="space-y-2">
              {FOOTER_CONTENT.locations.map((location, index) => (
                <div key={location} className="flex items-center gap-2 text-white/50 text-sm">
                  {index === 0 && <MapPin className="w-4 h-4" />}
                  {index !== 0 && <span className="w-4" />}
                  {location}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-medium mb-4">Navegação</h4>
            <nav className="space-y-3">
              {FOOTER_CONTENT.quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-medium mb-4">Indústrias</h4>
            <nav className="space-y-3">
              {FOOTER_CONTENT.industries.map((industry) => (
                <span
                  key={industry}
                  className="block text-white/60"
                >
                  {industry}
                </span>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* <h4 className="text-white font-medium mb-4">Redes Sociais</h4>

            <div className="flex items-center gap-4 mb-8">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Dribbble, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-[#2035ae]/50 hover:bg-[#2035ae]/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div> */}

          <a href="/" className="flex items-center">
            <img src="/images/logo/logo-nivora-branca.png" alt="Nivora Labs" width={150} height={100} />
          </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10"
        >
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            {FOOTER_CONTENT.copyright}
          </p>
          <div className="flex items-center gap-6">
            {FOOTER_CONTENT.legal.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 text-sm hover:text-white/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
