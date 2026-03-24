import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Reliance Engineers LLC accessibility statement — our commitment to WCAG 2.1 AA standards and Section 508 compliance.',
};

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-wide">
          <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-4">
            Accessibility
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 max-w-3xl">
            Accessibility Statement
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Our commitment to providing an accessible web experience for all users.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" aria-labelledby="accessibility-heading">
        <div className="container-wide max-w-3xl">
          <h2 id="accessibility-heading" className="sr-only">Accessibility Statement Details</h2>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Our Commitment</h2>
              <p className="text-brand-muted leading-relaxed">
                Reliance Engineers LLC is committed to ensuring digital accessibility for people with disabilities. We continually work to improve the user experience for everyone and apply the relevant accessibility standards to achieve this goal.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Conformance Standards</h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Our website is also designed to be consistent with Section 508 of the Rehabilitation Act, which requires that federal agencies&apos; electronic and information technology is accessible to people with disabilities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Accessible Features</h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                We have taken the following measures to ensure accessibility of our website:
              </p>
              <ul className="list-disc list-inside text-brand-muted space-y-2">
                <li>Skip navigation links to bypass repetitive content</li>
                <li>Proper heading hierarchy for clear document structure</li>
                <li>Descriptive alt text on all images</li>
                <li>Sufficient color contrast ratios meeting WCAG 2.1 AA standards (minimum 4.5:1 for normal text)</li>
                <li>Keyboard-navigable interactive elements with visible focus indicators</li>
                <li>Semantic HTML markup for assistive technology compatibility</li>
                <li>ARIA labels and landmarks where appropriate</li>
                <li>Responsive design that works across devices and screen sizes</li>
                <li>Form inputs with associated labels and error messaging</li>
                <li>No content that flashes more than three times per second</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Assistive Technologies</h2>
              <p className="text-brand-muted leading-relaxed">
                Our website is designed to be compatible with the following assistive technologies: screen readers (including NVDA, JAWS, and VoiceOver), screen magnification software, speech recognition software, and keyboard-only navigation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Known Limitations</h2>
              <p className="text-brand-muted leading-relaxed">
                While we strive for full accessibility, some content may not yet be fully accessible. We are actively working to identify and resolve any accessibility issues. If you encounter any barriers, please let us know so we can address them promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Feedback and Accommodation Requests</h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or need information in an alternative format, please contact us:
              </p>
              <div className="p-6 bg-surface-muted rounded-2xl">
                <p className="font-body font-semibold text-primary">Reliance Engineers LLC</p>
                <p className="text-brand-muted">30 Yarmouth Road, Wellesley Hills, MA 02481</p>
                <p className="text-brand-muted">Phone: 781-697-8304</p>
                <p className="text-brand-muted">Email: info@reliance-eng.com</p>
              </div>
              <p className="text-brand-muted leading-relaxed mt-4">
                We will make reasonable efforts to respond to accessibility feedback within five business days and to provide the requested information in an accessible format.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Enforcement</h2>
              <p className="text-brand-muted leading-relaxed">
                If you are not satisfied with our response to your accessibility concern, you may file a complaint with the U.S. Department of Justice, Civil Rights Division, or contact your local disability rights organization for assistance.
              </p>
            </div>

            <div>
              <p className="text-brand-subtle text-sm italic">
                This accessibility statement was last updated on January 1, 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
