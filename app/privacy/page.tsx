import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Reliance Engineers LLC privacy policy — how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-wide">
          <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 max-w-3xl">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Effective Date: January 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" aria-labelledby="privacy-heading">
        <div className="container-wide max-w-3xl">
          <h2 id="privacy-heading" className="sr-only">Privacy Policy Details</h2>

          <div className="prose-style space-y-10">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Introduction</h2>
              <p className="text-brand-muted leading-relaxed">
                Reliance Engineers LLC (&quot;Reliance Engineers,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at reliance-eng.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Information We Collect</h2>
              <h3 className="text-lg font-heading font-bold text-primary mb-2">Information You Provide</h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide when you contact us through our website, including your name, email address, phone number, organization, and the content of your message.
              </p>
              <h3 className="text-lg font-heading font-bold text-primary mb-2">Automatically Collected Information</h3>
              <p className="text-brand-muted leading-relaxed">
                When you access our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website. This information is collected through cookies and similar tracking technologies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">How We Use Your Information</h2>
              <p className="text-brand-muted leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-brand-muted space-y-2">
                <li>Respond to your inquiries and provide requested information</li>
                <li>Communicate with you about our engineering services</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Analyze website usage to improve our content and services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Cookies and Tracking</h2>
              <p className="text-brand-muted leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device. You can control cookie settings through your browser preferences. Disabling cookies may limit certain website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Third-Party Services</h2>
              <p className="text-brand-muted leading-relaxed">
                We may use third-party analytics services to help understand website usage. These services may collect information about your use of our website through cookies and similar technologies. We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Data Security</h2>
              <p className="text-brand-muted leading-relaxed">
                We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Data Retention</h2>
              <p className="text-brand-muted leading-relaxed">
                We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. Contact form submissions are retained for a reasonable period to facilitate ongoing communication.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Your Rights</h2>
              <p className="text-brand-muted leading-relaxed">
                Depending on your jurisdiction, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict the processing of your data. To exercise these rights, please contact us using the information below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Changes to This Policy</h2>
              <p className="text-brand-muted leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-brand-muted leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-6 bg-surface-muted rounded-2xl">
                <p className="font-body font-semibold text-primary">Reliance Engineers LLC</p>
                <p className="text-brand-muted">30 Yarmouth Road, Wellesley Hills, MA 02481</p>
                <p className="text-brand-muted">Phone: 781-697-8304</p>
                <p className="text-brand-muted">Email: info@reliance-eng.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
