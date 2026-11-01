import { generateImageURL } from '@/lib/utils';
import React, { useState } from 'react'

function IndustryCategoryImageSection({ industry }) {
    const [loadedSrc, setLoadedSrc] = useState(null);
    const mainSrc = generateImageURL(industry.id, 1200);
    const mainLoaded = loadedSrc === mainSrc;
    return (
        <div className="relative aspect-[16/10] order-1 lg:order-2 overflow-hidden border border-white/[0.08]">
            {!mainLoaded && <div className="absolute inset-0 animate-pulse bg-white/5" />}
            <img
                key={mainSrc}
                src={mainSrc}
                alt={`${industry.name} image`}
                onLoad={() => setLoadedSrc(mainSrc)}
                loading='lazy'
                className={`absolute inset-0 h-full w-full object-cover ${mainLoaded ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    )
}

export default IndustryCategoryImageSection