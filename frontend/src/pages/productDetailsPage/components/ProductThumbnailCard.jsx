import { generateImageURL } from '@/lib/utils';
import React, { useState } from 'react'

export function ProductThumbnailCard({ setActiveImg, product, activeImg, img, i }) {
    const [loadedSrc, setLoadedSrc] = useState(null);
    const mainSrc = generateImageURL(img, 400);
    const mainLoaded = loadedSrc === mainSrc;

    return (
        <button
            key={i}
            onClick={() => setActiveImg(i)}
            data-testid={`thumb-${i}`}
            className={`relative h-16 w-16 shrink-0 overflow-hidden border-2 transition-colors lg:h-20 lg:w-20 
        sm:mr-1 md:mr-0 xl:mr-1 ${activeImg === i ? "border-primary" : "border-white/10 hover:border-white/30"
                }`}
        >
            {!mainLoaded && <div className="absolute inset-0 animate-pulse bg-white/5" />}

            <img
                key={mainSrc}
                src={mainSrc}
                onLoad={() => setLoadedSrc(mainSrc)}
                alt={`${product.name} ${i + 1}`}
                className={`h-full w-full object-cover ${mainLoaded ? "opacity-100" : "opacity-0"}`}
            />
        </button>
    )
}
