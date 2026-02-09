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
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0D2140] via-[#1A3A6E] to-[#0D2140] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                        GET IN TOUCH
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Contact{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63350] to-[#C41E3A]">
                            Us
                        </span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Ready to secure your premises? Get in touch for a free consultation and personalized quotation.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#0D2140] mb-8">Let&apos;s Talk Security</h2>

                            <div className="space-y-6 mb-12">
                                <a href="tel:+254752285595" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-[#F0F5FA] transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A3A6E] to-[#0D2140] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#0D2140] mb-1">Call Us 24/7</h3>
                                        <p className="text-lg text-[#C41E3A] font-medium">+254 752 285 595</p>
                                        <p className="text-gray-500">+254 725 285 595</p>
                                    </div>
                                </a>

                                <a href="mailto:eldamatsec@gmail.com" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-[#F0F5FA] transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A3A6E] to-[#0D2140] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#0D2140] mb-1">Email Us</h3>
                                        <p className="text-lg text-[#C41E3A] font-medium">eldamatsec@gmail.com</p>
                                        <p className="text-gray-500">We respond within 24 hours</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F0F5FA]">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A3A6E] to-[#0D2140] text-white flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#0D2140] mb-1">Head Office</h3>
                                        <p className="text-gray-700">Zul Arcade, Ground Floor</p>
                                        <p className="text-gray-700">Oginga Odinga Street</p>
                                        <p className="text-gray-700">Nairobi, Kenya</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C41E3A] to-[#A01830] text-white flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#0D2140] mb-1">Business Hours</h3>
                                        <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                        <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                                        <p className="text-[#C41E3A] font-medium">Emergency: 24/7</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map placeholder */}
                            <div className="aspect-video bg-[#F0F5FA] rounded-2xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819240895723!2d36.817223!3d-1.2833629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4d9f0e5f1%3A0x6c3f3a2e8b8d8c8d!2sOginga%20Odinga%20Street%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Eldamat Security Services Location"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div id="quote">
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-24">
                                <h3 className="text-2xl font-bold text-[#0D2140] mb-2">Request a Quotation</h3>
                                <p className="text-gray-600 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#0D2140] mb-2">Thank You!</h3>
                                        <p className="text-gray-600 mb-6">We&apos;ve received your inquiry and will contact you within 24 hours.</p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-6 py-3 bg-[#1A3A6E] text-white rounded-xl hover:bg-[#0D2140] transition-colors"
                                        >
                                            Send Another Inquiry
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A3A6E] focus:ring-2 focus:ring-[#1A3A6E]/20 outline-none transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A3A6E] focus:ring-2 focus:ring-[#1A3A6E]/20 outline-none transition-all"
                                                    placeholder="+254 712 345 678"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A3A6E] focus:ring-2 focus:ring-[#1A3A6E]/20 outline-none transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                                            <input
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A3A6E] focus:ring-2 focus:ring-[#1A3A6E]/20 outline-none transition-all"
                                                placeholder="Your company name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                                            <select
                                                required
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A3A6E] focus:ring-2 focus:ring-[#1A3A6E]/20 outline-none transition-all"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="guarding">Security Guarding</option>
                                                <option value="cctv">CCTV Installation & Surveillance</option>
                                                <option value="vip">VIP Protection</option>
                                                <option value="dog">Dog Services</option>
                                                <option value="fire">Fire Safety Equipment & Training</option>
                                                <option value="investigation">Investigation Services</option>
                                                <option value="access">Access Control & Alarms</option>
                                                <option value="training">Training & Consultancy</option>
                                                <option value="multiple">Multiple Services</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your Needs *</label>
                                            <textarea
                                                rows={4}
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A3A6E] focus:ring-2 focus:ring-[#1A3A6E]/20 outline-none transition-all resize-none"
                                                placeholder="Please describe your security requirements, location, and any specific needs..."
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-gradient-to-r from-[#C41E3A] to-[#A01830] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
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
                                                    Submit Request
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                        <p className="text-center text-sm text-gray-500">
                                            Or call us directly at <a href="tel:+254752285595" className="text-[#C41E3A] font-medium">+254 752 285 595</a>
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Banner */}
            <section className="py-12 bg-gradient-to-r from-[#C41E3A] to-[#A01830]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4 text-white">
                            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Security Emergency?</h3>
                                <p className="text-white/80">Our rapid response team is available 24/7</p>
                            </div>
                        </div>
                        <a
                            href="tel:+254752285595"
                            className="px-8 py-4 bg-white text-[#C41E3A] font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Now: +254 752 285 595
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
