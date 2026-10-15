import { Phone } from 'lucide-react';
import { business } from '@/data/business';

export default function CallCTA({
  variant = 'primary',
  label = `Call ${business.phone}`,
  className = '',
}: {
  variant?: 'primary' | 'secondary' | 'outline' | 'navy';
  label?: string;
  className?: string;
}) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2';

  const variants = {
    primary: 'bg-amber-500 text-navy-950 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30',
    secondary: 'border-2 border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10',
    outline: 'border-2 border-navy-700 bg-transparent text-navy-700 hover:border-navy-900 hover:bg-navy-900 hover:text-white',
    navy: 'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-900/20',
  };

  return (
    <a
      href={business.phoneHref}
      className={`${base} ${variants[variant]} ${className}`}
      aria-label={`Call Nobles Electrical Services at ${business.phone}`}
    >
      <Phone className="h-4 w-4 flex-shrink-0" />
      {label}
    </a>
  );
}
