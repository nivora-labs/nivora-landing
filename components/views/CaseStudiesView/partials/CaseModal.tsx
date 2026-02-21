import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface CaseModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
    selectedCase: any;
    startAutoSwipe: () => void;
}

export function CaseModal({ isModalOpen, setIsModalOpen, selectedCase, startAutoSwipe }: CaseModalProps) {
    return (
        <AnimatePresence>
            {isModalOpen && selectedCase && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => {
                        setIsModalOpen(false);
                        startAutoSwipe();
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0d1f] border border-white/10 rounded-3xl shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setIsModalOpen(false);
                                startAutoSwipe();
                            }}
                            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Header Image */}
                        <div className="relative w-full aspect-[16/9] md:aspect-[31/9]">
                            <Image
                                src={selectedCase.image}
                                alt={selectedCase.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1f] to-transparent" />
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 md:p-10">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                                {selectedCase.impact_headline}
                            </h3>
                            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                                {selectedCase.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* What we did */}
                                <div>
                                    <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
                                        O que fizemos
                                    </p>
                                    <ul className="space-y-3">
                                        {selectedCase.what_we_did.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 text-white/80">
                                                <CheckCircle2 className="w-5 h-5 text-[#2035ae] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Results highlight */}
                                <div>
                                    <div className="relative rounded-2xl p-6 overflow-hidden border border-[#2035ae]/20 h-full bg-[#2035ae]/5">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#2035ae]/10 to-[#9e67c5]/5 pointer-events-none" />
                                        <p className="relative text-sm font-semibold text-[#9e67c5] uppercase tracking-widest mb-3">
                                            Resultados
                                        </p>
                                        <p className="relative text-base md:text-lg text-white/90 leading-relaxed font-medium">
                                            {selectedCase.results}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex justify-start pt-6 border-t border-white/[0.06] cursor-pointer">
                                <a
                                    href={selectedCase.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[#2035ae] to-[#2a46c8] text-white hover:from-[#2a46c8] hover:to-[#3355d8] transition-all shadow-[0_0_20px_rgba(32,53,174,0.4)] hover:shadow-[0_0_30px_rgba(32,53,174,0.6)]"
                                >
                                    {selectedCase.cta}
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
