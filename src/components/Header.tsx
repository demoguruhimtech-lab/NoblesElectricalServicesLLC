import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Zap } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-amber-500' : 'text-graphite-700 hover:text-navy-900'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2.5 text-base font-medium transition-colors ${
      isActive ? 'text-amber-500' : 'text-graphite-700 hover:text-navy-900'
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-md shadow-navy-900/5 backdrop-blur-md' : 'bg-white'
        }`}
      >
        <div className="container-x">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5" aria-label="Nobles Electrical Services home">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-amber-500">
                <Zap className="h-6 w-6" fill="currentColor" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-base font-bold text-navy-900 sm:text-lg">Nobles Electrical</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-graphite-400">Services, LLC</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>

              {/* Services Dropdown */}
              <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  location.pathname === '/services' || services.some((s) => location.pathname === `/${s.slug}`) ? 'text-amber-500' : 'text-graphite-700 hover:text-navy-900'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <NavLink to="/services" className="text-sm font-medium" end>
                  Services
                </NavLink>
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-xl border border-graphite-100 bg-white shadow-2xl shadow-navy-900/10 animate-slide-down">
                    <div className="max-h-[28rem] overflow-y-auto scrollbar-hide py-2">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/${s.slug}`}
                          className="block px-4 py-2.5 text-sm text-graphite-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                        >
                          {s.shortTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

              {/* Service Areas Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    location.pathname === '/service-areas' || locations.some((l) => location.pathname === `/${l.serviceSlug}-${l.slug}`) ? 'text-amber-500' : 'text-graphite-700 hover:text-navy-900'
                  }`}
                  aria-expanded={areasOpen}
                  aria-haspopup="true"
                >
                  <NavLink to="/service-areas" className="text-sm font-medium" end>
                    Service Areas
                  </NavLink>
                  <ChevronDown className={`h-4 w-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
                </button>
                {areasOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
                    <div className="overflow-hidden rounded-xl border border-graphite-100 bg-white shadow-2xl shadow-navy-900/10 animate-slide-down">
                      <div className="max-h-[28rem] overflow-y-auto scrollbar-hide py-2">
                        {locations.map((l) => (
                          <Link
                            key={l.slug}
                            to={`/${l.serviceSlug}-${l.slug}`}
                            className="block px-4 py-2.5 text-sm text-graphite-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                          >
                            {l.city}, {l.stateAbbr}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>
              <NavLink to="/faqs" className={navLinkClass}>
                FAQs
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>

              {/* Desktop Call CTA */}
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-navy-950 transition-all duration-200 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30"
                aria-label={`Call ${business.phone}`}
              >
                <Phone className="h-4 w-4" />
                {business.phone}
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-navy-950/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 right-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white shadow-2xl animate-slide-down">
            <div className="container-x py-4">
              <NavLink to="/" className={mobileNavLinkClass} end>
                Home
              </NavLink>

              <div className="py-2">
                <button
                  className="flex w-full items-center justify-between py-2.5 text-base font-medium text-graphite-700"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 border-l-2 border-navy-50 pl-4">
                    <Link to="/services" className="block py-2 text-sm font-semibold text-navy-700">
                      All Services
                    </Link>
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}`}
                        className="block py-2 text-sm text-graphite-600"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="py-2">
                <button
                  className="flex w-full items-center justify-between py-2.5 text-base font-medium text-graphite-700"
                  onClick={() => setAreasOpen(!areasOpen)}
                  aria-expanded={areasOpen}
                >
                  Service Areas
                  <ChevronDown className={`h-5 w-5 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
                </button>
                {areasOpen && (
                  <div className="ml-4 border-l-2 border-navy-50 pl-4">
                    <Link to="/service-areas" className="block py-2 text-sm font-semibold text-navy-700">
                      All Service Areas
                    </Link>
                    {locations.map((l) => (
                      <Link
                        key={l.slug}
                        to={`/${l.serviceSlug}-${l.slug}`}
                        className="block py-2 text-sm text-graphite-600"
                      >
                        {l.city}, {l.stateAbbr}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/about" className={mobileNavLinkClass}>
                About Us
              </NavLink>
              <NavLink to="/faqs" className={mobileNavLinkClass}>
                FAQs
              </NavLink>
              <NavLink to="/contact" className={mobileNavLinkClass}>
                Contact
              </NavLink>

              <div className="mt-4 border-t border-graphite-100 pt-4">
                <a
                  href={business.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-base font-semibold text-navy-950"
                >
                  <Phone className="h-5 w-5" />
                  Call {business.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
