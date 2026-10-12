
import { useState, useMemo, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight, ChevronRight, HomeIcon } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { INDUSTRIES } from "@/data/industries";
import { PRODUCTS } from "@/data/products";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"; //

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";



const FILTER_APPLICATIONS = ["Coffee", "Tea", "Dry Fruits", "Snacks", "Pet Food", "Pharma", "Confectionery", "Beverages", "Personal Care", "Frozen Food"];

const FILTER_MATERIALS = ["PET / PE", "PET / MET PET / PE", "BOPP / PE", "PET / AL Foil / PE", "PET / NYLON / PE", "Kraft"];

const FILTER_FEATURES = ["Zip Lock", "Window", "Matte Finish", "Gloss Finish", "Spout"];

const PER_PAGE = 9;

export default function IndustryDetails() {
    const { slug } = useParams();

    const industry = INDUSTRIES.find(
        (item) => item.id.toLocaleLowerCase() === slug.toLocaleLowerCase()
    )

    const allProducts = useMemo(() => {
        if (!industry) return [];

        return PRODUCTS.filter((product) =>
            (product.keyIndustries || []).some(
                (id) => id === industry.id
            )
        );
    }, [industry]);


    const [apps, setApps] = useState([]);
    const [mats, setMats] = useState([]);
    const [feats, setFeats] = useState([]);
    const [sort, setSort] = useState("popular");
    const [page, setPage] = useState(1);

    const [openSections, setOpenSections] = useState({ app: true, mat: true, feat: true });

    const filtered = useMemo(() => {
        let list = allProducts.filter((product) => {
            if (apps.length && !apps.includes(product.application)) {
                return false;
            }

            if (mats.length && !mats.includes(product.material)) {
                return false;
            }

            if (feats.length && !feats.every((feature) => (product.features || []).includes(feature) || (product.finishes || []).includes(feature))) {
                return false;
            }

            return true;
        });

        if (sort === "az") {
            list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        }

        if (sort === "latest") {
            list = [...list].reverse();
        }

        return list;
    }, [allProducts, apps, mats, feats, sort]);

    useEffect(() => {
        setPage(1);
    }, [apps, mats, feats, sort, slug]);

    if (!industry) {
        return <Navigate to="/industries" replace />;
    }

    const pages = Math.max(
        1,
        Math.ceil(filtered.length / PER_PAGE)
    );

    const current = filtered.slice(
        (page - 1) * PER_PAGE,
        page * PER_PAGE
    );

    const toggleArr = (arr, setter, value) => {
        setter(
            arr.includes(value)
                ? arr.filter((item) => item !== value)
                : [...arr, value]
        );
    };

    const resetFilters = () => {
        setApps([]);
        setMats([]);
        setFeats([]);
        setSort("popular");
        setPage(1);
    };

    return (
        <div
            data-testid="industry-details-page"
            className="pt-[72px]"
        >
            {/* INDUSTRY HERO */}
            <section className="container-pad pt-12">
                <div className="">
                    <nav className="flex items-center gap-2 text-xs text-white/50" data-testid="breadcrumb">
                        <Link to="/" className="inline-flex items-center gap-1.5 hover:text-white"><HomeIcon className="w-3 h-3" /> Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/industries" className="hover:text-white">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to={`/products/${slug}`} className="hover:text-white">{industry?.name}</Link>
                    </nav>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 pt-8">
                    <div>
                        <SectionHeader
                            eyebrow="Industry Solutions"
                            title={industry.name}
                            subtitle={industry.description}
                        />

                        <p className="text-white/60 leading-relaxed mt-4">
                            Explore packaging solutions designed for your
                            industry's product, protection and branding needs.
                        </p>

                        <a
                            href="#industry-products"
                            className="btn-primary inline-flex items-center gap-2 mt-6"
                        >
                            Explore Products
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="aspect-[16/10] overflow-hidden border border-white/[0.08]">
                        <img
                            src={industry.image}
                            alt={industry.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* BENEFITS STRIP */}
            <section className="container-pad pb-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.08]">
                    {[
                        "Custom Sizes",
                        "Flexible Materials",
                        "Custom Printing",
                        "Industry-Specific Solutions",
                    ].map((benefit) => (
                        <div
                            key={benefit}
                            className="p-4 md:p-5 text-center border-r border-b lg:border-b-0 border-white/[0.08] last:border-r-0"
                        >
                            <span className="text-sm font-semibold text-white/80">
                                {benefit}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRODUCTS AND FILTERS */}
            <section
                id="industry-products"
                className="container-pad py-12 relative"
            >
                <div className="mb-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2 font-semibold">
                        Packaging Solutions
                    </p>

                    <h2 className="display text-3xl md:text-4xl font-bold">
                        Products for {industry.name}
                    </h2>

                    <p className="text-white/55 text-sm mt-3">
                        Browse related products and refine the results
                        using the filters.
                    </p>
                </div>
                <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start relative">

                    {/* FILTER SIDEBAR */}
                    <aside
                        className="glass p-5 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto z-10"
                        data-testid="industry-sidebar"
                    >
                        <h3 className="display text-base font-bold mb-4">
                            Filters
                        </h3>


                        {/* Radix Accordion with multiple items allowed open simultaneously */}
                        <Accordion type="multiple" defaultValue={["application", "material", "features"]} className="w-full">

                            {/* Application Filter */}
                            <AccordionItem value="application" data-testid="filter-application" className="border-white/10">
                                <AccordionTrigger className="text-sm font-semibold hover:no-underline py-3">
                                    Application
                                </AccordionTrigger>
                                <AccordionContent className="pt-1 pb-3 flex flex-col gap-2">
                                    {FILTER_APPLICATIONS.map((application) => (
                                        <CheckboxRow
                                            key={application}
                                            label={application}
                                            checked={apps.includes(application)}
                                            onChange={() =>
                                                toggleArr(
                                                    apps,
                                                    setApps,
                                                    application
                                                )
                                            }
                                            testid={`app-${application
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                        />
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Material Filter */}
                            <AccordionItem value="material" data-testid="filter-material" className="border-white/10">
                                <AccordionTrigger className="text-sm font-semibold hover:no-underline py-3">
                                    Material
                                </AccordionTrigger>
                                <AccordionContent className="pt-1 pb-3 flex flex-col gap-2">
                                    {FILTER_MATERIALS.map((material) => (
                                        <CheckboxRow
                                            key={material}
                                            label={material}
                                            checked={mats.includes(material)}
                                            onChange={() =>
                                                toggleArr(mats, setMats, material)
                                            }
                                            testid={`mat-${material
                                                .toLowerCase()
                                                .replace(/[^a-z0-9]+/g, "-")}`}
                                        />
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Features Filter */}
                            <AccordionItem value="features" data-testid="filter-feature" className="border-white/10">
                                <AccordionTrigger className="text-sm font-semibold hover:no-underline py-3">
                                    Features
                                </AccordionTrigger>
                                <AccordionContent className="pt-1 pb-3 flex flex-col gap-2">
                                    {FILTER_FEATURES.map((feature) => (
                                        <CheckboxRow
                                            key={feature}
                                            label={feature}
                                            checked={feats.includes(feature)}
                                            onChange={() =>
                                                toggleArr(feats, setFeats, feature)
                                            }
                                            testid={`feat-${feature
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                        />
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>

                        <button
                            onClick={resetFilters}
                            data-testid="filters-reset"
                            className="text-xs text-white/50 hover:text-primary mt-4 block"
                        >
                            Reset all filters
                        </button>
                    </aside>

                    {/* PRODUCT LIST */}
                    <div className="min-h-[400px]">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                            <div
                                className="text-sm text-white/55"
                                data-testid="results-count"
                            >
                                {filtered.length} products
                            </div>
                            <Select value={sort} onValueChange={setSort}>
                                <SelectTrigger
                                    data-testid="sort-select"
                                    className="w-[160px] bg-[#0a0f25]/60 border border-white/10 px-4 py-2 text-sm text-white focus:border-primary focus:ring-0 focus:outline-none"
                                >
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#0a0f25] border-white/10 text-white">
                                    <SelectItem value="popular">Popular</SelectItem>
                                    <SelectItem value="latest">Latest</SelectItem>
                                    <SelectItem value="az">A–Z</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {current.length === 0 ? (
                            <div
                                className="glass p-12 text-center text-white/60"
                                data-testid="no-products"
                            >
                                No products match your filters.
                                <button
                                    onClick={resetFilters}
                                    className="block mx-auto mt-4 text-primary hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        ) : (
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                                data-testid="industry-products-grid"
                            >
                                {current.map((product, index) => (
                                    <motion.article
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{
                                            once: true,
                                            margin: "-50px",
                                        }}
                                        transition={{
                                            delay: (index % 3) * 0.06,
                                        }}
                                        className="group bg-white/[0.02] border border-white/[0.06] hover:border-primary/50 transition-colors"
                                        data-testid={`industry-product-${product.id}`}
                                    >
                                        <Link
                                            to={`/products/${product.category}/${product.id}`}
                                            className="block"
                                        >
                                            <div className="aspect-square overflow-hidden bg-[#0a0f25]">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>

                                            <div className="p-5">
                                                <div className="text-[10px] uppercase tracking-widest text-primary mb-2 font-semibold">
                                                    {product.type}
                                                </div>

                                                <h3 className="display text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                                    {product.name}
                                                </h3>

                                                <p className="text-sm text-white/55 leading-relaxed mb-4 line-clamp-3">
                                                    {product.short}
                                                </p>

                                                <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:text-primary transition-colors">
                                                    View details
                                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.article>
                                ))}
                            </div>
                        )}

                        {/* PAGINATION */}
                        {pages > 1 && (
                            <Pagination className="mt-10" data-testid="pagination">
                                <PaginationContent className="gap-2">
                                    {/* Optional: Previous button */}
                                    <PaginationItem>
                                        <PaginationPrevious
                                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                            className={`${page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"} border border-white/10 text-white/70 hover:border-primary hover:text-white bg-transparent`}
                                        />
                                    </PaginationItem>

                                    {/* Page Numbers */}
                                    {Array.from({ length: pages }).map((_, i) => {
                                        const pageNumber = i + 1;
                                        const isActive = page === pageNumber;

                                        return (
                                            <PaginationItem key={i}>
                                                <PaginationLink
                                                    isActive={isActive}
                                                    onClick={() => setPage(pageNumber)}
                                                    data-testid={`page-${pageNumber}`}
                                                    className={`w-10 h-10 border text-sm font-semibold cursor-pointer ${isActive
                                                        ? "bg-primary border-primary text-white hover:bg-primary/90"
                                                        : "border-white/10 text-white/70 hover:border-primary hover:text-white bg-transparent"
                                                        }`}
                                                >
                                                    {pageNumber}
                                                </PaginationLink>
                                            </PaginationItem>
                                        );
                                    })}

                                    {/* Optional: Next button */}
                                    <PaginationItem>
                                        <PaginationNext
                                            onClick={() => setPage((p) => Math.min(p + 1, pages))}
                                            className={`${page === pages ? "pointer-events-none opacity-50" : "cursor-pointer"} border border-white/10 text-white/70 hover:border-primary hover:text-white bg-transparent`}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        )}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="container-pad py-16">
                <div className="glass-strong p-10 md:p-14 relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-orange opacity-50" />

                    <div className="relative grid md:grid-cols-2 gap-6 items-center">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-primary mb-3">
                                Custom Packaging
                            </p>

                            <h3 className="display text-3xl md:text-4xl font-bold leading-tight">
                                Need packaging for{" "}
                                <span className="text-primary">
                                    {industry.name}?
                                </span>
                            </h3>

                            <p className="text-white/60 mt-4">
                                Tell us about your product and packaging
                                requirements.
                            </p>
                        </div>

                        <div className="flex md:justify-end">
                            <Link
                                to="/quote"
                                className="btn-primary inline-flex items-center gap-2"
                                data-testid="industry-cta-quote"
                            >
                                Request a Quote
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


function CheckboxRow({
    label,
    checked,
    onChange,
    testid,
}) {
    return (
        <label
            className="flex items-center gap-2 text-sm cursor-pointer text-white/75 hover:text-white"
            data-testid={testid}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="accent-primary w-4 h-4"
            />
            <span>{label}</span>
        </label>
    );
}
