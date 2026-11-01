import { Package2 } from 'lucide-react'
import React from 'react'

export function ProductApplications({ applications }) {
    return (
        <div className="mt-16">
            <h3 className="display text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" /> Applications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3" data-testid="applications-grid">
                {applications.map((a) => (
                    <div key={a} className="glass p-5 flex flex-col items-center text-center group hover:border-primary/50 transition-colors">
                        <div className="w-10 h-10 grid place-items-center bg-primary/10 text-primary border border-primary/20 mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Package2 className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-semibold">{a}</div>
                    </div>
                ))}
            </div>
        </div>

    )
}
