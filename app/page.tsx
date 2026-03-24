import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { CTA } from '@/components/CTA';

const services = [
  {
    name: 'Bridge & Structural Engineering',
    description: 'Structural engineering analysis and design for bridge and transportation infrastructure systems. Expertise spans long-span bridge engineering, structural rehabilitation, and bridge evaluation using advanced modeling techniques.',
    icon: 'bridge',
  },
  {
    name: 'Tunnel & Underground Engineering',
    description: 'Tunnel engineering and underground construction support across hard rock and soft ground tunneling, immersed-tube tunnels, cut-and-cover structures, and NATM applications for complex underground facilities.',
    icon: 'mountain',
  },
  {
    name: 'Geotechnical & Geostructural Engineering',
    description: 'Excavation support systems, foundation and earth-retention design, soil-structure interaction analysis, ground improvement, and integrated geostructural solutions for subsurface infrastructure.',
    icon: 'layers',
  },
  {
    name: 'Project Controls & Cost Engineering',
    description: 'Bottom-up cost estimating, project scheduling and controls, cost risk analysis, construction cost management, and project performance monitoring for large-scale infrastructure programs.',
    icon: 'calculator',
  },
  {
    name: "Owner's Engineering & Project Management",
    description: "Owner's representative services, technical advisory for transportation agencies, design review and construction oversight, and project delivery strategy development.",
    icon: 'clipboard-check',
  },
  {
    name: 'Value Engineering & Risk Management',
    description: 'Constructability reviews, value engineering services, risk assessment and mitigation strategies, and design optimization for cost and schedule efficiency on complex construction projects.',
    icon: 'shield-check',
  },
];

const certifications = ['Small Business', 'Minority-Owned', 'DOT Certified DBE', 'MBE'];

const featuredProjects = [
  {
    client: 'Massachusetts Turnpike Authority',
    project: 'Leonard P. Zakim Bunker Hill Memorial Bridge',
    description: 'Lead engineering for Boston\'s iconic cable-stayed bridge — 745-foot main span carrying ten lanes of traffic over the Charles River with first-of-their-kind engineering solutions.',
  },
  {
    client: 'Massachusetts Turnpike Authority',
    project: 'Central Artery/Tunnel Project (Big Dig)',
    description: 'Project management services for one of the most complex urban infrastructure projects in U.S. history.',
  },
  {
    client: 'Florida Department of Transportation',
    project: 'Port of Miami Tunnel',
    description: 'Project management services for the major bored tunnel connecting the Port of Miami to the MacArthur Causeway.',
  },
  {
    client: 'Massachusetts Turnpike Authority',
    project: 'Storrow Drive Bridge',
    description: 'Award-winning 830-foot signature bridge featuring the largest single-cell steel-composite box girder in North America with a 380-foot main span.',
  },
];

const testimonials = [
  {
    quote: 'Reliance is a great source for outstanding expertise!',
    author: 'Project Executive',
    organization: 'Infrastructure Client',
  },
  {
    quote: 'RE identified significant savings of costs, time, and improved constructibility.',
    author: 'Project Manager',
    organization: 'Contractor Partner',
  },
  {
    quote: 'We appreciate the great work with us over the years.',
    author: 'Program Director',
    organization: 'Municipal Infrastructure Client',
  },
];

const keyClients = [
  'MassDOT',
  'MBTA',
  'VDOT',
  'Metrolinx',
  'City of Boston',
  'FHWA',
  'FDOT',
  'Port Authority of NY & NJ',
  'MWRA',
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Infrastructure Engineering Excellence"
        subtitle="An experienced team you can rely on"
        description="Reliance Engineers delivers innovative, dependable, and technically sound engineering solutions for complex bridge, tunnel, geotechnical, and transportation infrastructure projects across the United States and internationally."
        primaryCTA={{ label: 'Our Services', href: '/services' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />

      {/* Trust Signals — Certifications Bar */}
      <section className="bg-primary-dark py-6" aria-label="Certifications">
        <div className="container-wide flex flex-wrap items-center justify-center gap-4 px-6">
          {certifications.map((cert) => (
            <span key={cert} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-body font-medium text-white">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 010-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              {cert}
            </span>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-surface-muted bg-grid-pattern" aria-labelledby="services-heading">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 id="services-heading" className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Engineering Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Comprehensive infrastructure engineering expertise from concept through construction, delivered by a team with decades of experience on landmark projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section" aria-labelledby="projects-heading">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-3">
              Past Performance
            </p>
            <h2 id="projects-heading" className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Landmark Projects
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our principals have led engineering on some of the most complex infrastructure projects in the nation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.project} className="card group border-l-4 border-accent">
                <p className="text-sm font-body font-semibold text-secondary uppercase tracking-wide mb-2">
                  {project.client}
                </p>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {project.project}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-primary-dark text-white" aria-labelledby="testimonials-heading">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-3">
              Client Feedback
            </p>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-heading font-bold">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.quote} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <svg className="w-8 h-8 text-accent mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white/90 leading-relaxed mb-6 text-lg italic">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-body font-semibold text-accent">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Clients / Agencies */}
      <section className="section bg-surface-muted" aria-labelledby="clients-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-3">
              Trusted By
            </p>
            <h2 id="clients-heading" className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Agencies & Clients
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {keyClients.map((client) => (
              <span
                key={client}
                className="px-6 py-3 bg-white border border-primary/10 rounded-xl text-sm font-body font-semibold text-primary shadow-layered"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        heading="Ready to Discuss Your Project?"
        description="Whether you need bridge engineering, tunnel design, geotechnical analysis, or project management support, our team of experienced engineers is ready to help."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Services', href: '/services' }}
      />
    </>
  );
}
