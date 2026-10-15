import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import { business, images } from '@/data/business';
import { services } from '@/data/services';
import { localBusinessSchema } from '@/components/StructuredData';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title={`Electrical Services in ${business.primaryCity}, LA | ${business.name}`}
        description={`Complete electrical services in ${business.primaryCity}, LA and surrounding areas. Repairs, panel upgrades, wiring, lighting, outlets, safety inspections, commercial work, and more. Call ${business.phone}.`}
        canonicalPath="services"
        structuredData={localBusinessSchema}
      />

      <Breadcrumbs crumbs={[{ label: 'Services' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-24">
        <img
          src={images.heroPanel}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Zap className="h-3.5 w-3.5" />
              Our Services
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
              Electrical Services in Zachary, LA &amp; Surrounding Areas
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-200 text-balance">
              From troubleshooting and repairs to panel upgrades, lighting, and commercial work — we provide the full range of electrical services for homes and small businesses.
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

      {/* All Services Grid */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">10 Services</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Explore Our Electrical Services
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              Click any service below to learn more about what it includes, common issues we address, and answers to frequently asked questions.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} slug={s.slug} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
