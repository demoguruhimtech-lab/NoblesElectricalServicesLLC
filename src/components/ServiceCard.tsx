import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services } from '@/data/services';

export default function ServiceCard({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  const Icon = (Icons[service.needs[0]?.icon as keyof typeof Icons] || Icons.Zap) as Icons.LucideIcon;

  return (
    <Link
      to={`/${service.slug}`}
      className="group card-hover block overflow-hidden rounded-2xl border border-graphite-100 bg-white"
    >
      <div className="relative h-48 overflow-hidden sm:h-52">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-navy-950">
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-sm font-semibold text-white">{service.shortTitle}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-navy-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-graphite-600">
          {compact ? service.summary : service.intro.slice(0, 120) + '...'}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-colors group-hover:text-amber-500">
          Explore Service
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
