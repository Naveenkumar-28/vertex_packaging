import QuickEnquiryForm from '@/components/QuickEnquiryForm'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

export function ProductCurrentlyView({ product }) {
    return (
        <section className="container-pad py-16">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                    <SectionHeader
                        eyebrow="Get a quote"
                        title="Get Quote Now."
                        subtitle={`Tell us about your ${product.name} needs. Our team will respond within 24 hours.`}
                    />
                    <div className="glass p-6 mb-4">
                        <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Currently viewing</div>
                        <div className="display text-lg font-bold">{product.name}</div>
                        <div className="text-xs text-white/55 mt-1">{product.type}</div>
                    </div>
                </div>
                <div>
                    <QuickEnquiryForm productId={product.id} productName={product.name} />
                </div>
            </div>
        </section>
    )
}
