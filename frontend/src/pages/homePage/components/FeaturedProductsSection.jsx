import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
    ArrowUpRight
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

export function FeaturedProductsSection() {
    return (
        <section className="section-pad bg-gradient-to-b from-transparent via-[#0a0f25]/30 to-transparent">
            <div className="container-pad">
                <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
                    <SectionHeader
                        eyebrow="Featured Products"
                        title="Engineered packaging formats."
                        testid="featured-products-header"
                    />
                    <Link to="/products" className="btn-secondary" data-testid="view-all-products-btn">
                        View all <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    data-testid="featured-products-slider"
                >
                    {PRODUCTS.map((p, i) => (
                        <SwiperSlide key={p.id}>
                            <ProductCard product={p} index={i} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}