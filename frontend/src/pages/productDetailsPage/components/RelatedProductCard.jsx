import { generateImageURL } from '@/lib/utils'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function RelatedProductCard({ product: p, i }) {
    const [loadedSrc, setLoadedSrc] = useState(null);
    const mainSrc = generateImageURL(p.image, 800);
    const mainLoaded = loadedSrc === mainSrc;
    return (
        <Link
            to={`/products/${p.category}/${p.id}`}
            className="group relative block bg-[#050816] overflow-hidden"
            data-testid={`related-${p.id}`}
        >
            {/* fixed clipping frame: never transforms */}
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
                        alt={`${p.name} ${i + 1}`}
                        loading="lazy"
                        className={`absolute inset-0 h-full w-full object-cover ${mainLoaded ? "opacity-100" : "opacity-0"}`}
                    />
                    <div className="pointer-events-none absolute -inset-1 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                </div>
            </div>

            <div className="p-5">
                <div className="text-[10px] uppercase tracking-widest text-primary mb-2 font-semibold">{p.type}</div>
                <div className="display text-base font-bold group-hover:text-primary transition-colors">{p.name}</div>
            </div>

            {/* border overlay: drawn LAST, on top of the image, so nothing can hide it */}
            <div className="pointer-events-none absolute inset-0 z-20 border border-white/10 group-hover:border-primary/50 transition-colors" />
        </Link>
    )
}