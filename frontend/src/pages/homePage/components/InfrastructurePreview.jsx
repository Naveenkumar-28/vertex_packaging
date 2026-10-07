import { Link } from "react-router-dom";
import {
    ArrowUpRight
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export function InfrastructurePreview() {
    return (
        <section className="section-pad bg-[#0a0f25]/30">
            <div className="container-pad grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="relative overflow-hidden aspect-[4/5] border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=1600"
                            alt="factory"
                            className="w-full h-full object-cover"
                        />
                        {/* <button className="absolute inset-0 grid place-items-center group" data-testid="infra-video-trigger">
                <span className="w-20 h-20 rounded-full bg-primary grid place-items-center group-hover:scale-110 transition-transform shadow-2xl shadow-primary/40">
                  <Play className="w-7 h-7 text-white ml-1" />
                </span>
              </button> */}
                    </div>
                    <div className="absolute -bottom-6 -right-6 glass-strong p-5 hidden md:block">
                        <div className="display text-4xl font-bold text-primary">10,000</div>
                        <div className="text-xs uppercase tracking-widest text-white/60">Sq Ft Facility</div>
                    </div>
                </div>
                <div>
                    <SectionHeader
                        eyebrow="Infrastructure"
                        title="A 50,000 sq ft facility built for scale."
                        subtitle="State-of-the-art rotogravure presses, solvent-less lamination, multi-format pouch making and an in-house quality lab — all under one roof."
                    />
                    <ul className="space-y-3 mb-8">
                        {[
                            "Production machines including 8-colour rotogravure",
                            "Solvent-less lamination for sustainability",
                            "Multi-format pouch making lines",
                            "In-house quality lab with OTR & WVTR testing",
                        ].map((f) => (
                            <li key={f} className="flex items-start gap-3 text-white/70 text-sm">
                                <span className="w-1.5 h-1.5 bg-primary mt-2 shrink-0" />
                                {f}
                            </li>
                        ))}
                    </ul>
                    <Link to="/infrastructure" data-testid="infra-cta" className="btn-primary">
                        Explore facility <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}