import type { Metadata } from 'next';
import { TeamMember } from '@/components/TeamMember';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Reliance Engineers — our mission, leadership team, and commitment to infrastructure engineering excellence since 2013.',
  alternates: {
    canonical: 'https://reliance-engineers.vercel.app/about',
  },
  openGraph: {
    title: 'About Us | Reliance Engineers',
    description: 'Learn about Reliance Engineers — our mission, leadership team, and commitment to infrastructure engineering excellence since 2013.',
    type: 'website',
    url: 'https://reliance-engineers.vercel.app/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Reliance Engineers',
    description: 'Learn about Reliance Engineers — our mission, leadership team, and commitment to infrastructure engineering excellence since 2013.',
  },
};

const leaders = [
  {
    name: 'Sena Kumarasena, PhD, PE',
    title: 'President, Principal Engineer, Bridges and Structures',
    bio: 'Over 35 years of experience in planning, design, rehabilitation, and construction management of bridges of all types. PhD and MS in Structural Engineering from The Johns Hopkins University. Licensed PE in CA, CT, FL, MD, MA, MI, NY, and WA.',
    photoUrl: 'https://reliance-eng.com/wp-content/uploads/2024/12/SenaKumarasena.25.2-Edit-600x750.jpg',
    linkedin: 'https://www.linkedin.com/in/sena-kumarasena-56704b236/',
  },
  {
    name: 'Anthony Lancellotti, PE',
    title: 'Principal Engineer, Tunnel & Structural Engineering, and Project Management',
    bio: 'Over 40 years in transportation infrastructure and complex tunneling projects. Former National Director of Technical Excellence Centers at Parsons Brinckerhoff. Led multidisciplinary team of 300+ on the Big Dig. MS and BS from Columbia University.',
    photoUrl: 'https://reliance-eng.com/wp-content/uploads/2024/12/anthony-lancellotti.jpg',
    linkedin: 'https://www.linkedin.com/in/tony-lancellotti-55619361/',
  },
  {
    name: 'Abdalla Shalaby, PEng, PE, IntPE',
    title: 'Principal Engineer, Geostructural Engineering',
    bio: 'Specializes in deep foundations, earth and water retention systems, and soil-structure interaction. B.A.Sc. with Honors in Geological Engineering from University of Waterloo. Licensed in Ontario, Alberta, British Columbia, Nevada, and Texas.',
    photoUrl: 'https://reliance-eng.com/wp-content/uploads/2024/12/250117_RE_02_4215-600x750.jpg',
    linkedin: 'https://www.linkedin.com/in/abdalla-shalaby-p-eng-p-e-intpe-2082187b/',
  },
  {
    name: 'Eldon L. Abbott, PE',
    title: 'Principal Engineer, Tunnel and Geotechnical Engineering',
    bio: 'Over 40 years of experience covering geotechnical engineering, tunneling, transit infrastructure, and marine facilities. Former VP at Parsons Brinckerhoff. MS and BS from Clarkson University. Licensed PE in MA, MI, and NY.',
    photoUrl: 'https://reliance-eng.com/wp-content/uploads/2024/12/250117_RE_02_4134-600x750.jpg',
    linkedin: 'https://www.linkedin.com/in/eldon-abbott-263779a8/',
  },
  {
    name: 'Peter Donahue, PE',
    title: "Principal Engineer, Owner and Engineering Services",
    bio: 'Over 50 years of experience including 33 years at WSP with major tunnel projects such as the Big Dig and Port of Miami Tunnel. MBA from New Hampshire College and BS from Roger Williams College. Licensed PE in FL, ME, MA, NH, and VA.',
    photoUrl: 'https://reliance-eng.com/wp-content/uploads/2024/12/250117_RE_02_4158-600x750.jpg',
    linkedin: 'https://www.linkedin.com/in/peter-donahue-a384b498/',
  },
  {
    name: 'Atif Nazir, M.Eng., P.Eng., PMP',
    title: 'Senior Engineer, Geotechnical Engineering',
    bio: 'Senior engineer specializing in geotechnical engineering. Holds a Master of Engineering degree and is a licensed Professional Engineer and certified Project Management Professional.',
    photoUrl: 'https://reliance-eng.com/wp-content/uploads/2025/05/Screenshot-2025-05-20-115106-600x658.jpg',
    linkedin: '',
  },
  {
    name: 'Gary Waters, PE',
    title: 'Principal Engineer, Project Controls',
    bio: 'Nearly 30 years in planning, estimating, and execution of large-scale infrastructure projects across highway, rail, transit, and airport sectors. BS in Civil Engineering from Central Connecticut State University. Licensed PE in Connecticut.',
    photoUrl: 'https://reliance-eng.com/wp-content/uploads/2025/04/250117_RE_02_4298-1-600x750.jpg',
    linkedin: '',
  },
  {
    name: 'Ralph Borjeson, PE',
    title: 'Senior Associate, Geotechnical and Foundation Engineering',
    bio: 'Senior associate specializing in geotechnical and foundation engineering. Licensed Professional Engineer with expertise in subsurface investigations and foundation design for infrastructure projects.',
    photoUrl: 'https://reliance-eng.com/wp-content/uploads/2024/12/ralph-borjeson.jpg',
    linkedin: '',
  },
];

