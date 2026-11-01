import { getFeatureIcon } from '@/data/featureIcons';
import React from 'react'

export function ProductKeyFeatures({ features }) {
    return (
        <div className="mt-16">
            <h3 className="display text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" /> Key Features
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3" data-testid="key-features-grid">
                {features.map((f) => {
                    const Icon = getFeatureIcon(f);
                    return (
                        <div key={f} className="glass p-5 group hover:border-primary/50 transition-colors flex flex-col items-center">
                            <div className="w-10 h-10 grid place-items-center bg-primary/10 text-primary border border-primary/20 mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Icon className="w-4 h-4" />
                            </div>
                            <div className="text-sm font-semibold">{f}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
