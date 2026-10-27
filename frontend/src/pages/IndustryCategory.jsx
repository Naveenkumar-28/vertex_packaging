import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, Beaker, ChevronRight, Droplets, HomeIcon, Leaf, Recycle, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { INDUSTRIES } from "@/data/industries";
import ProductsFilterSection from "@/components/ProductsFilterSection";
import { motion } from 'framer-motion'
import { generateImageURL } from "@/lib/utils";

const BENEFIT_ICONS = [ShieldCheck, Sparkles, Leaf, Droplets, Recycle, Beaker];

export default function IndustryCategory() {
    const { slug } = useParams();

    const industry = INDUSTRIES.find(
        (item) => item.id.toLocaleLowerCase() === slug.toLocaleLowerCase()
    )

    if (!industry) {
        return <Navigate to="/industries" replace />;
    }

    return (
        <div
            data-testid="industry-details-page"
            className="pt-[72px]"
        >
            {/* INDUSTRY HERO */}
            <section className="container-pad pt-12">
                <div className="">
                    <nav className="flex items-center flex-wrap gap-2 text-xs text-white/50" data-testid="breadcrumb">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-1.5 leading-none hover:text-white">
                            <HomeIcon className="h-3 w-3 shrink-0" />
                            <span>Home</span>
                        </Link>
                        <div className="flex gap-2 items-center">
                            <ChevronRight className="w-3 h-3" />
                            <Link to="/industries" className="hover:text-white">Industries</Link>
                        </div>
                        <div className="flex gap-2 items-center">
                            <ChevronRight className="w-3 h-3" />
                            <span className=" text-primary font-semibold">{industry?.name}</span>
                        </div>
                    </nav>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 pt-8">
                    <div>
                        <SectionHeader
                            eyebrow="Industry Solutions"
                            title={industry.name}
                            subtitle={industry.description}
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="text-white/60 text-base md:text-lg max-w-2xl -mt-8 md:-mt-12"
                        >
                            Explore packaging solutions designed for your
                            industry's product, protection and branding needs.
                        </motion.p>

                        <a
                            href="#industry-products"
                            className="btn-primary inline-flex items-center gap-2 mt-6"
                        >
                            Explore Products
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="aspect-[16/10] overflow-hidden border border-white/[0.08]">
                        <img
                            src={generateImageURL(industry.id, 1200)}
                            alt={industry.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* BENEFITS STRIP */}
            <section className="container-pad py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                        "Custom Sizes",
                        "Flexible Materials",
                        "Custom Printing",
                        "Industry-Specific Solutions",
                    ].map((b, i) => {
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

            {/* PRODUCTS AND FILTERS */}
            <ProductsFilterSection industry={industry} />

            {/* BOTTOM CTA */}
            <section className="container-pad py-16">
                <div className="glass-strong p-10 md:p-14 relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-orange opacity-50" />

                    <div className="relative grid md:grid-cols-2 gap-6 items-center">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-semibold">
                                Custom Packaging
                            </p>

                            <h3 className="display text-3xl md:text-4xl font-bold leading-tight">
                                Need packaging for{" "}
                                <span className="text-primary">
                                    {industry.name}?
                                </span>
                            </h3>

                            <p className="text-white/60 mt-4">
                                Tell us about your product and packaging
                                requirements.
                            </p>
                        </div>

                        <div className="flex md:justify-end">
                            <Link
                                to="/quote"
                                className="btn-primary inline-flex items-center gap-2"
                                data-testid="industry-cta-quote"
                            >
                                Request a Quote
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

