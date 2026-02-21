"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CONTACT_CONTENT } from "@/models";
import { ContactViewStep } from "../useContactView";

interface ContactFormProps {
    step: ContactViewStep;
    contactForm: any; // ReturnType<typeof useContactForm>
    onBack: () => void;
}

export function ContactForm({ step, contactForm, onBack }: ContactFormProps) {
    if (step !== "form") return null;

    const {
        formData,
        isSubmitting,
        errors,
        handleInputChange,
        handleSubmit,
    } = contactForm;

    return (
        <section className="py-24 px-6 relative bg-transparent min-h-[80vh] flex flex-col justify-center">
            <div className="max-w-4xl mx-auto w-full">
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={onBack}
                    className="mb-8 flex items-center gap-2 cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-sm font-medium">Voltar</span>
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-2">
                        Envie uma{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-nivora-primary to-[#3b82f6]">
                            mensagem
                        </span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl">
                        Preencha os dados abaixo e entraremos em contato o mais breve possível.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_0_80px_rgba(32,53,174,0.08)]"
                >
                    <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-1 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder={CONTACT_CONTENT.fields.name}
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-0 py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-nivora-primary transition-colors"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={CONTACT_CONTENT.fields.email}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-0 py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-nivora-primary transition-colors"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder={CONTACT_CONTENT.fields.phone}
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-0 py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-nivora-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="needs"
                                        placeholder={CONTACT_CONTENT.fields.needs}
                                        value={formData.needs}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-0 py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-nivora-primary transition-colors"
                                    />
                                    {errors.needs && (
                                        <p className="text-red-500 text-sm mt-1">{errors.needs}</p>
                                    )}
                                </div>
                                <div className="flex justify-cente sm:justify-end mt-8">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-all group disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(32,53,174,0.15)]"
                                    >
                                        <span className="font-medium">
                                            {isSubmitting ? "Enviando..." : CONTACT_CONTENT.submitText}
                                        </span>
                                        <span className="w-10 h-10 rounded-full bg-nivora-primary flex items-center justify-center group-hover:bg-[#2a45be] transition-colors shadow-[0_0_15px_rgba(32,53,174,0.4)]">
                                            <ArrowRight className="w-5 h-5 text-white" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
