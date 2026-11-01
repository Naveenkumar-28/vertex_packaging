import { generateImageURL } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export function LightBoxSection({ lightbox, setLightbox, activeImg, product }) {
    const [loadedSrc, setLoadedSrc] = useState(null);
    const mainSrc = generateImageURL(product.images[activeImg], 1600)
    const mainLoaded = loadedSrc === mainSrc;

    useEffect(() => {
        if (!lightbox) return;

        const html = document.documentElement;
        const body = document.body;
        const prevHtml = html.style.overflow;
        const prevBody = body.style.overflow;

        html.style.overflow = "hidden";
        body.style.overflow = "hidden";

        const onKey = (e) => e.key === "Escape" && setLightbox(false);
        document.addEventListener("keydown", onKey);

        return () => {
            html.style.overflow = prevHtml;
            body.style.overflow = prevBody;
            document.removeEventListener("keydown", onKey);
        };
    }, [lightbox]);

    return (
        <AnimatePresence>
            {lightbox && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] lightbox-overlay grid place-items-center"
                    onClick={() => setLightbox(false)}
                    data-testid="lightbox"
                >
                    <button onClick={() => setLightbox(false)} className="absolute top-6 right-6 w-12 h-12 grid place-items-center border border-white/20 text-white hover:border-primary transition-colors duration-75" data-testid="lightbox-close">
                        <X />
                    </button>
                    {/* {mainLoaded && <div className="absolute inset-0 animate-pulse bg-white/5" />} */}
                    {!mainLoaded && <div className='absolute border-4 border-t-transparent border-primary animate-spin h-12 w-12 rounded-full'></div>}
                    <motion.img
                        key={mainSrc}
                        initial={{ scale: 0.92 }} animate={{ scale: 1 }}
                        src={mainSrc} alt={product.name}
                        className={`max-w-[92vw] max-h-[88vh] object-contain ${mainLoaded ? "opacity-100" : "opacity-0"}`}
                        onClick={(e) => e.stopPropagation()}
                        onLoad={() => setLoadedSrc(mainSrc)}
                        loading='lazy'
                    />
                    {/* <img
                        key={mainSrc}
                        src={mainSrc}
                        onLoad={() => setLoadedSrc(mainSrc)}
                        alt={`${p.name} ${i + 1}`}
                        loading="lazy"
                        className={`absolute inset-0 h-full w-full object-cover ${mainLoaded ? "opacity-100" : "opacity-0"}`}
                    /> */}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
