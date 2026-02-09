'use client';

import { useEffect, useRef, useState } from 'react';

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
    features: string[];
}

const services: Service[] = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Security Guarding',
        description: 'Professional armed and unarmed security personnel for your premises, events, and VIP protection.',
        image: 'https://images.unsplash.com/photo-1628173142721-692795495914?q=80&w=800',
        features: ['24/7 Coverage', 'Trained Guards', 'PSRA Licensed'],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        title: 'CCTV & Surveillance',
        description: 'State-of-the-art CCTV systems with remote monitoring, HD cameras, and smart alerts.',
        image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a94?q=80&w=800',
        features: ['4K Cameras', 'Remote Access', 'Cloud Storage'],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        title: 'VIP Protection',
        description: 'Executive protection services for high-profile individuals, CEOs, and dignitaries.',
        image: 'https://images.unsplash.com/photo-1540306301335-e67f1dc688de?q=80&w=800',
        features: ['Close Protection', 'Secure Transport', 'Advance Recon'],
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
        ),
        title: 'Dog Services',
        description: 'Trained security dogs including German Shepherds, Rottweilers, and Dobermans.',
        image: 'https://images.unsplash.com/photo-1589366114441-28564177d853?q=80&w=800',
        features: ['Guard Dogs', 'Patrol Dogs', 'K9 Training'],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
        ),
        title: 'Fire Safety',
        description: 'Comprehensive fire safety solutions including equipment, installation, and training.',
        image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800',
        features: ['Extinguishers', 'Fire Training', 'Equipment Supply'],
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        title: 'Investigations',
        description: 'Professional forensic investigations, background checks, and surveillance operations.',
        image: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5c?q=80&w=800',
        features: ['Forensics', 'Background Checks', 'Undercover Ops'],
    },
];

export default function ServicesSection() {
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleCards((prev) => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = sectionRef.current?.querySelectorAll('[data-index]');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-[#F0F5FA] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A3A6E]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C41E3A]/5 rounded-full blur-[80px]" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-[#C41E3A]/10 text-[#C41E3A] rounded-full text-sm font-semibold mb-4">
                        OUR SERVICES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D2140] mb-6">
                        Comprehensive Security{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#A01830]">
                            Solutions
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        From manned guarding to advanced surveillance systems, we provide end-to-end
                        security services tailored to protect what matters most to you.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            data-index={index}
                            className={`group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#1A3A6E]/20 transition-all duration-500 ${visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Service Image */}
                            <div className="relative h-48 -mx-8 -mt-8 mb-8 overflow-hidden rounded-t-2xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2140]/60 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#C41E3A] text-white flex items-center justify-center shadow-lg">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-[#0D2140] mb-3 group-hover:text-[#C41E3A] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="px-3 py-1 bg-[#F0F5FA] text-[#1A3A6E] text-sm rounded-full"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Learn More Link */}
                            <a
                                href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="inline-flex items-center gap-2 text-[#C41E3A] font-semibold group/link"
                            >
                                Learn More
                                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            {/* Hover Accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C41E3A] to-[#E63350] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="/services"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1A3A6E] to-[#0D2140] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        View All Services
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
