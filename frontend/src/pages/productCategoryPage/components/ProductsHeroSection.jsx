import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowUpRight, ArrowRight, Home as HomeIcon, ChevronRight
} from "lucide-react";
import { generateImageURL } from "@/lib/utils";

export function ProductsHeroSection({ cat, allProducts }) {
    return (
        <section className="relative overflow-hidden min-h-[60vh] flex items-center">
            <div className="absolute inset-0">
                <img src={cat.heroImage} alt={cat.name} className="w-full h-full object-cover opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/85 to-transparent" />
                <div className="absolute inset-0 bg-grid opacity-25" />
            </div>

            <div className="container-pad relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
                <div>
                    {/* Breadcrumb */}
                    <nav className="flex items-center flex-wrap gap-2 text-xs text-white/50 mb-6" data-testid="breadcrumb">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-1.5 leading-none hover:text-white"
                        >
                            <HomeIcon className="h-3 w-3 shrink-0" />
                            <span>Home</span>
                        </Link>
                        <div className="flex gap-2 items-center">
                            <ChevronRight className="w-3 h-3" />
                            <Link to="/products" className="hover:text-white">Products</Link>
                        </div>
                        <div className="flex gap-2 items-center">
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-primary font-semibold">{cat.name}</span>
                        </div>
                    </nav>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="display text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight"
                    >
                        {cat.name.split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="text-primary">{cat.name.split(" ").slice(-1)}</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                        className="text-white/65 text-lg mt-6 max-w-lg leading-relaxed"
                    >
                        {cat.short}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                        className="text-white/65 text-lg mt-6 max-w-lg leading-relaxed"
                    >
                        {cat.description}
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                        <Link to="/quote" className="btn-primary" data-testid="category-hero-quote-btn">
                            Request a Quote <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <a href="#products" className="btn-secondary">
                            Browse products <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Layered 3D-ish arrangement */}
                <div className="relative h-[360px] hidden lg:block" data-testid="category-hero-image">
                    {allProducts.slice(0, 4).map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, scale: 0.6, x: 60 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute aspect-[3/4] w-48 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                            style={{
                                top: `${i * 30}px`,
                                right: `${i * 60}px`,
                                zIndex: 10 - i,
                                transform: `perspective(900px) rotateY(${-8 - i * 3}deg) rotateX(${4}deg)`,
                                boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 60px rgba(23, 203, 44, 0.25)",
                            }}
                        >
                            <img src={generateImageURL(p.image, 400)} alt={p.name} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
