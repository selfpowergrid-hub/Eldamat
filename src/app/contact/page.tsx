'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    };

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a84c]/5 rounded-full blur-[150px]" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-[#c9a84c]/10 text-[#c9a84c] rounded-full text-sm font-semibold mb-6 backdrop-blur-sm uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.02em' }}>
                        Contact{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4b96a] to-[#c9a84c]">
                            Us
                        </span>
                    </h1>
                    <p className="text-xl text-[#999999] max-w-2xl mx-auto">
                        Ready to secure your premises? Get in touch for a free consultation and personalized quotation.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-[#1a1a1a]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>Let&apos;s Talk Security</h2>

                            <div className="space-y-10 mb-12">
                                <a href="tel:+254752285595" className="flex items-start gap-4 group p-6 rounded-2xl hover:bg-[#2d2d2d] transition-all duration-300 border border-transparent hover:border-[#3a3a3a] bg-[#2d2d2d]/30" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Call Us 24/7</h3>
                                        <p className="text-xl text-[#c9a84c] font-semibold">+254 752 285 595</p>
                                        <p className="text-[#999999] text-base">+254 725 285 595</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 group p-6 rounded-2xl hover:bg-[#2d2d2d] transition-all duration-300 border border-transparent hover:border-[#3a3a3a] bg-[#2d2d2d]/30" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Email Us</h3>
                                        <div className="space-y-2">
                                            <p className="text-xl text-[#c9a84c] font-semibold leading-tight">Lngetich@eldamatsec.co.ke</p>
                                            <p className="text-[#e8e6e1]/80 text-base">operation@eldamatsec.co.ke</p>
                                            <p className="text-[#e8e6e1]/80 text-base">finance@eldamatsec.co.ke</p>
                                            <p className="text-[#e8e6e1]/80 text-base font-medium text-[#c9a84c]">hr@eldamatsec.co.ke</p>
                                        </div>
                                        <p className="text-[#6b6b6b] mt-3 italic text-sm">Official Corporate Domain Emails</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#2d2d2d]/30 border border-[#3a3a3a]/30" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Our Offices</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-[#c9a84c] font-bold text-lg">Main Office (HQ)</p>
                                                <p className="text-[#e8e6e1] text-base">Zul Arcade, Ground Floor</p>
                                                <p className="text-[#e8e6e1] text-base">Oginga Odinga Street, Nairobi</p>
                                            </div>
                                            <div className="pt-2 border-t border-[#3a3a3a]">
                                                <p className="text-[#c9a84c] font-bold text-lg">Donholm Branch</p>
                                                <p className="text-[#e8e6e1] text-base">Nairobi, Kenya</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#2d2d2d]/30 border border-[#3a3a3a]/30" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Business Hours</h3>
                                        <p className="text-[#e8e6e1] text-base">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                        <p className="text-[#e8e6e1] text-base">Saturday: 9:00 AM - 2:00 PM</p>
                                        <p className="text-[#c9a84c] font-bold mt-1">24/7 Security Coverage Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div id="quote">
                            <div className="bg-[#2d2d2d] rounded-2xl shadow-xl p-8 border border-[#3a3a3a] sticky top-24">
                                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Request a Quotation</h3>
                                <p className="text-[#999999] mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">
                                            <svg className="w-10 h-10 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Thank You!</h3>
                                        <p className="text-[#999999] mb-6">We&apos;ve received your inquiry and will contact you within 24 hours.</p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-6 py-3 bg-[#c9a84c] text-[#0a0a0a] rounded-xl hover:bg-[#d4b96a] transition-colors font-semibold uppercase tracking-wider"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                                        >
                                            Send Another Inquiry
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-[#e8e6e1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Full Name *</label>
                                                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3a3a3a] text-white placeholder-[#6b6b6b] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all" placeholder="John Doe" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-[#e8e6e1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Phone Number *</label>
                                                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3a3a3a] text-white placeholder-[#6b6b6b] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all" placeholder="+254 712 345 678" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#e8e6e1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Email Address *</label>
                                            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3a3a3a] text-white placeholder-[#6b6b6b] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all" placeholder="john@company.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#e8e6e1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Company/Organization</label>
                                            <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3a3a3a] text-white placeholder-[#6b6b6b] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all" placeholder="Your company name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#e8e6e1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Service Required *</label>
                                            <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3a3a3a] text-white focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all">
                                                <option value="">Select a service</option>
                                                <option value="guarding">Security Guarding</option>
                                                <option value="cctv">CCTV Installation & Surveillance</option>
                                                <option value="vip">VIP Protection</option>
                                                <option value="dog">Dog Services</option>
                                                <option value="fire">Fire Safety</option>
                                                <option value="investigation">Investigation Services</option>
                                                <option value="access">Access Control & Alarms</option>
                                                <option value="training">Training & Consultancy</option>
                                                <option value="multiple">Multiple Services</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#e8e6e1] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Tell Us About Your Needs *</label>
                                            <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#3a3a3a] text-white placeholder-[#6b6b6b] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none transition-all resize-none" placeholder="Describe your security requirements..." />
                                        </div>
                                        <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] font-bold rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                                                    <span className="relative z-10">Submit Request</span>
                                                    <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                        <p className="text-center text-sm text-[#6b6b6b]">
                                            Or call us directly at <a href="tel:+254752285595" className="text-[#c9a84c] font-medium">+254 752 285 595</a>
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Emergency Banner - Gold */}
            < section className="py-12 bg-gradient-to-r from-[#c9a84c] to-[#a8892e]" >
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4 text-[#0a0a0a]">
                            <div className="w-16 h-16 rounded-full bg-[#0a0a0a]/20 flex items-center justify-center animate-pulse">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Security Emergency?</h3>
                                <p className="text-[#0a0a0a]/70">Our rapid response team is available 24/7</p>
                            </div>
                        </div>
                        <a
                            href="tel:+254752285595"
                            className="px-8 py-4 bg-[#0a0a0a] text-[#c9a84c] font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 uppercase tracking-wider"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Now: +254 752 285 595
                        </a>
                    </div>
                </div>
            </section >
        </>
    );
}
