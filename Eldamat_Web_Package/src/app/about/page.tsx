'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const timeline = [
    { year: '2010', event: 'Eldamat Security Services founded in Nairobi' },
    { year: '2012', event: 'Obtained PSRA License and expanded to 50+ guards' },
    { year: '2015', event: 'Launched CCTV and technology solutions division' },
    { year: '2018', event: 'Established K9 Unit with trained security dogs' },
    { year: '2020', event: 'Expanded operations across East Africa' },
    { year: '2024', event: 'Serving 100+ clients with 500+ security personnel' },
];

const certifications = [
    'Certificate of Incorporation',
    'KRA Compliance Certificate',
    'KRA PIN',
    'Local Authority Business License',
    'Disadvantaged Special Groups Certificate',
    'NSSF Compliance',
    'SHA (Social Health Authority) Compliance',
    'Labor Compliance Certificate',
    'PSRA License',
];

const affiliations = [
    { name: 'Kenya Police', icon: '🚔' },
    { name: 'Kenya Red Cross', icon: '🏥' },
    { name: 'St. John Ambulance', icon: '🚑' },
    { name: 'Fire Brigade', icon: '🚒' },
    { name: 'PSRA', icon: '🛡️' },
    { name: 'Phoenix Insurance', icon: '📋' },
];

const team = [
    {
        name: 'Security Operations',
        description: 'Our operations team ensures seamless deployment and management of all security personnel across client sites.',
    },
    {
        name: 'Training Division',
        description: 'Professional trainers ensuring all guards meet international security standards and PSRA requirements.',
    },
    {
        name: 'Technology Team',
        description: 'Expert technicians handling CCTV installation, access control systems, and surveillance monitoring.',
    },
    {
        name: 'K9 Unit',
        description: 'Specialized dog handlers managing our trained security dogs for patrol and protection duties.',
    },
];

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
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
                        ABOUT ELDAMAT
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Your Trusted{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63350] to-[#C41E3A]">
                            Security Partner
                        </span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Over 15 years of excellence in providing professional security services across East Africa.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={`bg-gradient-to-br from-[#1A3A6E] to-[#0D2140] rounded-3xl p-8 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-white/80 leading-relaxed">
                                To be a multinational private security provider with efficient, dedicated, and professional
                                staff, taking the lead in East and Central Africa in providing all-round security solutions
                                to our esteemed clients.
                            </p>
                        </div>
                        <div className={`bg-gradient-to-br from-[#C41E3A] to-[#A01830] rounded-3xl p-8 text-white transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-white/80 leading-relaxed">
                                To provide professional private security services and solutions that meet recognized
                                international standards, surpassing our customer expectations through respectful conduct,
                                excellent customer care, and unwavering commitment to safety.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-[#F0F5FA]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-[#1A3A6E]/10 text-[#1A3A6E] rounded-full text-sm font-semibold mb-4">
                            OUR JOURNEY
                        </span>
                        <h2 className="text-4xl font-bold text-[#0D2140]">Company History</h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, index) => (
                            <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A3A6E] to-[#0D2140] text-white flex items-center justify-center font-bold text-sm">
                                        {item.year}
                                    </div>
                                    {index !== timeline.length - 1 && (
                                        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-[#1A3A6E]/20" />
                                    )}
                                </div>
                                <div className="flex-1 pt-4">
                                    <p className="text-lg text-gray-700">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-white" id="team">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-[#C41E3A]/10 text-[#C41E3A] rounded-full text-sm font-semibold mb-4">
                            OUR TEAM
                        </span>
                        <h2 className="text-4xl font-bold text-[#0D2140]">Expert Departments</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((dept, index) => (
                            <div key={dept.name} className="bg-[#F0F5FA] hover:bg-[#1A3A6E] group rounded-2xl p-6 transition-all duration-300 cursor-default">
                                <h3 className="text-xl font-bold text-[#0D2140] group-hover:text-white mb-3 transition-colors">
                                    {dept.name}
                                </h3>
                                <p className="text-gray-600 group-hover:text-white/80 transition-colors">
                                    {dept.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 bg-gradient-to-br from-[#0D2140] to-[#1A3A6E]" id="certifications">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
                            CREDENTIALS
                        </span>
                        <h2 className="text-4xl font-bold text-white">Certifications & Licensing</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {certifications.map((cert) => (
                            <div key={cert} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors text-center">
                                <svg className="w-8 h-8 text-[#C41E3A] mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <p className="text-white/80 text-sm">{cert}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Affiliations */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-[#1A3A6E]/10 text-[#1A3A6E] rounded-full text-sm font-semibold mb-4">
                            PARTNERSHIPS
                        </span>
                        <h2 className="text-4xl font-bold text-[#0D2140]">Our Affiliations</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {affiliations.map((aff) => (
                            <div key={aff.name} className="bg-[#F0F5FA] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                                <span className="text-4xl mb-3 block">{aff.icon}</span>
                                <p className="font-semibold text-[#0D2140]">{aff.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#F0F5FA]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D2140] mb-6">
                        Ready to Partner with Us?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join our growing list of satisfied clients across East Africa.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C41E3A] to-[#A01830] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Contact Us Today
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </>
    );
}
