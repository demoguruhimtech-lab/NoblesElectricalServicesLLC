import { Navigate, Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import { business } from '@/data/business';
import { locations, LocationData } from '@/data/locations';
import { services } from '@/data/services';
import { breadcrumbSchema, faqSchema } from '@/components/StructuredData';

export default function LocationPage({ locSlug }: { locSlug?: string }) {
  const location = locations.find((l) => `${l.serviceSlug}-${l.slug}` === locSlug) as LocationData | undefined;

  if (!location) return <Navigate to="/service-areas" replace />;

  const currentService = services.find((s) => s.slug === location.serviceSlug);
  const pagePath = `/${location.serviceSlug}-${location.slug}`;

  const crumbs = [
    { label: 'Service Areas', path: '/service-areas' },
    { label: `${location.city}, ${location.stateAbbr}`, path: pagePath },
  ];

  const structuredData = [breadcrumbSchema(crumbs), faqSchema(location.faqs)];

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        canonicalPath={`${location.serviceSlug}-${location.slug}`}
        ogImage={location.image}
        structuredData={structuredData}
      />

      <Breadcrumbs crumbs={crumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-14 lg:py-20">
        <img
          src={location.image}
          alt={location.imageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-900/60" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <MapPin className="h-3.5 w-3.5" />
              {location.city}, {location.stateAbbr}
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
              {location.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-200 text-balance">
              {location.intro}
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <CallCTA variant="primary" label={`Call ${business.phone}`} className="px-8 py-4 text-base" />
              <Link to="/contact" className="btn-secondary px-8 py-4 text-base">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
                About {location.city}, {location.stateAbbr}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-graphite-600">{location.localContext}</p>

              {/* Primary Service */}
              {currentService && (
                <div className="mt-10 rounded-2xl border border-graphite-100 bg-graphite-50 p-6">
                  <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Primary Service in {location.city}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-navy-900">{currentService.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-600">{currentService.summary}</p>
                  <Link
                    to={`/${currentService.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-500"
                  >
                    Learn About {currentService.shortTitle}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}

              {/* Other Services */}
              <h3 className="mt-10 font-display text-xl font-bold text-navy-900">Other Services Available in {location.city}</h3>
              <p className="mt-2 text-sm text-graphite-600">
                While this page highlights {currentService?.shortTitle.toLowerCase() || 'our services'} in {location.city}, we also offer:
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {services.filter((s) => s.slug !== location.serviceSlug).slice(0, 6).map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-graphite-100 bg-white p-3.5 transition-all hover:border-navy-200 hover:shadow-md"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber-500" />
                    <span className="text-sm font-medium text-navy-800">{s.shortTitle}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-5">
                <Link to="/services" className="text-sm font-semibold text-amber-600 hover:text-amber-500">
                  View All Services
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-navy-900/15">
                <img
                  src={location.image}
                  alt={location.imageAlt}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
              </div>

              {/* Nearby Areas */}
              <div className="mt-6 rounded-2xl border border-graphite-100 bg-white p-5">
                <h3 className="font-display text-base font-bold text-navy-900">Nearby Areas</h3>
                <ul className="mt-3 space-y-2">
                  {location.nearbyAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-sm text-graphite-600">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Card */}
              <div className="mt-6 rounded-2xl bg-navy-900 p-6">
                <h3 className="font-display text-lg font-bold text-white">Serving {location.city}</h3>
                <p className="mt-2 text-sm text-graphite-300">
                  Call us at {business.phone} to schedule service in {location.city}, {location.stateAbbr}.
                </p>
                <div className="mt-4">
                  <CallCTA variant="primary" label={`Call ${business.phone}`} className="w-full" />
                </div>
                <Link
                  to="/contact"
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
                >
                  Or Contact Us Online
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">FAQs</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              {location.city} Electrical Service FAQs
            </h2>
          </div>
          <div className="mt-10">
            <FAQAccordion faqs={location.faqs} />
          </div>
        </div>
      </section>

      {/* Links back */}
      <section className="bg-navy-900 py-10">
        <div className="container-x">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/service-areas" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                All Service Areas
              </Link>
              <span className="text-graphite-600">|</span>
              {currentService && (
                <Link to={`/${currentService.slug}`} className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                  {currentService.shortTitle}
                </Link>
              )}
              <span className="text-graphite-600">|</span>
              <Link to="/contact" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                Contact Page
              </Link>
            </div>
            <CallCTA variant="primary" label={`Call ${business.phone}`} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
