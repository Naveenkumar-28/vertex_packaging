import { ChevronRight, HomeIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export function ProductBreadcrumbSection({ matchIndustries, catSlug, product, cat }) {
    return (
        <div className="container-pad pt-8">
            {matchIndustries ? (
                <nav className="flex items-center flex-wrap gap-2 text-xs text-white/50" data-testid="breadcrumb">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1.5 leading-none hover:text-white"
                    >
                        <HomeIcon className="h-3 w-3 shrink-0" />
                        <span>Home</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/industries" className="hover:text-white">Industries</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        <Link to={`/industries/${catSlug}`} className="hover:text-white capitalize">{matchIndustries?.name}</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary font-semibold">{product.name}</span>
                    </div>
                </nav>

            ) : (

                <nav className="flex items-center flex-wrap gap-2 text-xs text-white/50" data-testid="breadcrumb">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-1.5 leading-none hover:text-white"
                    >
                        <HomeIcon className="h-3 w-3 shrink-0" />
                        <span>Home</span>
                    </Link>
                    <div className="flex gap-2 items-center">
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/products" className="hover:text-white">Products</Link>
                    </div>
                    <div className="flex gap-2 items-center">
                        <ChevronRight className="w-3 h-3" />
                        <Link to={`/products/${product.category}`} className="hover:text-white">{cat?.name}</Link>
                    </div>
                    <div className="flex gap-2 items-center">
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary font-semibold">{product.name}</span>
                    </div>
                </nav>
            )}
        </div>
    )
}
