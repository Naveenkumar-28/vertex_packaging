import React from 'react'
import Select from './SelectSection.jsx'
import ProductsPagination from './ProductsPagination.jsx'
import FilterProductCard from './FilterProductCard.jsx'

function ProductsList({ filtered, setSort, sort, resetFilters, current, pages, page, setPage }) {
    return (
        <div className="min-h-[400px]">
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
                        <FilterProductCard key={index} product={product} index={index} />
                    ))}
                </div>
            )}

            {/* PAGINATION */}
            {pages > 1 && (
                <ProductsPagination pages={pages} page={page} setPage={setPage} />
            )}
        </div>
    )
}

export default ProductsList