import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowUpRight
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { GALLERY } from "@/data/gallery";

export function GalleryPreview() {
    return (
        <section className="section-pad bg-[#0a0f25]/30">
            <div className="container-pad">
                <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
                    <SectionHeader eyebrow="Gallery" title="A look inside Vertex Packaging." />
                    <Link to="/gallery" className="btn-secondary" data-testid="view-gallery-btn">
                        View gallery <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {GALLERY.slice(0, 8).map((g, i) => (
                        <motion.div
                            key={g.id}
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className={`overflow-hidden ${i === 0 ? "md:row-span-2 md:col-span-2 aspect-square" : "aspect-square"}`}
                        >
                            <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
