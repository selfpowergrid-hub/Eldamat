'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
    {
        name: 'John Mwangi',
        role: 'CEO, Grupotec Kenya',
        content: 'Eldamat has been our security partner for 3 years. Their professionalism and reliability are unmatched. Our construction sites have never been safer.',
        rating: 5,
    },
    {
        name: 'Dr. Sarah Kiplagat',
        role: 'Director, Kariobangi Health Center',
        content: 'The 24/7 security coverage and rapid response has given us peace of mind. Their guards are courteous and highly trained.',
        rating: 5,
    },
    {
        name: 'Peter Ochieng',
        role: 'Operations Manager, Dallas Wholesellers',
        content: 'Since engaging Eldamat, we have had zero security incidents. Their CCTV installation and monitoring is top-notch.',
        rating: 5,
    },
];

const clients = [
    'Grupotec',
    'Baraton University',
    'Dallas Wholesellers',
    'Cobra Apartments',
    'Accurate Metal Works',
    'Sinendet Plaza',
    'Kariobangi Health Center',
    'Unity Homes',
];

export default function TestimonialsAndClients() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
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

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#1a1a1a] relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Testimonials */}
                <div className={`max-w-4xl mx-auto mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-4 uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Testimonials
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
                            What Our Clients Say
                        </h2>
                    </div>

                    {/* Testimonial Card */}
                    <div className="relative bg-[#2d2d2d] rounded-3xl p-8 md:p-12 text-white overflow-hidden border border-[#3a3a3a]">
                        {/* Quote Icon */}
                        <svg className="absolute top-8 left-8 w-16 h-16 text-[#c9a84c]/10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        {/* Gold accent top line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c9a84c] to-[#a8892e]" />

                        {/* Content */}
                        <div className="relative z-10">
                            <p className="text-xl md:text-2xl leading-relaxed mb-8 min-h-[100px] text-[#e8e6e1]">
                                &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#a8892e] flex items-center justify-center text-xl font-bold text-[#0a0a0a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{testimonials[activeTestimonial].name}</h4>
                                        <p className="text-[#999999]">{testimonials[activeTestimonial].role}</p>
                                    </div>
                                </div>

                                {/* Rating - Gold Stars */}
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial
                                        ? 'bg-[#c9a84c] w-8'
                                        : 'bg-[#3a3a3a] hover:bg-[#6b6b6b]'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Clients Section */}
                <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-4 uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Our Clients
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
                            Trusted by Leading Organizations
                        </h2>
                    </div>

                    {/* Client Logos Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {clients.map((client, index) => (
                            <div
                                key={client}
                                className="group bg-[#2d2d2d] hover:bg-gradient-to-br hover:from-[#c9a84c] hover:to-[#a8892e] rounded-xl p-6 flex items-center justify-center transition-all duration-300 cursor-default border border-[#3a3a3a] hover:border-transparent"
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <span className="text-lg font-semibold text-[#e8e6e1] group-hover:text-[#0a0a0a] transition-colors text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {client}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
