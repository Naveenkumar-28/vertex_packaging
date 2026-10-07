import { Link } from "react-router-dom";
import {
    ArrowUpRight, ArrowRight
} from "lucide-react";


export function CTA() {
    return (
        <section className="section-pad">
            <div className="container-pad">
                <div className="glass-strong p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-orange opacity-50" />
                    <div className="relative grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-medium">Ready when you are</div>
                            <h2 className="display text-4xl md:text-5xl font-bold leading-tight">
                                Let's package something <br />
                                <span className="text-primary">extraordinary.</span>
                            </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row md:justify-end gap-4">
                            <Link to="/quote" className="btn-primary" data-testid="cta-quote-btn">
                                Get a Quote <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <Link to="/contact" className="btn-secondary" data-testid="cta-contact-btn">
                                Talk to expert <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
