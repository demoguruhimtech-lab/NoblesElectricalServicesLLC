import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface Crumb {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-x pt-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li>
          <Link to="/" className="flex items-center gap-1 text-graphite-400 hover:text-amber-500 transition-colors">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-graphite-300" />
            {crumb.path && i < crumbs.length - 1 ? (
              <Link to={crumb.path} className="text-graphite-400 hover:text-amber-500 transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="font-medium text-graphite-600" aria-current="page">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
