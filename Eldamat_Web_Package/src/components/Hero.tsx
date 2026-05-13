'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Guards Deployed' },
    { value: '100+', label: 'Active Clients' },
    { value: '24/7', label: 'Support Available' },
];

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D2140] via-[#1A3A6E] to-[#0D2140]" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />

                {/* Floating Orbs */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C41E3A]/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#1A3A6E]/40 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Shield Pattern */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5">
                    <svg viewBox="0 0 100 100" fill="currentColor" className="text-white w-full h-full">
                        <path d="M50 5L10 20v25c0 25 17 48 40 54 23-6 40-29 40-54V20L50 5z" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        <span className="w-2 h-2 rounded-full bg-[#C41E3A] animate-pulse" />
                        <span className="text-sm text-white/80">PSRA Licensed Security Provider</span>
                    </div>

                    {/* Main Heading */}
                    <h1
                        className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        Your Safety,{' '}
                        <span className="relative">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#E63350] to-[#C41E3A]">
                                Our Priority
                            </span>
                            <span className="absolute bottom-2 left-0 right-0 h-4 bg-[#C41E3A]/20 -skew-x-3" />
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        Professional security services across East Africa. From VIP protection to
                        CCTV surveillance, we deliver world-class security solutions tailored to your needs.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        <Link
                            href="/contact"
                            className="group px-8 py-4 bg-gradient-to-r from-[#C41E3A] to-[#A01830] text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(196,30,58,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                        >
                            Request a Quotation
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Our Services
                        </Link>
                    </div>

                    {/* Stats */}
                    <div
                        className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="relative group"
                                style={{ transitionDelay: `${600 + index * 100}ms` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-4 border-l-2 border-[#C41E3A]/50 group-hover:border-[#C41E3A] transition-colors">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-white/60">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
                    <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
