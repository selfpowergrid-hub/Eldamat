'use client';

import { useEffect, useRef, useState } from 'react';

const reasons = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'PSRA Licensed',
        description: 'Fully licensed by the Private Security Regulatory Authority with all required certifications.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: '24/7 Support',
        description: 'Round-the-clock emergency response and customer support for your security needs.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: 'Advanced Training',
        description: 'Our guards undergo rigorous training in security protocols, first aid, and customer service.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
        title: 'Vetted Personnel',
        description: 'All guards must have a Certificate of Good Conduct from CID Headquarters before deployment.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Rapid Response',
        description: 'Quick deployment and emergency response teams ready to act when you need us most.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Trusted Partners',
        description: 'Working alongside Kenya Police, Red Cross, Fire Brigade, and other emergency services.',
    },
];

export default function WhyChooseUs() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-4 backdrop-blur-sm uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
                        Trusted Security{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b96a] to-[#c9a84c]">
                            Excellence
                        </span>
                    </h2>
                    <p className="text-lg text-[#999999] leading-relaxed">
                        With over 15 years of experience protecting businesses and individuals across East Africa,
                        we bring unmatched expertise to every security challenge.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={reason.title}
                            className={`group relative bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#2d2d2d] hover:bg-[#2d2d2d] hover:border-[#c9a84c]/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${200 + index * 100}ms`, transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300">
                                {reason.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{reason.title}</h3>
                            <p className="text-[#999999] leading-relaxed">{reason.description}</p>

                            {/* Hover Gold accent - left border */}
                            <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-[#c9a84c] to-[#a8892e] rounded-l-2xl group-hover:h-full transition-all duration-500" />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-[#999999] mb-6">Ready to secure your premises?</p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] font-bold rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group uppercase tracking-wider"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10">Get Started Today</span>
                        <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
