import { Link } from 'react-router-dom';
import { Zap, Phone, MapPin, Clock, Mail } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-graphite-300">
      <div className="container-x py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="Nobles Electrical Services home">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-navy-950">
                <Zap className="h-6 w-6" fill="currentColor" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-bold text-white">Nobles Electrical</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-graphite-400">Services, LLC</div>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-graphite-400">
              Dependable electrical services for homes and businesses in Zachary, LA and the surrounding Louisiana communities.
            </p>
            <a
              href={business.phoneHref}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-amber-400"
            >
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    className="text-sm text-graphite-400 transition-colors hover:text-amber-400"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Service Areas</h3>
            <ul className="mt-4 space-y-2.5">
              {locations.slice(0, 6).map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/${l.serviceSlug}-${l.slug}`}
                    className="text-sm text-graphite-400 transition-colors hover:text-amber-400"
                  >
                    {l.city}, {l.stateAbbr}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/service-areas"
                  className="text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
                >
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a href={business.phoneHref} className="flex items-start gap-3 text-sm text-graphite-400 hover:text-amber-400">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  {business.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-graphite-400">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  {business.primaryCity}, {business.primaryStateAbbr}
                </div>
              </li>
              <li>
                <Link to="/contact" className="flex items-start gap-3 text-sm text-graphite-400 hover:text-amber-400">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  Contact Page
                </Link>
              </li>
              <li>
                <a
                  href={business.mapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-graphite-400 hover:text-amber-400"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  Google Maps Listing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-navy-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-graphite-500">
              &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link to="/about" className="text-xs text-graphite-500 hover:text-amber-400">About</Link>
              <Link to="/contact" className="text-xs text-graphite-500 hover:text-amber-400">Contact</Link>
              <Link to="/faqs" className="text-xs text-graphite-500 hover:text-amber-400">FAQs</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
