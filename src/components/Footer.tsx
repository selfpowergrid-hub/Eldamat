import Link from 'next/link';

const footerLinks = {
    services: [
        { name: 'Security Guarding', href: '/services#guarding' },
        { name: 'CCTV Installation', href: '/services#cctv' },
        { name: 'VIP Protection', href: '/services#vip' },
        { name: 'Dog Services', href: '/services#dog' },
        { name: 'Fire Safety', href: '/services#fire' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Certifications', href: '/about#certifications' },
        { name: 'Clients', href: '/about#clients' },
        { name: 'Careers', href: '/careers' },
    ],
    support: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Request a Quotation', href: '/contact#quote' },
        { name: 'FAQs', href: '/faq' },
        { name: 'Emergency', href: 'tel:+254752285595' },
    ],
};

export default function Footer() {
    return (
        <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
            {/* Gold Accent Strip */}
            <div className="h-1 bg-gradient-to-r from-[#a8892e] via-[#c9a84c] to-[#a8892e]" />

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg">
                                <img src="/images/logo.svg" alt="Eldamat Logo" className="w-full h-full object-contain p-1" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>ELDAMAT</span>
                                <span className="block text-xs text-[#c9a84c] tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Security Services</span>
                            </div>
                        </Link>
                        <p className="text-[#6b6b6b] mb-6 max-w-sm leading-relaxed">
                            Professional private security services that meet international standards.
                            Licensed by PSRA. Trusted by businesses across East Africa since 2010.
                        </p>
                        <div className="flex gap-3">
                            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                                <a
                                    key={social}
                                    href={`https://${social}.com`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#2d2d2d] hover:bg-gradient-to-br hover:from-[#c9a84c] hover:to-[#a8892e] hover:border-transparent flex items-center justify-center transition-all duration-300 group"
                                >
                                    <svg className="w-5 h-5 text-[#6b6b6b] group-hover:text-[#0a0a0a] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        {social === 'facebook' && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />}
                                        {social === 'twitter' && <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />}
                                        {social === 'linkedin' && <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zm2-6a2 2 0 100 4 2 2 0 000-4z" />}
                                        {social === 'instagram' && <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm2 12a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8zm-6-6a3 3 0 100 6 3 3 0 000-6zm4.5-1.5a1 1 0 100-2 1 1 0 000 2z" />}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-lg uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[#6b6b6b] hover:text-[#c9a84c] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-lg uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[#6b6b6b] hover:text-[#c9a84c] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-white mb-5 text-lg uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#c9a84c] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-[#6b6b6b] text-sm">
                                    Zul Arcade, Ground Floor<br />
                                    Oginga Odinga Street<br />
                                    Nairobi, Kenya
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[#c9a84c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+254752285595" className="text-[#6b6b6b] hover:text-[#c9a84c] text-sm transition-colors">
                                    +254 752 285 595
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[#c9a84c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:operation@eldamatsec.co.ke" className="text-[#6b6b6b] hover:text-[#c9a84c] text-sm transition-colors">
                                    operation@eldamatsec.co.ke
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-[#2d2d2d] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#6b6b6b] text-sm">
                        © {new Date().getFullYear()} Eldamat Security Services. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-[#6b6b6b] hover:text-[#c9a84c] text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-[#6b6b6b] hover:text-[#c9a84c] text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <div className="flex items-center gap-2 text-[#6b6b6b] text-sm">
                            <span>Licensed by</span>
                            <span className="font-semibold text-[#c9a84c]">PSRA</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
