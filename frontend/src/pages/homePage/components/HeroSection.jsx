import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowUpRight, ArrowRight,
    Sparkles
} from "lucide-react";
import QuickEnquiryForm from "@/components/QuickEnquiryForm";
import { STATS } from "@/data/site";
import { generateImageURL } from "@/lib/utils";

export function HeroSection() {
    return (
        <section className="relative min-h-screen pt-[72px] flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={generateImageURL("main", 1600)}
                    alt="hero_bg"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/85 via-[#050816]/60 to-[#050816]" />
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 bg-radial-green" />
            </div>

            <div className="container-pad relative grid lg:grid-cols-12 gap-12 py-20">
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-xs uppercase tracking-widest text-white/70 mb-8"
                        data-testid="hero-badge"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        ISO 9001 · FSSAI · BRC Certified
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1] tracking-tight"
                    >
                        Premium <span className="text-primary">flexible</span><br />
                        packaging engineered<br />for ambitious brands.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-white/65 text-lg mt-8 max-w-xl leading-relaxed"
                    >
                        Vertex manufactures high-barrier pouches, printed rolls and laminates from a 50,000 sq ft facility in Pune — trusted by 100+ brands across food, pharma, personal care and industrial sectors.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex flex-col sm:flex-row gap-4 mt-10"
                    >
                        <Link to="/quote" data-testid="hero-quote-btn" className="btn-primary">
                            Request Quote <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <Link to="/products" data-testid="hero-products-btn" className="btn-secondary">
                            Explore Products <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10"
                    >
                        {STATS.map((s) => (
                            <div key={s.label} data-testid={`hero-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                                <div className="display text-3xl md:text-4xl font-bold text-white">{s.value}</div>
                                <div className="text-xs uppercase tracking-widest text-white/40 mt-2">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="lg:col-span-5"
                >
                    {/* Enquiry Form */}
                    <QuickEnquiryForm />
                </motion.div>
            </div>
        </section>
    )
}
