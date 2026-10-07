import { motion } from "framer-motion";
import {
    ShieldCheck, Cog, Edit3, Truck, Leaf, Headphones,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { WHY_US } from "@/data/site";

const ICONS = { shield: ShieldCheck, cog: Cog, edit: Edit3, truck: Truck, leaf: Leaf, headphones: Headphones };

export function WhyChooseUs() {
    return (
        <section className="section-pad">
            <div className="container-pad">
                <SectionHeader
                    eyebrow="Why Vertex Packaging"
                    title="Six reasons brands choose us."
                    testid="why-us-header"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {WHY_US.map((w, i) => {
                        const Icon = ICONS[w.icon] || ShieldCheck;
                        return (
                            <motion.div
                                key={w.title}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="glass p-7 hover:border-primary/40 transition-colors group"
                                data-testid={`why-card-${i}`}
                            >
                                <div className="w-12 h-12 grid place-items-center bg-primary/10 text-primary border border-primary/20 mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="display text-lg font-bold mb-2">{w.title}</h3>
                                <p className="text-sm text-white/55 leading-relaxed">{w.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}