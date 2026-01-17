"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCaseStudiesCarousel } from "@/viewmodels";

const AUTO_SWIPE_INTERVAL = 5000; // 5 segundos

export function CaseStudiesView() {
  const {
    activeIndex,
    direction,
    handlePrev,
    handleNext,
    goToSlide,
    slideVariants,
    currentSlide,
    prevSlide,
    nextSlide,
    caseStudies,
  } = useCaseStudiesCarousel();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);

  const startAutoSwipe = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (!isHoveredRef.current && !isDraggingRef.current) {
        handleNext();
      }
    }, AUTO_SWIPE_INTERVAL);
  }, [handleNext]);

  const stopAutoSwipe = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoSwipe();
    return () => stopAutoSwipe();
  }, [startAutoSwipe, stopAutoSwipe]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    isDraggingRef.current = false;
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev();
    }
    
    // Reinicia o auto swipe após interação manual
    startAutoSwipe();
  };

  const handleManualNavigation = (callback: () => void) => {
    callback();
    startAutoSwipe(); // Reinicia o timer após navegação manual
  };

  return (
    <section id="case-studies" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-12 px-4 md:px-0"
        >
          Projetos dos quais participamos ativamente do desenvolvimento<span className="text-[#ef4444]">.</span>
        </motion.h2>

        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => handleManualNavigation(handlePrev)}
              className="hidden md:flex cursor-pointer flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all z-10 hover:shadow-[0_0_20px_rgba(158,103,197,0.2)]"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>

            <div className="flex-1 flex items-center gap-4 overflow-hidden">
              <div
                className="hidden lg:block flex-shrink-0 w-[15%] relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer opacity-40 hover:opacity-60 transition-opacity duration-300"
                onClick={() => handleManualNavigation(handlePrev)}
              >
                <Image 
                  src={prevSlide.image}
                  alt={prevSlide.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="flex-1 relative touch-pan-y">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[12/7] shadow-[0_0_60px_rgba(32,53,174,0.2)] cursor-grab active:cursor-grabbing"
                  >
                    <Image 
                      src={currentSlide.image}
                      alt={currentSlide.name}
                      fill
                      className="object-cover pointer-events-none"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 pointer-events-none">
                    
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-1 sm:mt-2 mb-2 sm:mb-3">
                        {currentSlide.name}
                      </h3>
                      
                      <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-3 sm:mb-5 line-clamp-2 sm:line-clamp-none">
                        {currentSlide.description}
                      </p>
                      
                      <a 
                        href={currentSlide.link}
                        target="_blank"
                        className="pointer-events-auto inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-colors hover:shadow-[0_0_20px_rgba(158,103,197,0.3)]"
                      >
                        {currentSlide.cta} <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>

              <div
                className="hidden lg:block flex-shrink-0 w-[15%] relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer opacity-40 hover:opacity-60 transition-opacity duration-300"
                onClick={() => handleManualNavigation(handleNext)}
              >
                <Image 
                  src={nextSlide.image}
                  alt={nextSlide.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => handleManualNavigation(handleNext)}
              className="hidden md:flex cursor-pointer flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all z-10 hover:shadow-[0_0_20px_rgba(158,103,197,0.2)]"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mt-6 md:mt-10"
        >
          <div className="flex items-center gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  startAutoSwipe();
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex 
                    ? "w-8 md:w-10 h-2 bg-gradient-to-r from-[#9e67c5] to-[#8fc2e6] shadow-[0_0_10px_rgba(158,103,197,0.5)]" 
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
