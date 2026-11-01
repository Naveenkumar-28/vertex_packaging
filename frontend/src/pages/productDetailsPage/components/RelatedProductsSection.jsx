import SectionHeader from '@/components/SectionHeader'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { RelatedProductCard } from '.'
import { Autoplay } from 'swiper/modules'

export function RelatedProductsSection({ related }) {
    return (
        <section className="container-pad py-16">
            <SectionHeader eyebrow="Related products" title="You may also like." />
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1.2}
                spaceBetween={20}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={related.length > 4}
                breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
                data-testid="related-slider"
            >
                {related.map((p, i) => (
                    <SwiperSlide key={p.id + i}>
                        <RelatedProductCard i={i} product={p} key={p.id + i} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
