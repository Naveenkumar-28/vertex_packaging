import React from 'react'
import { motion } from 'framer-motion'
import { ZoomIn } from 'lucide-react'

export function ProductMainImageSection({ activeImg, mainLoaded, mainSrc, product, setLoadedSrc, setLightbox }) {
    return (
        <motion.div
            key={activeImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative order-1 sm:order-2 md:order-1 xl:order-2 aspect-[4/5] w-full min-w-0 overflow-hidden bg-[#0a0f25] group"
            data-testid="main-image"
        >
            {!mainLoaded && <div className="absolute inset-0 animate-pulse bg-white/5" />}
            <img
                key={mainSrc}
                src={mainSrc}
                alt={product.name}
                onLoad={() => setLoadedSrc(mainSrc)}
                className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-110 ${mainLoaded ? "opacity-100" : "opacity-0"
                    }`}
            />

            <button
                aria-label="Zoom image"
                className="absolute top-4 right-4 grid h-10 w-10 place-items-center border border-white/10 bg-[#050816]/70 backdrop-blur"
                onClick={() => setLightbox(true)}
            >
                <ZoomIn className="h-4 w-4" />
            </button>
        </motion.div>
    )
}
