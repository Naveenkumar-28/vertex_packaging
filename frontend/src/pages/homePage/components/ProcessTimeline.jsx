import { motion } from "framer-motion";
import {
    ShieldCheck, Truck, Sparkles, Users, PenTool, Printer, Layers, Package
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { PROCESS_STEPS } from "@/data/site";
const PROCESS_ICONS = { Users, PenTool, Printer, Layers, Package, ShieldCheck, Truck };

export function ProcessTimeline() {
    return (
        <section className="section-pad">
            <div className="container-pad">
                <SectionHeader
                    eyebrow="Our Process"
                    title="From brief to dispatch in 7 steps."
                    align="center"
                    testid="process-header"
                />

                {/* Desktop / tablet — connected stepper */}
                <div className="hidden md:block max-w-7xl mx-auto">
                    <div className="relative">
                        {/* dotted base connecting line */}
                        <div className="absolute top-10 left-[7%] right-[7%] h-px border-t-2 border-dashed border-white/15" />
                        <motion.div
                            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            style={{ transformOrigin: "left" }}
                            className="absolute top-10 left-[7%] right-[7%] h-[2px] bg-gradient-to-r from-primary via-primary/60 to-primary/20"
                        />

                        <div className="relative grid grid-cols-7 gap-2">
                            {PROCESS_STEPS.map((p, i) => {
                                const Icon = PROCESS_ICONS[p.icon] || Sparkles;
                                return (
                                    <motion.div
                                        key={p.step}
                                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: i * 0.12 }}
                                        className="flex flex-col items-center text-center group"
                                        data-testid={`process-step-${i}`}
                                    >
                                        <div className="relative">
                                            {/* outer pulse ring */}
                                            <span className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <motion.div
                                                whileHover={{ scale: 1.08, rotate: 4 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                className="relative w-20 h-20 rounded-full grid place-items-center bg-[#050816] border-2 border-primary text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-[0_0_30px_rgba(38,136,43,0.25)]"
                                            >
                                                <Icon className="w-7 h-7" />
                                            </motion.div>
                                            {/* step number badge */}
                                            <span className="absolute -top-1 -right-1 w-7 h-7 grid place-items-center rounded-full bg-primary text-white text-[11px] font-bold border-2 border-[#050816]">
                                                {p.step}
                                            </span>
                                        </div>
                                        <h4 className="display font-semibold text-base mt-5 mb-2">{p.title}</h4>
                                        <p className="text-[11px] text-white/50 leading-relaxed px-1">{p.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile — vertical stepper */}
                <div className="md:hidden max-w-md mx-auto">
                    <div className="relative pl-20">
                        <div className="absolute left-8 top-10 bottom-10 w-[2px] border-l-2 border-dashed border-white/15" />
                        <motion.div
                            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            style={{ transformOrigin: "top" }}
                            className="absolute left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-primary via-primary/60 to-primary/20"
                        />
                        {PROCESS_STEPS.map((p, i) => {
                            const Icon = PROCESS_ICONS[p.icon] || Sparkles;
                            return (
                                <motion.div
                                    key={p.step}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    className="relative mb-8 last:mb-0"
                                    data-testid={`process-step-mobile-${i}`}
                                >
                                    <div className="absolute -left-20 top-0">
                                        <div className="relative w-16 h-16 rounded-full grid place-items-center bg-[#050816] border-2 border-primary text-primary shadow-[0_0_24px_rgba(38,136,43,0.25)]">
                                            <Icon className="w-5 h-5" />
                                            <span className="absolute -top-1 -right-1 w-6 h-6 grid place-items-center rounded-full bg-primary text-white text-[10px] font-bold border-2 border-[#050816]">
                                                {p.step}
                                            </span>
                                        </div>
                                    </div>
                                    <h4 className="display font-semibold text-base mb-1">{p.title}</h4>
                                    <p className="text-xs text-white/55 leading-relaxed">{p.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}