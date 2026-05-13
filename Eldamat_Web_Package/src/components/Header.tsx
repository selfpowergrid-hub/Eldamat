'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#0D2140]/95 backdrop-blur-xl shadow-lg py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-14 h-14 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(196,30,58,0.4)] transition-all duration-300">
              <img src="/images/logo.svg" alt="Eldamat Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#C41E3A] rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-tight">ELDAMAT</span>
            <span className="text-xs text-white/60 tracking-widest uppercase">Security Services</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white relative group transition-colors"
            >
              {link.name}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#E63350] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all"
          >
            Request a Quotation
          </Link>
          <Link
            href="tel:+254752285595"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#C41E3A] to-[#A01830] rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(196,30,58,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0D2140]/98 backdrop-blur-xl border-t border-white/10">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:+254752285595"
              className="mt-4 px-5 py-3 text-center text-white bg-gradient-to-r from-[#C41E3A] to-[#A01830] rounded-lg font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Call Now: +254 752 285 595
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
