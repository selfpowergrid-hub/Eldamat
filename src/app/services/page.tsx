'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const services = [
    {
        id: 'guarding',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Security Guarding',
        description: 'Professional armed and unarmed security personnel providing comprehensive protection for your premises, assets, and people.',
        features: [
            'Residential Security - Home protection day & night',
            'Commercial Security - Office, retail & industrial sites',
            'Government Facilities - Airports, embassies, institutions',
            'Construction Sites - Equipment & materials protection',
            'Rapid Alarm Response - Quick reaction to emergencies',
            'Event Security & Crowd Control',
        ],
        image: 'https://images.unsplash.com/photo-1628173142721-692795495914?q=80&w=1200',
        highlight: 'All guards must have Certificate of Good Conduct from CID Headquarters',
    },
    {
        id: 'cctv',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        title: 'CCTV & Surveillance',
        description: 'State-of-the-art surveillance systems with HD/4K cameras, remote monitoring, and intelligent analytics.',
        features: [
            'HD & 4K Camera Systems',
            'Night Vision & IR Cameras',
            'Remote Monitoring & Mobile Access',
            'Cloud & Local Storage Options',
            'Motion Detection & Smart Alerts',
            'Professional Installation & Maintenance',
        ],
        image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a94?q=80&w=1200',
        highlight: 'Supply, installation, servicing and maintenance of all brands',
    },
    {
        id: 'vip',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        title: 'VIP Protection',
        description: 'Executive protection services for high-profile individuals, corporate executives, dignitaries, and celebrities.',
        features: [
            'Close Protection for CEOs & Directors',
            'Secure Transportation & Motorcades',
            'Residential Protection (24hr Live-in)',
            'Event & Travel Security',
            'Specialized Women Protection',
            'Counter-Terrorism Trained Personnel',
        ],
        image: 'https://images.unsplash.com/photo-1540306301335-e67f1dc688de?q=80&w=1200',
        highlight: 'Discreet, professional, and highly trained bodyguards',
    },
    {
        id: 'dog',
        icon: (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
        ),
        title: 'Dog Services',
        description: 'Highly trained security dogs including German Shepherds, Rottweilers, Dobermans, and Boerbulls for patrol and protection.',
        features: [
            'Rottweiler Guard Dogs',
            'German Shepherd Patrol Dogs',
            'Doberman Protection Dogs',
            'Boerbull Security Dogs',
            'Professional Dog Handler Training',
            'K9 Unit Deployment',
        ],
        image: 'https://images.unsplash.com/photo-1589366114441-28564177d853?q=80&w=1200',
        highlight: 'All dogs are professionally trained for security operations',
    },
    {
        id: 'fire',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
        ),
        title: 'Fire Safety',
        description: 'Complete fire safety solutions including equipment supply, installation, maintenance, and comprehensive training programs.',
        features: [
            'Fire Extinguishers (All Types)',
            'Fire Blankets & Hose Reels',
            'Smoke & Heat Detectors',
            'Fire Alarm Systems',
            'Fire Safety Training Programs',
            'Annual Servicing & Maintenance',
        ],
        image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200',
        highlight: 'Certified fire safety equipment and trained instructors',
    },
    {
        id: 'investigation',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        title: 'Investigations',
        description: 'Professional forensic investigations, background checks, surveillance operations, and intelligence gathering.',
        features: [
            'Forensic Investigations',
            'Undercover Operations',
            'Personal Character Research',
            'Criminal Tracking & Detection',
            'Staff Screening & HR Checks',
            'Surveillance Operations',
        ],
        image: 'https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5c?q=80&w=1200',
        highlight: 'Confidential and professional investigation services',
    },
    {
        id: 'training',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        title: 'Training & Consultancy',
        description: 'Professional security training programs, guard recruitment, and security audit consultancy services.',
        features: [
            'Guard Training & Certification',
            'First Aid Training',
            'Counter-Terrorism Training',
            'Fire Safety Training',
            'Security Audits & Consultancy',
            'Staff Recruitment Services',
        ],
        image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1200',
        highlight: 'PSRA-compliant training programs',
    },
    {
        id: 'access',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
        ),
        title: 'Access Control & Alarms',
        description: 'Advanced access control systems, biometric solutions, intruder alarms, and electric fence installation.',
        features: [
            'Biometric Access Systems',
            'Card & PIN Access Control',
            'Intruder Alarm Systems',
            'Electric Fence Installation',
            'Gate Automation',
            'Integrated Security Systems',
        ],
        image: 'https://images.unsplash.com/photo-1558223108-63098259ca54?q=80&w=1200',
        highlight: 'Cutting-edge technology for modern security needs',
    },
];

export default function ServicesPage() {
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleItems((prev) => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const items = document.querySelectorAll('[data-index]');
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0D2140] via-[#1A3A6E] to-[#0D2140] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                        COMPREHENSIVE SECURITY SOLUTIONS
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63350] to-[#C41E3A]">
                            Services
                        </span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        From manned guarding to cutting-edge surveillance technology, we provide
                        end-to-end security solutions tailored to your needs.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                data-index={index}
                                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    } ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1A3A6E] to-[#0D2140] text-white flex items-center justify-center mb-6">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold text-[#0D2140] mb-4">{service.title}</h2>
                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-[#C41E3A] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {service.highlight && (
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C41E3A]/10 text-[#C41E3A] rounded-lg text-sm font-medium">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                            {service.highlight}
                                        </div>
                                    )}
                                </div>

                                {/* Visual */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group relative">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3A6E]/40 to-transparent opacity-60" />

                                        {/* Floating Badge */}
                                        <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white p-3 shadow-lg">
                                            {service.icon}
                                        </div>

                                        {/* Decorative frame */}
                                        <div className="absolute inset-4 border border-white/20 rounded-2xl pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#0D2140] to-[#1A3A6E]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Need a Custom Security Solution?
                    </h2>
                    <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                        Contact us today for a free consultation and personalized security assessment.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-gradient-to-r from-[#C41E3A] to-[#A01830] text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(196,30,58,0.4)] hover:-translate-y-1 transition-all duration-300"
                        >
                            Request a Quotation
                        </Link>
                        <a
                            href="tel:+254752285595"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call +254 752 285 595
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
