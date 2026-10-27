import React, { useMemo, useState, useEffect } from 'react'
import ProductsFilterSidebar from './ProductsFilterSidebar';
import ProductsList from './ProductsList';
import { PRODUCTS } from '@/data/products';

const PER_PAGE = 9;

function ProductsFilterSection({ industry }) {

    const [apps, setApps] = useState([]);
    const [mats, setMats] = useState([]);
    const [feats, setFeats] = useState([]);
    const [sort, setSort] = useState("popular");
    const [page, setPage] = useState(1);

    const allProducts = useMemo(() => {
        if (!industry) return [];

        return PRODUCTS.filter((product) =>
            (product.keyIndustries || []).some(
                (id) => id === industry.id
            )
        );
    }, [industry]);

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
    }, [apps, mats, feats, sort, industry]);


    const pages = Math.max(
        1,
        Math.ceil(filtered.length / PER_PAGE)
    );

    const current = filtered.slice(
        (page - 1) * PER_PAGE,
        page * PER_PAGE
    );


    const resetFilters = () => {
        setApps([]);
        setMats([]);
        setFeats([]);
        setSort("popular");
        setPage(1);
    };

    return (
        <section
            id="industry-products"
            className="container-pad py-12 relative pt-32"
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
            <div
                className="grid lg:grid-cols-[260px_1fr] gap-8 items-start relative ">

                {/* FILTER SIDEBAR */}
                <ProductsFilterSidebar
                    apps={apps}
                    mats={mats}
                    feats={feats}
                    setFeats={setFeats}
                    setMats={setMats}
                    resetFilters={resetFilters}
                    setApps={setApps}
                />

                {/* PRODUCT LIST */}
                <ProductsList
                    current={current}
                    filtered={filtered}
                    page={page}
                    pages={pages}
                    resetFilters={resetFilters}
                    setPage={setPage}
                    setSort={setSort}
                    sort={sort}
                />
            </div>
        </section>
    )
}

export default ProductsFilterSection