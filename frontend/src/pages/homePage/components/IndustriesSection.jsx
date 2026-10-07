import SectionHeader from "@/components/SectionHeader";
import { INDUSTRIES } from "@/data/industries";
import { motion } from "framer-motion";

export function IndustriesSection() {
    return (
        <section className="section-pad relative">
            <div className="container-pad">
                <SectionHeader
                    eyebrow="Industries We Serve"
                    title="Packaging that fits every category."
                    subtitle="Engineered for brands across food, pharma, personal care, home care, textile and industrial sectors."
                    testid="industries-header"
                />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                    {INDUSTRIES.map((ind, i) => (
                        <motion.div
                            key={ind.id}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className="group relative aspect-[4/5] overflow-hidden border border-white/[0.06] hover:border-primary/40 transition-colors"
                            data-testid={`home-industry-${ind.id}`}
                        >
                            <img src={ind.image} alt={ind.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
                            <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                                <div className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">0{i + 1}</div>
                                <h3 className="display text-xl md:text-2xl font-bold">{ind.name}</h3>
                                <p className="text-sm text-white/60 mt-2 max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500">
                                    {ind.short}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}