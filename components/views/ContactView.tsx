"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CONTACT_CONTENT } from "@/models";
import { useContactForm } from "@/viewmodels";

export function ContactView() {
  const {
    formData,
    selectedInterests,
    budget,
    isSubmitting,
    errors,
    handleInputChange,
    toggleInterest,
    setBudget,
    handleSubmit,
  } = useContactForm();

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            <span className="relative">
              {CONTACT_CONTENT.headline}
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,4 Q25,0 50,4 T100,4" stroke="#ef4444" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {CONTACT_CONTENT.subheadline}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_0_80px_rgba(32,53,174,0.15)]"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label className="block text-gray-900 font-medium mb-4">
                Área de Interesse
              </label>
              <div className="flex flex-wrap gap-3">
                {CONTACT_CONTENT.interestChips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => toggleInterest(chip)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedInterests.includes(chip)
                        ? "bg-[#2035ae] text-white shadow-[0_0_15px_rgba(32,53,174,0.4)]"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-[#2035ae]/50"
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
              {errors.interests && (
                <p className="text-red-500 text-sm mt-2">{errors.interests}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={CONTACT_CONTENT.fields.name}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2035ae] transition-colors"
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
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2035ae] transition-colors"
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
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2035ae] transition-colors"
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
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2035ae] transition-colors"
                  />
                  {errors.needs && (
                    <p className="text-red-500 text-sm mt-1">{errors.needs}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-gray-900 font-medium">
                      {CONTACT_CONTENT.budget.label}
                    </label>
                    <span className="px-3 py-1 bg-[#2035ae]/10 rounded-full text-sm font-medium text-[#2035ae]">
                      {budget}K
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min={CONTACT_CONTENT.budget.min}
                      max={CONTACT_CONTENT.budget.max}
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-purple"
                      style={{
                        background: `linear-gradient(to right, #2035ae 0%, #9e67c5 ${(budget - 10) / 90 * 100}%, #e5e7eb ${(budget - 10) / 90 * 100}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-all group disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(32,53,174,0.15)]"
                  >
                    <span className="font-medium">
                      {isSubmitting ? "Enviando..." : CONTACT_CONTENT.submitText}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-[#2035ae] flex items-center justify-center group-hover:bg-[#2a45be] transition-colors shadow-[0_0_15px_rgba(32,53,174,0.4)]">
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
