import { ArrowUpRight, Check } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export function ProductInfoSection({ product }) {
    return (
        <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-3 font-semibold">{product.type}</div>
            <h1 className="display text-4xl md:text-5xl font-bold mb-5 leading-tight">{product.name}</h1>
            <p className="text-white/65 text-lg leading-relaxed mb-6">{product.description}</p>

            <ul className="space-y-2.5 mb-8" data-testid="bullet-features">
                {product.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-3 text-white/85 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {f}
                    </li>
                ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/quote" className="btn-primary" data-testid="info-quote-btn">
                    Request Quote <ArrowUpRight className="w-4 h-4" />
                </Link>
                {/* <button className="btn-secondary" data-testid="info-datasheet-btn">
                Download Datasheet <FileDown className="w-4 h-4" />
              </button> */}
            </div>
        </div>
    )
}
