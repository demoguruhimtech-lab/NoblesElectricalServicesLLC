import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Zap, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import { business, images } from '@/data/business';
import { locations } from '@/data/locations';
import { localBusinessSchema } from '@/components/StructuredData';

export default function ServiceAreasPage() {
  return (
    <>
      <SEO
        title={`Service Areas | ${business.name} | Zachary, LA Electrician`}
        description={`Nobles Electrical Services serves Zachary, Baton Rouge, Baker, Central, St. Francisville, Clinton, Port Allen, Brusly, Denham Springs, and Prairieville, LA. Call ${business.phone}.`}
        canonicalPath="service-areas"
        structuredData={localBusinessSchema}
      />

      <Breadcrumbs crumbs={[{ label: 'Service Areas' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-24">
        <img
          src={images.electricianDrill}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <MapPin className="h-3.5 w-3.5" />
              Where We Work
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
              Service Areas in Louisiana
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-200 text-balance">
              Based in {business.primaryCity}, {business.primaryStateAbbr}, we provide electrical services to homeowners and businesses across the surrounding Louisiana communities.
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

      {/* Location Cards */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">10 Locations</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Communities We Serve
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              We are based in {business.primaryCity} and serve these Louisiana communities. Click a location to learn about the specific services available in that area.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.serviceSlug}-${loc.slug}`}
                className="group card-hover overflow-hidden rounded-2xl border border-graphite-100 bg-white"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={loc.image}
                    alt={loc.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-amber-400" />
                    <span className="font-display text-lg font-bold text-white">{loc.city}, {loc.stateAbbr}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
                    <Zap className="h-3.5 w-3.5" />
                    {loc.serviceTitle}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-600">
                    {loc.intro.slice(0, 110)}...
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-colors group-hover:text-amber-500">
                    View {loc.city} Page
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