const coreValues = [
  { name: 'Innovation', description: 'Forward-thinking approaches using advanced analysis and digital modeling' },
  { name: 'Simplicity', description: 'Cutting through complexity to deliver clear, efficient designs' },
  { name: 'Technical Excellence', description: 'Excellence is not a milestone, it is a standard upheld in every phase' },
  { name: 'Responsiveness', description: 'Quick issue resolution and proactive adaptation' },
  { name: 'Expertise', description: 'Deep experience across structural, geotechnical, and transportation engineering' },
];

const offices = [
  { name: 'Wellesley Hills, MA', label: 'Headquarters', address: '30 Yarmouth Road, Wellesley Hills, MA 02481' },
  { name: 'Bloomfield Hills, MI', label: 'Michigan Office', address: 'Bloomfield Hills, Michigan' },
  { name: 'Toronto, ON', label: 'Canada Office', address: 'Toronto, Ontario, Canada' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-wide">
          <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 max-w-3xl">
            An Experienced Team You Can Rely On
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Founded in 2013 and headquartered in Wellesley Hills, Massachusetts, Reliance Engineers provides advanced engineering expertise for complex transportation and infrastructure projects across the United States and internationally.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-grid-pattern" aria-labelledby="mission-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-3">
                Our Mission
              </p>
              <h2 id="mission-heading" className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Delivering Innovative Engineering Solutions for Critical Infrastructure
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed mb-6">
                RE delivers innovative engineering solutions that rise to the challenges and complexities of any critical infrastructure project. We provide dependable, technically sound solutions for optimization and risk mitigation across bridge, tunnel, geotechnical, and project delivery disciplines.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Our firm specializes in design, value engineering, project controls, constructability reviews, and construction support — combining the technical depth of a large firm with the responsiveness and accountability of a principal-led practice.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-6">Core Values</h3>
              <div className="space-y-4">
                {coreValues.map((value) => (
                  <div key={value.name} className="card p-6">
                    <h4 className="font-heading font-bold text-primary mb-1">{value.name}</h4>
                    <p className="text-brand-muted text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-surface-muted" aria-labelledby="team-heading">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-3">
              Leadership
            </p>
            <h2 id="team-heading" className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Our Team
            </h2>
            <p className="mt-4 text-brand-muted max-w-2xl mx-auto">
              Principal engineers with decades of experience on the most complex infrastructure projects in the nation and abroad.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <TeamMember key={leader.name} {...leader} />
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section" aria-labelledby="offices-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-3">
              Our Presence
            </p>
            <h2 id="offices-heading" className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Office Locations
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.name} className="card text-center">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-1">{office.name}</h3>
                <p className="text-sm font-body font-semibold text-accent mb-2">{office.label}</p>
                <p className="text-brand-muted text-sm">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAM.gov Registration */}
      <section className="section bg-primary-dark text-white" aria-labelledby="sam-heading">
        <div className="container-wide text-center">
          <h2 id="sam-heading" className="text-2xl font-heading font-bold mb-8">Federal Registration</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-2">UEI Number</p>
              <p className="text-white text-lg font-body font-bold">FKGFRQYJL8M2</p>
            </div>
            <div>
              <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-2">CAGE Code</p>
              <p className="text-white text-lg font-body font-bold">7XND3</p>
            </div>
            <div>
              <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-2">SAM.gov Status</p>
              <p className="text-white text-lg font-body font-bold">Active</p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading="Partner With Experienced Engineers"
        description="Our principals bring decades of experience on landmark infrastructure projects. Let us bring that expertise to your next project."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Services', href: '/services' }}
      />
    </>
  );
}
