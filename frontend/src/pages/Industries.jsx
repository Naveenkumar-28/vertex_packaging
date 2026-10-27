import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { INDUSTRIES } from "@/data/industries";
import { generateImageURL } from "@/lib/utils";

export default function Industries() {
  return (
    <div data-testid="industries-page" className="pt-24 pb-24">
      <section className="container-pad pt-12">
        <SectionHeader
          eyebrow="Industries"
          title="Trusted across categories."
          subtitle="From food and pharma to home care and industrial — Vertex engineers packaging for the world's most demanding sectors."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group relative overflow-hidden border border-white/[0.06] hover:border-primary/40 transition-colors h-full"
              data-testid={`industry-card-${ind.id}`}
            >
              <Link to={`/industries/${ind.id}`}
                className="h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={generateImageURL(ind.id, 800)}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 relative">
                  <div className="absolute inset-0 card-bg-radial-green"></div>
                  <div className="text-xs uppercase tracking-widest text-primary mb-2 font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3 className="display text-2xl md:text-3xl font-bold mb-3">
                    {ind.name}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-3">
                    {ind.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {ind.products.slice(0, 4).map((p) => (
                      <span
                        key={p}
                        className="text-xs px-3 py-1 border border-white/10 text-white/70"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    Explore Products <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}