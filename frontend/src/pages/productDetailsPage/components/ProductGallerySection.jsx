import React, { useState } from 'react'
import { ProductMainImageSection, ProductThumbnailsSection } from '.'
import { generateImageURL } from '@/lib/utils';

export function ProductGallerySection({ activeImg, product, setLightbox, setActiveImg }) {
    const [loadedSrc, setLoadedSrc] = useState(null);

    const images = product.images?.length ? product.images : [product.image];
    const mainSrc = generateImageURL(images[activeImg], 1200);
    const mainLoaded = loadedSrc === mainSrc;

    return (
        <div className="min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col xl:flex-row">
                {/* MAIN IMAGE */}
                <ProductMainImageSection
                    activeImg={activeImg}
                    mainLoaded={mainLoaded}
                    mainSrc={mainSrc}
                    product={product}
                    setLightbox={setLightbox}
                    setLoadedSrc={setLoadedSrc}

                />

                {/* THUMBNAILS */}
                <ProductThumbnailsSection
                    activeImg={activeImg}
                    images={images}
                    product={product}
                    setActiveImg={setActiveImg} />
            </div>
        </div>
    )
}
