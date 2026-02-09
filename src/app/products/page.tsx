'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const products = [
    {
        category: 'CCTV & Surveillance',
        items: [
            { name: 'HD Dome Cameras', description: 'Indoor surveillance with 360° coverage', features: ['1080p Full HD', 'Night Vision', 'Wide Angle'] },
            { name: '4K Bullet Cameras', description: 'Outdoor security with crystal clear footage', features: ['4K Resolution', 'IR Night Vision', 'Weatherproof'] },
            { name: 'PTZ Cameras', description: 'Pan-Tilt-Zoom for active monitoring', features: ['360° Rotation', '20x Optical Zoom', 'Auto Tracking'] },
            { name: 'DVR/NVR Systems', description: 'Video recording and storage solutions', features: ['Multi-channel', 'Remote Access', 'Large Storage'] },
        ],
    },
    {
        category: 'Fire Safety Equipment',
        items: [
            { name: 'Fire Extinguishers', description: 'Various types for all fire classes', features: ['CO2', 'Dry Powder', 'Foam'] },
            { name: 'Fire Blankets', description: 'Quick response fire suppression', features: ['Heat Resistant', 'Compact', 'Easy Deploy'] },
            { name: 'Smoke Detectors', description: 'Early warning fire detection', features: ['Optical Sensor', 'Loud Alarm', 'Battery Backup'] },
            { name: 'Fire Alarm Systems', description: 'Complete building fire alerting', features: ['Zone Control', 'Central Panel', 'Automatic Alert'] },
        ],
    },
    {
        category: 'Access Control',
        items: [
            { name: 'Biometric Systems', description: 'Fingerprint and facial recognition', features: ['Fast Recognition', 'Anti-spoofing', 'Large Capacity'] },
            { name: 'Card Access Systems', description: 'RFID and smart card entry', features: ['Contactless', 'Multi-door', 'Time Attendance'] },
            { name: 'Electric Locks', description: 'Electronic door locking solutions', features: ['Fail-safe', 'Remote Control', 'Audit Trail'] },
            { name: 'Turnstiles', description: 'Pedestrian access control barriers', features: ['High Throughput', 'Bi-directional', 'Integration Ready'] },
        ],
    },
    {
        category: 'Alarm Systems',
        items: [
            { name: 'Intruder Alarms', description: 'Motion and break-in detection', features: ['PIR Sensors', 'Glass Break', 'Loud Siren'] },
            { name: 'Panic Buttons', description: 'Emergency alert devices', features: ['Wireless', 'Silent Alarm', 'Quick Response'] },
            { name: 'Alarm Monitoring', description: 'Central station monitoring service', features: ['24/7 Monitoring', 'Quick Response', 'Mobile Alerts'] },
        ],
    },
    {
        category: 'Perimeter Security',
        items: [
            { name: 'Electric Fencing', description: 'High voltage perimeter protection', features: ['Adjustable Voltage', 'Zone Control', 'Alert System'] },
            { name: 'Razor Wire', description: 'Physical barrier deterrent', features: ['Durable', 'High Security', 'Various Types'] },
            { name: 'Gate Automation', description: 'Motorized gate systems', features: ['Remote Control', 'Intercom', 'Safety Sensors'] },
        ],
    },
    {
        category: 'First Aid & Safety',
        items: [
            { name: 'First Aid Kits', description: 'Comprehensive medical kits', features: ['Complete Kit', 'Portable', 'Multiple Sizes'] },
            { name: 'Safety Signs', description: 'Warning and information signage', features: ['Reflective', 'Durable', 'Custom Options'] },
            { name: 'PPE Equipment', description: 'Personal protective equipment', features: ['Safety Vests', 'Helmets', 'Gloves'] },
        ],
    },
];

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState(0);
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
                        SECURITY PRODUCTS
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63350] to-[#C41E3A]">
                            Products
                        </span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Premium security equipment and technology solutions. Supply, installation, and maintenance.
                    </p>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {products.map((cat, index) => (
                            <button
                                key={cat.category}
                                onClick={() => setActiveCategory(index)}
                                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === index
                                    ? 'bg-gradient-to-r from-[#1A3A6E] to-[#0D2140] text-white shadow-lg'
                                    : 'bg-[#F0F5FA] text-gray-600 hover:bg-[#1A3A6E]/10'
                                    }`}
                            >
                                {cat.category}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {products[activeCategory].items.map((product, index) => (
                            <div
                                key={product.name}
                                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#1A3A6E]/20 transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Product Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F0F5FA] to-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-[#1A3A6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                </div>

                                <h3 className="text-lg font-bold text-[#0D2140] mb-2 group-hover:text-[#C41E3A] transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-1.5">
                                    {product.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-2 py-1 bg-[#F0F5FA] text-[#1A3A6E] text-xs rounded-md"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C41E3A] to-[#E63350] rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </div>
                        ))}
                    </div>

                    {/* All Categories Preview */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-[#0D2140] text-center mb-12">All Product Categories</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((category, index) => (
                                <button
                                    key={category.category}
                                    onClick={() => {
                                        setActiveCategory(index);
                                        window.scrollTo({ top: 300, behavior: 'smooth' });
                                    }}
                                    className="group text-left bg-gradient-to-br from-[#F0F5FA] to-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#1A3A6E]/20"
                                >
                                    <h3 className="text-xl font-bold text-[#0D2140] mb-2 group-hover:text-[#C41E3A] transition-colors">
                                        {category.category}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {category.items.length} products available
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {category.items.slice(0, 3).map((item) => (
                                            <span key={item.name} className="text-xs text-gray-500">
                                                {item.name}{category.items.indexOf(item) < 2 ? ',' : ''}
                                            </span>
                                        ))}
                                        {category.items.length > 3 && <span className="text-xs text-[#C41E3A]">+{category.items.length - 3} more</span>}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#0D2140] to-[#1A3A6E]">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Need Security Equipment?
                    </h2>
                    <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                        We supply, install, and maintain all our products. Request a quotation today.
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
