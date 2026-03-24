'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-primary border-b border-primary-light/30">
      <div className="container-wide flex items-center justify-between h-20 px-6 md:px-12 lg:px-20">
        {/* Logo / Company Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-dark font-heading font-bold text-lg">RE</span>
          </div>
          <span className="font-heading font-bold text-xl text-white hidden sm:block">
            Reliance Engineers
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold text-white/80 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              style={{ transition: 'color 0.2s ease-out' }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-accent text-sm py-2 px-5">
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:bg-white/10 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          style={{ transition: 'background-color 0.2s ease-out' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-primary-light/30 bg-primary px-6 py-4 space-y-2"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 px-4 font-body font-semibold text-white/80 hover:text-accent hover:bg-white/5 rounded-lg"
              style={{ transition: 'color 0.2s ease-out, background-color 0.2s ease-out' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-accent w-full text-center mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Get In Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
