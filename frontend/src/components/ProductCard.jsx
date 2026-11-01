import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { generateImageURL } from "@/lib/utils";
import { useState } from "react";

export default function ProductCard({ product, index = 0 }) {
  const [loadedSrc, setLoadedSrc] = useState(null);
  const mainSrc = generateImageURL(product.image, 1600);
  const mainLoaded = loadedSrc === mainSrc;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`product-card-${product.id}`}
      className="group relative bg-white/[0.02]"
    >
      <Link
        to={`/products/${product.category}/${product.id}`}
        data-testid={`product-view-${product.id}`}
      >
        <div
          className="relative aspect-square overflow-hidden bg-[#050816] isolate"
          style={{ clipPath: "inset(0)" }}
        >
          {!mainLoaded && <div className="absolute inset-0 animate-pulse bg-white/5" />}

          {/* ONE scaling layer: image + gradient scale together */}
          <div className="absolute inset-0 transform-gpu will-change-transform transition-transform duration-700 group-hover:scale-110">
            <img
              key={mainSrc}
              src={mainSrc}
              onLoad={() => setLoadedSrc(mainSrc)}
              alt={`${product.name} ${index + 1}`}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover ${mainLoaded ? "opacity-100" : "opacity-0"}`}
            />
            <div className="pointer-events-none absolute -inset-1 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
          </div>
          <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#050816]/80 backdrop-blur text-[10px] uppercase tracking-widest text-white/80 border border-white/10">
            {product.type || product.category}
          </div>
        </div>
        <div className="p-5 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-white/55 line-clamp-2 mb-5 min-h-[2.5rem]">
            {product.short}
          </p>
          <div

            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-primary transition-colors"
          >
            View details
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
      <div className="pointer-events-none absolute inset-0 z-20 border border-white/10 group-hover:border-primary/50 transition-colors" />
    </motion.div>
  );
}

