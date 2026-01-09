"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useHeader } from "@/viewmodels";

export function HeaderView() {
  const { allLinks, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useHeader();

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-4 md:px-6 py-3 border border-white/10">
          <a href="/" className="flex items-center">
            <img src="/images/logo/logo-nivora-branca.png" alt="Nivora Labs" width={130} height={100} />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {allLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#2035ae] hover:bg-[#2a45be] text-white text-sm font-medium rounded-xl transition-all glow"
          >
            Fale Conosco
          </a>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050511]/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center min-h-screen gap-6 px-6"
            >
              {allLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="text-2xl font-light text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={closeMobileMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 px-8 py-3 bg-[#2035ae] hover:bg-[#2a45be] text-white font-medium rounded-xl transition-all"
              >
                Fale Conosco
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
