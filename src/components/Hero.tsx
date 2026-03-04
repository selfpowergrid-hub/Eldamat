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
        <section className="relative min-h-screen flex items-center md:items-center overflow-hidden">
            {/* Background - Deepest Black */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />

                {/* Floating Gold Orbs */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#a8892e]/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Shield Pattern */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]">
                    <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#c9a84c] w-full h-full">
                        <path d="M50 5L10 20v25c0 25 17 48 40 54 23-6 40-29 40-54V20L50 5z" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 md:pt-32 pb-12 relative z-10">
                <div className="max-w-4xl">
                    {/* Main Heading */}
                    <h1
                        className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}
                    >
                        Your Safety,{' '}
                        <span className="relative">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#d4b96a] to-[#c9a84c]">
                                Our Priority
                            </span>
                            <span className="absolute bottom-2 left-0 right-0 h-4 bg-[#c9a84c]/10 -skew-x-3" />
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`text-xl md:text-2xl text-[#999999] mb-10 max-w-2xl leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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
                            className="group px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] font-bold rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 relative overflow-hidden uppercase tracking-wider"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative z-10">Request a Quotation</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-transparent backdrop-blur-sm text-[#c9a84c] font-semibold rounded-xl border-2 border-[#c9a84c]/30 hover:bg-[#c9a84c]/10 hover:border-[#c9a84c]/60 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 uppercase tracking-wider"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
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
                                <div className="absolute inset-0 bg-gradient-to-r from-[#c9a84c]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-4 border-l-2 border-[#c9a84c]/30 group-hover:border-[#c9a84c] transition-colors">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{stat.value}</div>
                                    <div className="text-sm text-[#999999] uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-[#c9a84c]/40 text-xs uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>Scroll</span>
                    <svg className="w-5 h-5 text-[#c9a84c]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
