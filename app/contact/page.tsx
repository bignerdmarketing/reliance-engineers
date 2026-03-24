import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Reliance Engineers. Offices in Wellesley Hills MA, Bloomfield Hills MI, and Toronto ON.',
  alternates: {
    canonical: 'https://reliance-engineers.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Us | Reliance Engineers',
    description: 'Get in touch with Reliance Engineers. Offices in Wellesley Hills MA, Bloomfield Hills MI, and Toronto ON.',
    type: 'website',
    url: 'https://reliance-engineers.vercel.app/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Reliance Engineers',
    description: 'Get in touch with Reliance Engineers. Offices in Wellesley Hills MA, Bloomfield Hills MI, and Toronto ON.',
  },
};

const certifications = [
  'DOT Certified DBE',
  'Minority Business Enterprise (MBE)',
  'Small Business',
  'Subcontinent Asian American-Owned',
  'SAM.gov Registered',
];

const offices = [
  {
    name: 'Headquarters',
    location: 'Wellesley Hills, MA',
    address: '30 Yarmouth Road, Wellesley Hills, Massachusetts 02481',
  },
  {
    name: 'Michigan Office',
    location: 'Bloomfield Hills, MI',
    address: 'Bloomfield Hills, Michigan',
  },
  {
    name: 'Canada Office',
    location: 'Toronto, ON',
    address: 'Toronto, Ontario, Canada',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-wide">
          <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 max-w-3xl">
            Get In Touch
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Ready to discuss your infrastructure engineering project? We look forward to learning about your challenges and how we can help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section" aria-labelledby="contact-heading">
        <div className="container-wide">
          <h2 id="contact-heading" className="sr-only">Contact Information</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>

            {/* Contact Details */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-1">
                      Address
                    </p>
                    <p className="text-brand-muted">
                      30 Yarmouth Road<br />
                      Wellesley Hills, MA 02481
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:781-697-8304"
                      className="text-primary hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      style={{ transition: 'color 0.2s ease-out' }}
                    >
                      781-697-8304
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@reliance-eng.com"
                      className="text-primary hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      style={{ transition: 'color 0.2s ease-out' }}
                    >
                      info@reliance-eng.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Offices */}
              <div>
                <h3 className="text-lg font-heading font-bold text-primary mb-4">
                  Office Locations
                </h3>
                <div className="space-y-3">
                  {offices.map((office) => (
                    <div key={office.name} className="flex items-start gap-3 p-3 bg-surface-muted rounded-xl">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <p className="font-body font-semibold text-primary text-sm">{office.name}</p>
                        <p className="text-brand-muted text-sm">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications sidebar */}
              <div>
                <h3 className="text-lg font-heading font-bold text-primary mb-4">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span key={cert} className="cert-badge">{cert}</span>
                  ))}
                </div>
              </div>

              {/* SAM.gov Info */}
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                <h3 className="text-lg font-heading font-bold text-primary mb-3">
                  Federal Registration
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-body font-semibold text-accent uppercase tracking-widest mb-1">UEI</p>
                    <p className="font-body font-bold text-primary">FKGFRQYJL8M2</p>
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold text-accent uppercase tracking-widest mb-1">CAGE Code</p>
                    <p className="font-body font-bold text-primary">7XND3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
