import { motion } from "framer-motion";

export function SectionHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
        >
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
                    Projetos que Transformam
                </span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-300">
                    Ideias em Resultados
                </span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
                Não entregamos apenas código. Construímos as ferramentas que impulsionam o seu negócio para o próximo nível.
            </p>
        </motion.div>
    );
}
