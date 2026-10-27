import { INDUSTRIES } from '@/data/industries'
import React, { useRef, useLayoutEffect, useEffect } from 'react'
import Select from './SelectSection.jsx'
import { useParams } from 'react-router-dom'
import FilterProductCard from './FilterProductCard.jsx'
import ProductsPagination from './ProductsPagination.jsx'

export default function ProductsList({ filtered, setSort, sort, resetFilters, current, pages, page, setPage }) {
    const { slug } = useParams()
    const isIndustries = INDUSTRIES.some((i) => i.id == slug)

    const topRef = useRef(null)
    const shouldScroll = useRef(false)

    const goToPage = (n) => {
        shouldScroll.current = true
        setPage(n)
    }

    useLayoutEffect(() => {
        if (!shouldScroll.current) return
        shouldScroll.current = false

        const el = topRef.current
        if (!el) return

        const NAVBAR_OFFSET = 100 // match your navbar height
        const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET
        window.scrollTo({ top, behavior: "instant" })
    }, [page])


    return (
        <div ref={topRef} className="min-h-[400px]">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div
                    className="text-sm text-white/55"
                    data-testid="results-count"
                >
                    {filtered.length} products
                </div>
                <Select setSort={setSort} sort={sort} />
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
                        <FilterProductCard isIndustries={isIndustries} key={product.num} product={product} index={index} />
                    ))}
                </div>
            )}

            {pages > 1 && (
                <ProductsPagination pages={pages} page={page} setPage={goToPage} />
            )}
        </div>
    )
}