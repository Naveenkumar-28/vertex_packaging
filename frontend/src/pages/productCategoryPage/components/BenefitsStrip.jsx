import React from 'react'
import { motion } from "framer-motion";
import { Beaker, Droplets, Leaf, Recycle, ShieldCheck, Sparkles } from 'lucide-react';
const BENEFIT_ICONS = [ShieldCheck, Sparkles, Leaf, Droplets, Recycle, Beaker];

export function BenefitsStrip({ cat }) {
    return (
        <section className="container-pad py-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {cat.benefits.map((b, i) => {
                    const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
                    return (
                        <motion.div
                            key={b}
                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="glass p-4 flex flex-col items-center text-center group hover:border-primary/50 transition-colors"
                            data-testid={`benefit-${i}`}
                        >
                            <div className="w-10 h-10 grid place-items-center bg-primary/10 text-primary border border-primary/20 mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Icon className="w-4 h-4" />
                            </div>
                            <div className="text-xs font-semibold leading-tight">{b}</div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    )
}