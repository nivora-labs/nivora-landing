import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    handleManualNavigation: (cb: () => void) => void;
    handlePrev: () => void;
    handleNext: () => void;
    activeIndex: number;
    direction: number;
    slideVariants: any;
    handleDragStart: () => void;
    handleDragEnd: (e: any, info: any) => void;
    currentSlide: any;
    setSelectedCase: (c: any) => void;
    setIsModalOpen: (open: boolean) => void;
    stopAutoSwipe: () => void;
    caseStudies: any[];
    goToSlide: (i: number) => void;
    startAutoSwipe: () => void;
}

export function Carousel({
    handleMouseEnter,
    handleMouseLeave,
    handleManualNavigation,
    handlePrev,
    handleNext,
    activeIndex,
    direction,
    slideVariants,
    handleDragStart,
    handleDragEnd,
    currentSlide,
    setSelectedCase,
    setIsModalOpen,
    stopAutoSwipe,
    caseStudies,
    goToSlide,
    startAutoSwipe
}: CarouselProps) {
    return (
        <>
            <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center gap-4 lg:gap-6">
                    {/* Prev Button */}
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        onClick={() => handleManualNavigation(handlePrev)}
                        className="hidden md:flex cursor-pointer flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 items-center justify-center text-white/60 hover:text-white hover:border-[#2035ae]/60 hover:bg-[#2035ae]/10 transition-all z-10 hover:shadow-[0_0_20px_rgba(32,53,174,0.3)]"
                    >
                        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                    </motion.button>

                    {/* Slides Area */}
                    <div className="flex-1 flex items-center gap-4 overflow-hidden px-5 sm:px-20">
                        {/* Active Slide */}
                        <div className="flex-1 relative touch-pan-y">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={activeIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragStart={handleDragStart}
                                    onDragEnd={handleDragEnd}
                                    className="cursor-grab active:cursor-grabbing"
                                >
                                    <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0d1f] shadow-[0_0_60px_rgba(32,53,174,0.2)] hover:shadow-[0_0_80px_rgba(32,53,174,0.35)] hover:border-[#2035ae]/40 transition-all duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#2035ae]/8 via-transparent to-[#9e67c5]/8 pointer-events-none z-0" />
                                        <div className="relative z-10 flex flex-col">
                                            <div className="relative flex-shrink-0 w-full aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.5/1] overflow-hidden">
                                                <Image
                                                    src={currentSlide.image}
                                                    alt={currentSlide.name}
                                                    fill
                                                    className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                                                    draggable={false}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1f] via-[#0a0d1f]/10 to-transparent" />
                                            </div>

                                            <div className="flex flex-col justify-between p-6 md:p-10 flex-1">
                                                <div className="text-left">
                                                    <p className="text-xs font-semibold text-[#9e67c5] uppercase tracking-widest mb-2">
                                                        {currentSlide.client}
                                                    </p>
                                                    <h3 className="text-xl md:text-3xl font-bold text-white leading-tight mb-3">
                                                        {currentSlide.impact_headline}
                                                    </h3>
                                                    <p className="text-white/50 text-sm md:text-base leading-relaxed line-clamp-3">
                                                        {currentSlide.description}
                                                    </p>
                                                </div>

                                                <div className="flex justify-start mt-6 pt-6 border-t border-white/[0.06]">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedCase(currentSlide);
                                                            setIsModalOpen(true);
                                                            stopAutoSwipe();
                                                        }}
                                                        className="inline-flex cursor-pointer items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                                                    >
                                                        Ver detalhes
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        onClick={() => handleManualNavigation(handleNext)}
                        className="hidden md:flex cursor-pointer flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white/20 items-center justify-center text-white/60 hover:text-white hover:border-[#2035ae]/60 hover:bg-[#2035ae]/10 transition-all z-10 hover:shadow-[0_0_20px_rgba(32,53,174,0.3)]"
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
                className="flex items-center justify-center gap-4 mt-8 md:mt-10"
            >
                <div className="flex items-center gap-2">
                    {caseStudies.map((_: any, index: number) => (
                        <button
                            key={index}
                            onClick={() => { goToSlide(index); startAutoSwipe(); }}
                            className={`transition-all duration-300 rounded-full ${index === activeIndex
                                ? "w-8 md:w-10 h-2 bg-gradient-to-r from-[#2035ae] to-[#8fc2e6] shadow-[0_0_10px_rgba(32,53,174,0.5)]"
                                : "w-2 h-2 bg-white/20 hover:bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </motion.div>
        </>
    );
}
