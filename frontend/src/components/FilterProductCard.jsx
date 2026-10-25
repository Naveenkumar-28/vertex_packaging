import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { generateImageURL } from '@/lib/utils';

function FilterProductCard({ product, index }) {
    return (
        <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                margin: "-50px",
            }}
            transition={{
                delay: (index % 3) * 0.06,
            }}
            className="group bg-white/[0.02] border border-white/[0.06] hover:border-primary/50 transition-colors"
            data-testid={`industry-product-${product.id}`}
        >
            <Link
                to={`/products/${product.category}/${product.id}`}
                className="block"
            >
                <div className="aspect-square overflow-hidden bg-[#0a0f25]">
                    <img
                        src={generateImageURL(product.image, 800)}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>

                <div className="p-5">
                    <div className="text-[10px] uppercase tracking-widest text-primary mb-2 font-semibold">
                        {product.type}
                    </div>

                    <h3 className="display text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                    </h3>

                    <p className="text-sm text-white/55 leading-relaxed mb-4 line-clamp-3">
                        {product.short}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:text-primary transition-colors">
                        View details
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                </div>
            </Link>
        </motion.article>
    )
}

export default FilterProductCard