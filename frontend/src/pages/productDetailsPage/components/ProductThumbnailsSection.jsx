import React from 'react'
import { ProductThumbnailCard } from '.'

export function ProductThumbnailsSection({ images, setActiveImg, product, activeImg }) {
    return (
        <div
            className="
    thumb-scroll
    order-2 sm:order-1 md:order-2 xl:order-1
    flex gap-3 shrink-0
    flex-row overflow-x-auto overflow-y-hidden pb-2
    sm:flex-col sm:overflow-y-auto sm:overflow-x-hidden sm:pb-0 sm:max-h-[600px] sm:w-auto
    md:flex-row md:overflow-x-auto md:overflow-y-hidden md:pb-2 md:max-h-none md:w-full
    xl:flex-col xl:overflow-y-auto xl:overflow-x-hidden xl:pb-0 xl:max-h-[600px] xl:w-auto
  "
            data-testid="thumbnails"
        >
            {images.map((img, i) => {
                return <ProductThumbnailCard
                    i={i}
                    img={img}
                    key={product.id + i}
                    product={product}
                    setActiveImg={setActiveImg}
                    activeImg={activeImg}
                />
            }
            )}
        </div>
    )
}
