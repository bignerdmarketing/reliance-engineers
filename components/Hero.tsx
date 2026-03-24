import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function Hero({ title, subtitle, description, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="relative bg-primary overflow-hidden" aria-labelledby="hero-heading">
      {/* Structural grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" style={{ opacity: 0.92 }} />

      {/* Decorative cable lines — engineering motif */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg className="absolute -right-20 top-0 h-full w-1/2 opacity-[0.04]" viewBox="0 0 400 600" fill="none" stroke="white" strokeWidth="1">
          <line x1="200" y1="0" x2="0" y2="600" />
          <line x1="200" y1="0" x2="50" y2="600" />
          <line x1="200" y1="0" x2="100" y2="600" />
          <line x1="200" y1="0" x2="150" y2="600" />
          <line x1="200" y1="0" x2="200" y2="600" />
          <line x1="200" y1="0" x2="250" y2="600" />
          <line x1="200" y1="0" x2="300" y2="600" />
          <line x1="200" y1="0" x2="350" y2="600" />
          <line x1="200" y1="0" x2="400" y2="600" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative container-wide px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-6">
            {subtitle}
          </p>
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-8"
            style={{ letterSpacing: '-0.03em' }}
          >
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={primaryCTA.href} className="btn-accent">
              {primaryCTA.label}
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="btn-outline-white">
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
    </section>
  );
}
