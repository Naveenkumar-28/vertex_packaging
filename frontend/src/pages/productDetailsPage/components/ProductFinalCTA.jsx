import { ArrowRight, ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export function ProductFinalCTA() {
    return (
        <section className="container-pad py-20">
            <div className="glass-strong p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-orange opacity-40" />
                <div className="relative">
                    <div className="text-xs uppercase tracking-widest text-primary mb-4 font-semibold">Final word</div>
                    <h2 className="display text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
                        Let's create packaging that <br />
                        <span className="text-primary">elevates your brand.</span>
                    </h2>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                        <Link to="/contact" className="btn-primary" data-testid="final-cta-experts">
                            Talk to our experts <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/quote" className="btn-secondary" data-testid="final-cta-quote">
                            Get a Quote <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
