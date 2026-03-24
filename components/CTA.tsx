import Link from 'next/link';

interface CTAProps {
  heading: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export function CTA({ heading, description, primaryCTA, secondaryCTA }: CTAProps) {
  return (
    <section className="relative bg-primary overflow-hidden" aria-labelledby="cta-heading">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-50" />

      {/* Structural grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative container-wide px-6 md:px-12 lg:px-20 py-20 md:py-28 text-center">
        <h2
          id="cta-heading"
          className="text-3xl md:text-4xl font-heading font-bold text-white mb-6"
        >
          {heading}
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
