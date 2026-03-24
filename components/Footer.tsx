import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white" role="contentinfo">
      <div className="container-wide px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-2xl mb-4">Reliance Engineers</h3>
            <p className="text-white/70 max-w-md leading-relaxed mb-6">
              Multidisciplinary infrastructure engineering consulting firm delivering innovative solutions for bridge, tunnel, geotechnical, and project delivery challenges across the United States and internationally.
            </p>
            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['DBE Certified', 'MBE', 'Small Business', 'SAM.gov Active'].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-body font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
            {/* SAM.gov Info */}
            <div className="text-white/50 text-sm space-y-1">
              <p>UEI: FKGFRQYJL8M2 | CAGE: 7XND3</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-widest text-accent mb-6">
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Accessibility', href: '/accessibility' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      style={{ transition: 'color 0.2s ease-out' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-widest text-accent mb-6">
              Contact
            </h4>
            <address className="not-italic space-y-3 text-white/70">
              <p>30 Yarmouth Road</p>
              <p>Wellesley Hills, MA 02481</p>
              <p>
                <a href="tel:781-697-8304" className="hover:text-white" style={{ transition: 'color 0.2s ease-out' }}>
                  781-697-8304
                </a>
              </p>
              <p>
                <a href="mailto:info@reliance-eng.com" className="hover:text-white" style={{ transition: 'color 0.2s ease-out' }}>
                  info@reliance-eng.com
                </a>
              </p>
            </address>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/reliance-engineers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-white/70 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              style={{ transition: 'color 0.2s ease-out' }}
              aria-label="Reliance Engineers on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; 2026 Reliance Engineers LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/privacy" className="hover:text-white" style={{ transition: 'color 0.2s ease-out' }}>
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-white" style={{ transition: 'color 0.2s ease-out' }}>
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
