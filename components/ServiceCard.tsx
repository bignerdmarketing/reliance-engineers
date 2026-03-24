interface ServiceCardProps {
  name: string;
  description: string;
  icon: string;
}

/* SVG icons for engineering services */
function ServiceIcon({ icon }: { icon: string }) {
  const className = "w-7 h-7 text-primary group-hover:text-accent";
  const style = { transition: 'color 0.2s ease-out' };

  switch (icon) {
    case 'bridge':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21h18" />
          <path d="M5 21V7" />
          <path d="M19 21V7" />
          <path d="M5 7h14" />
          <path d="M5 7c0 4 3.5 7 7 7s7-3 7-7" />
          <path d="M8 21v-4" />
          <path d="M16 21v-4" />
          <path d="M12 14v7" />
        </svg>
      );
    case 'mountain':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 20h20" />
          <path d="M12 4c-4 0-8 7.2-8 16h16c0-8.8-4-16-8-16z" />
          <path d="M8 20v-6a4 4 0 018 0v6" />
        </svg>
      );
    case 'layers':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case 'calculator':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="10" y2="10" />
          <line x1="14" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="10" y2="14" />
          <line x1="14" y1="14" x2="16" y2="14" />
          <line x1="8" y1="18" x2="16" y2="18" />
        </svg>
      );
    case 'clipboard-check':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      );
    case 'shield-check':
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
  }
}

export function ServiceCard({ name, description, icon }: ServiceCardProps) {
  return (
    <div className="card group">
      {/* Icon */}
      <div
        className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10"
        style={{ transition: 'background-color 0.2s ease-out' }}
      >
        <ServiceIcon icon={icon} />
      </div>

      <h3 className="text-xl font-heading font-bold text-primary mb-3">{name}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
