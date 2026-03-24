import type { Metadata } from 'next';
import { ServiceCard } from '@/components/ServiceCard';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Bridge and structural engineering, tunnel and underground construction, geotechnical engineering, project controls, and value engineering services from Reliance Engineers.',
};

const services = [
  {
    name: 'Bridge & Structural Engineering',
    description: 'Structural engineering analysis and design for bridge and transportation infrastructure systems. Expertise spans long-span bridge engineering, structural rehabilitation and retrofits, and bridge evaluation using linear/non-linear modeling, static and dynamic analysis, seismic analysis, staged construction, and geometry control.',
    icon: 'bridge',
    category: 'Engineering',
  },
  {
    name: 'Tunnel & Underground Engineering',
    description: 'Tunnel engineering and underground construction support across hard rock and soft ground tunneling, combined sewer overflow tunnels, immersed-tube tunnels, cut-and-cover structures, and NATM applications. Delivers design solutions for complex underground structures including subway stations, deep drop shafts, and multi-level underground facilities.',
    icon: 'mountain',
    category: 'Engineering',
  },
  {
    name: 'Geotechnical & Geostructural Engineering',
    description: 'Geotechnical engineering analysis including excavation support systems and shoring design, foundation and earth-retention systems, soil-structure interaction analysis, ground improvement, and geotechnical risk mitigation. Provides integrated geostructural solutions for subsurface infrastructure challenges.',
    icon: 'layers',
    category: 'Engineering',
  },
  {
    name: 'Project Controls & Cost Engineering',
    description: 'Infrastructure project cost estimating with contractor-type bottom-up methodologies, project scheduling and controls, cost risk analysis and forecasting, construction cost management, and project performance monitoring. Includes review of contractor change orders and construction logistics planning.',
    icon: 'calculator',
    category: 'Management',
  },
  {
    name: "Owner's Engineering & Project Management",
    description: "Owner's representative services and project management support for infrastructure programs. Provides technical advisory services for transportation agencies, design review and construction oversight, project delivery strategy development, and construction support and troubleshooting.",
    icon: 'clipboard-check',
    category: 'Management',
  },
  {
    name: 'Value Engineering & Risk Management',
    description: 'Constructability reviews, value engineering services, and project risk assessment and mitigation strategies. Delivers design optimization for cost and schedule efficiency, infrastructure program performance improvement, and comprehensive risk analysis for complex construction projects.',
    icon: 'shield-check',
    category: 'Consulting',
  },
];

const naicsCodes = [
  { code: '541330', description: 'Engineering Services', primary: true },
  { code: '541340', description: 'Drafting Services', primary: false },
  { code: '541360', description: 'Geophysical Surveying and Mapping Services', primary: false },
  { code: '541370', description: 'Surveying and Mapping (except Geophysical) Services', primary: false },
  { code: '541620', description: 'Environmental Consulting Services', primary: false },
  { code: '541690', description: 'Other Scientific and Technical Consulting Services', primary: false },
];

const pscCodes = [
  { code: 'C220', description: 'Architect and Engineering – Structural Engineering', primary: true },
  { code: 'C211', description: 'Architect and Engineering – Civil Engineering', primary: false },
  { code: 'C212', description: 'Architect and Engineering – Geotechnical Engineering', primary: false },
  { code: 'C213', description: 'Architect and Engineering – Mechanical Engineering', primary: false },
  { code: 'C214', description: 'Architect and Engineering – General Management Engineering', primary: false },
  { code: 'C215', description: 'Architect and Engineering – Electrical Engineering', primary: false },
  { code: 'C216', description: 'Architect and Engineering – Marine Engineering', primary: false },
  { code: 'C219', description: 'Architect and Engineering – Other A&E Services', primary: false },
  { code: 'R425', description: 'Support – Professional: Engineering and Technical Services', primary: false },
  { code: 'R408', description: 'Support – Professional: Program Management/Project Management Services', primary: false },
];

const dbeStates = ['CT', 'NY', 'NJ', 'MA', 'VA', 'MD', 'MI', 'FL', 'TX', 'DC'];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-wide">
          <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-4">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 max-w-3xl">
            Capabilities & Services
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Comprehensive infrastructure engineering solutions for transportation agencies, prime contractors, and project owners — from concept through construction.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-grid-pattern" aria-labelledby="services-heading">
        <div className="container-wide">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* DBE Certification */}
      <section className="section bg-primary-dark text-white" aria-labelledby="dbe-heading">
        <div className="container-wide text-center">
          <p className="text-sm font-body font-semibold text-accent uppercase tracking-widest mb-3">
            Certification
          </p>
          <h2 id="dbe-heading" className="text-3xl md:text-4xl font-heading font-bold mb-6">
            DOT Certified DBE in 10 States
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Reliance Engineers holds DOT Disadvantaged Business Enterprise certifications across the eastern United States and can obtain additional certifications upon request.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {dbeStates.map((state) => (
              <span
                key={state}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-body font-bold text-accent text-sm"
              >
                {state}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS Codes */}
      <section className="section" aria-labelledby="naics-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 id="naics-heading" className="text-2xl font-heading font-bold text-primary mb-8">
                NAICS Codes
              </h2>
              <div className="space-y-4">
                {naicsCodes.map((naics) => (
                  <div key={naics.code} className="flex items-center gap-4 p-4 bg-surface-muted rounded-xl">
                    <span className={`text-lg font-body font-bold ${naics.primary ? 'text-accent' : 'text-primary'}`}>
                      {naics.code}
                    </span>
                    <span className="text-brand-muted">{naics.description}</span>
                    {naics.primary && (
                      <span className="ml-auto text-xs font-body font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                        Primary
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-8">
                PSC Codes
              </h2>
              <div className="space-y-4">
                {pscCodes.map((psc) => (
                  <div key={psc.code} className="flex items-center gap-4 p-4 bg-surface-muted rounded-xl">
                    <span className={`text-lg font-body font-bold ${psc.primary ? 'text-accent' : 'text-primary'}`}>
                      {psc.code}
                    </span>
                    <span className="text-brand-muted text-sm">{psc.description}</span>
                    {psc.primary && (
                      <span className="ml-auto text-xs font-body font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full whitespace-nowrap">
                        Primary
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading="Let's Discuss Your Project Requirements"
        description="Our team of experienced infrastructure engineers is ready to support your next project. Reach out to start a conversation."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  );
}
