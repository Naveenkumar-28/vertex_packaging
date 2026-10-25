
import { BACKEND_URL } from "@/constants";
import SectionHeader from "../../../components/SectionHeader";
import { generateImageURL } from "@/lib/utils";



const PRODUCTS = [
    {
        name: "Stand-Up Pouches",
        image: "modern_matte_white_stand_up_pouch",
    },
    {
        name: "Roll Film",
        image: "industrial_flexible_packaging_printed",
    },
    {
        name: "Laminated Pouches",
        image: "multi_layer_laminated_pouch_packaging",
    },
    {
        name: "Center Seal Bags",
        image: "center_seal_bag_pillow_pouch_back",
    },
    {
        name: "Spout Pouches",
        image: "sanitizer-spout-pouch",
    },
    {
        name: "Vacuum Packaging",
        image: "vacuum_packaging_pouch",
    },
    {
        name: "Zipper Pouches",
        image: "premium_kraft_paper_and_matte_white",
    },
    {
        name: "Packaging Films",
        image: "high_barrier_packaging_film",
    },
];

function ProductRow({ reverse = false }) {
    // Repeat products to create a seamless scrolling loop
    const items = [...PRODUCTS, ...PRODUCTS];

    return (
        <div className="relative overflow-hidden group">
            {/* Left and right fade effects */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-[#050816] to-transparent" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-[#050816] to-transparent" />

            <div
                className={`flex w-max gap-4 md:gap-6 ${reverse ? "animate-marquee-rev" : "animate-marquee"
                    } `}
            >
                {items.map((product, index) => (
                    <div
                        key={`${product.name}-${index}`}
                        className="group/card w-[220px] md:w-[280px] shrink-0 overflow-hidden border border-white/[0.08] bg-white/[0.03] transition-colors hover:border-primary/40"
                    >
                        <div className="aspect-[4/3] overflow-hidden bg-white/[0.04]">
                            <img
                                src={generateImageURL(product.image, 800)}
                                alt={product.name}
                                loading="lazy"
                                draggable="false"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                            />
                        </div>

                        <div className="flex items-center justify-between gap-3 p-4">
                            <h3 className="text-sm md:text-base font-semibold text-white/90">
                                {product.name}
                            </h3>

                            <span className="text-primary text-lg" aria-hidden="true">
                                ↗
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ProductsMarquee() {
    return (
        <section
            className="section-pad relative overflow-hidden bg-[#050816]"
            data-testid="products-marquee-section"
        >
            <div className="container-pad mb-10 md:mb-12">
                <SectionHeader
                    eyebrow="Our Products"
                    title="Packaging that moves your brand forward."
                    subtitle="Explore our flexible packaging solutions for food, pharma, personal care, home care, textiles, fertilizers and industrial applications."
                    testid="products-marquee-header"
                />
            </div>

            <div className="space-y-5">
                <ProductRow />
                <ProductRow reverse />
            </div>
        </section>
    );
}
