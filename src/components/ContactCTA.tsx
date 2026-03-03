'use client';

import { useState } from 'react';

export default function ContactCTA() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-50">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/3 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c9a84c]/2 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-6 uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Professional Security Provider
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
                            Ready to Secure{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b96a] to-[#c9a84c]">
                                Your Future?
                            </span>
                        </h2>
                        <p className="text-lg text-[#999999] mb-8 leading-relaxed">
                            Get a free security consultation and personalized quotation. Our team is ready
                            to design a security solution tailored to your specific needs.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <a href="tel:+254752285595" className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-xl bg-[#2d2d2d] text-[#c9a84c] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#c9a84c] group-hover:to-[#a8892e] group-hover:text-[#0a0a0a] transition-all duration-300 border border-[#3a3a3a] group-hover:border-transparent">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-[#6b6b6b]">Call us 24/7</p>
                                    <p className="text-lg font-semibold text-white">+254 752 285 595</p>
                                    <p className="text-[#c9a84c] text-sm font-medium">+254 725 285 595</p>
                                </div>
                            </a>
                            <a href="mailto:operation@eldamatsec.co.ke" className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-xl bg-[#2d2d2d] text-[#c9a84c] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#c9a84c] group-hover:to-[#a8892e] group-hover:text-[#0a0a0a] transition-all duration-300 border border-[#3a3a3a] group-hover:border-transparent">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-[#6b6b6b]">Email us</p>
                                    <p className="text-lg font-semibold text-white">operation@eldamatsec.co.ke</p>
                                </div>
                            </a>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-[#2d2d2d] text-[#c9a84c] flex items-center justify-center border border-[#3a3a3a]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-[#6b6b6b]">Visit our offices</p>
                                    <p className="text-lg font-semibold text-white">HQ: Zul Arcade, Ground Floor, Nairobi</p>
                                    <p className="text-[#c9a84c] text-sm font-medium">Branch: Donholm, Nairobi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="bg-[#2d2d2d] rounded-2xl shadow-xl p-8 border border-[#3a3a3a]">
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Thank You!</h3>
                                <p className="text-[#999999]">We&apos;ve received your inquiry and will contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-[#e8e6e1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3a3a3a] text-white placeholder-[#6b6b6b] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#e8e6e1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3a3a3a] text-white placeholder-[#6b6b6b] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all"
                                            placeholder="+254 712 345 678"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#e8e6e1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3a3a3a] text-white placeholder-[#6b6b6b] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all"
                                        placeholder="yourname@domain.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#e8e6e1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Service Needed</label>
                                    <select
                                        required
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3a3a3a] text-white focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="guarding">Security Guarding</option>
                                        <option value="cctv">CCTV Installation</option>
                                        <option value="vip">VIP Protection</option>
                                        <option value="dog">Dog Services</option>
                                        <option value="fire">Fire Safety</option>
                                        <option value="investigation">Investigations</option>
                                        <option value="other">Other Services</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#e8e6e1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Message</label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3a3a3a] text-white placeholder-[#6b6b6b] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all resize-none"
                                        placeholder="Tell us about your security needs..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] font-bold rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group uppercase tracking-wider"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                            <span className="relative z-10">Request a Quotation</span>
                                            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
