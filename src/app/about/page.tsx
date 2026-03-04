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
            <section className="relative pt-40 md:pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a84c]/5 rounded-full blur-[150px]" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-6 backdrop-blur-sm uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        About Eldamat
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
                        Your Trusted{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b96a] to-[#c9a84c]">
                            Security Partner
                        </span>
                    </h1>
                    <p className="text-xl text-[#999999] max-w-2xl mx-auto">
                        Over 15 years of excellence in providing professional security services across East Africa.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-[#1a1a1a]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className={`bg-[#2d2d2d] rounded-3xl p-8 text-white border border-[#3a3a3a] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#a8892e] flex items-center justify-center mb-6 text-[#0a0a0a]">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Vision</h2>
                            <p className="text-[#999999] leading-relaxed">
                                To be a multinational private security provider with efficient, dedicated, and professional
                                staff, taking the lead in East and Central Africa in providing all-round security solutions
                                to our esteemed clients.
                            </p>
                        </div>
                        <div className={`bg-gradient-to-br from-[#c9a84c] to-[#a8892e] rounded-3xl p-8 text-[#0a0a0a] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a]/20 flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Mission</h2>
                            <p className="text-[#0a0a0a]/80 leading-relaxed">
                                To provide professional private security services and solutions that meet recognized
                                international standards, surpassing our customer expectations through respectful conduct,
                                excellent customer care, and unwavering commitment to safety.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-4 uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Our Journey
                        </span>
                        <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Company History</h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, index) => (
                            <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] flex items-center justify-center font-bold text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        {item.year}
                                    </div>
                                    {index !== timeline.length - 1 && (
                                        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-[#c9a84c]/20" />
                                    )}
                                </div>
                                <div className="flex-1 pt-4">
                                    <p className="text-lg text-[#e8e6e1]">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-[#1a1a1a]" id="team">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-4 uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Our Team
                        </span>
                        <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Expert Departments</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((dept) => (
                            <div key={dept.name} className="bg-[#2d2d2d] hover:bg-gradient-to-br hover:from-[#c9a84c] hover:to-[#a8892e] group rounded-2xl p-6 transition-all duration-300 cursor-default border border-[#3a3a3a] hover:border-transparent">
                                <h3 className="text-xl font-bold text-white group-hover:text-[#0a0a0a] mb-3 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {dept.name}
                                </h3>
                                <p className="text-[#999999] group-hover:text-[#0a0a0a]/80 transition-colors">
                                    {dept.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 bg-[#0a0a0a]" id="certifications">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-4 uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Credentials
                        </span>
                        <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Certifications & Licensing</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {certifications.map((cert) => (
                            <div key={cert} className="bg-[#1a1a1a] backdrop-blur-sm rounded-xl p-4 border border-[#2d2d2d] hover:bg-[#2d2d2d] hover:border-[#c9a84c]/20 transition-colors text-center">
                                <svg className="w-8 h-8 text-[#c9a84c] mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <p className="text-[#e8e6e1] text-sm">{cert}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Affiliations */}
            <section className="py-20 bg-[#1a1a1a]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-4 uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Partnerships
                        </span>
                        <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Affiliations</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {affiliations.map((aff) => (
                            <div key={aff.name} className="bg-[#2d2d2d] rounded-2xl p-6 text-center hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-300 border border-[#3a3a3a] hover:border-[#c9a84c]/20">
                                <span className="text-4xl mb-3 block">{aff.icon}</span>
                                <p className="font-semibold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{aff.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#0a0a0a]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Ready to Partner with Us?
                    </h2>
                    <p className="text-xl text-[#999999] mb-8 max-w-2xl mx-auto">
                        Join our growing list of satisfied clients across East Africa.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] font-bold rounded-xl shadow-lg hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group uppercase tracking-wider"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10">Contact Us Today</span>
                        <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </>
    );
}
