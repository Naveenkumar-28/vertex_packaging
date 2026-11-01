import React from 'react'

export function ProductSpecifications({ product }) {
    return (
        <div className="mt-16">
            <h3 className="display text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" /> Specifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3" data-testid="specs-grid">
                {Object.entries(product.specs ?? {}).map(([k, v]) => (
                    <div key={k} className="glass p-5">
                        <div className="text-xs uppercase tracking-widest text-white/40 mb-2">{k.replace(/_/g, " ")}</div>
                        <div className="text-base font-semibold">{v}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
