import { Link } from 'react-router-dom';
import { Phone, MapPin, Navigation, Clock, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import { business } from '@/data/business';
import { localBusinessSchema } from '@/components/StructuredData';

export default function ContactPage() {
  return (
    <>
      <SEO
        title={`Contact Us | ${business.name} | Zachary, LA Electrician`}
        description={`Contact Nobles Electrical Services, LLC in Zachary, LA. Call ${business.phone} for electrical services. View our location and get directions.`}
        canonicalPath="contact"
        structuredData={localBusinessSchema}
      />

      <Breadcrumbs crumbs={[{ label: 'Contact' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
              Contact Nobles Electrical Services
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-200 text-balance">
              Call us to schedule service, ask a question, or discuss your electrical project. We are based in {business.primaryCity}, {business.primaryStateAbbr} and serve the surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-graphite-600">
                The fastest way to reach us is by phone. Call {business.phone} and we will help you schedule a visit or answer your questions.
              </p>

              {/* Phone — prominent */}
              <a
                href={business.phoneHref}
                className="mt-8 flex items-center gap-4 rounded-2xl bg-amber-500 p-6 transition-all hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-950 text-amber-500">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-800">Call Us</div>
                  <div className="font-display text-2xl font-bold text-navy-950">{business.phone}</div>
                </div>
              </a>

              {/* Location */}
              <div className="mt-6 rounded-2xl border border-graphite-100 bg-graphite-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-900 text-amber-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-graphite-400">Our Location</div>
                    <div className="font-display text-lg font-bold text-navy-900">{business.name}</div>
                    <div className="text-sm text-graphite-600">{business.primaryCity}, {business.primaryStateAbbr}</div>
                  </div>
                </div>
              </div>

              {/* Get Directions */}
              <a
                href={business.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-graphite-100 bg-white p-6 transition-all hover:border-amber-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                    <Navigation className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-graphite-400">Directions</div>
                    <div className="font-display text-base font-bold text-navy-900">Get Directions on Google Maps</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-graphite-400" />
              </a>

              {/* CTA */}
              <div className="mt-8">
                <CallCTA variant="primary" label={`Call ${business.phone}`} className="px-8 py-4 text-base" />
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20">
                <iframe
                  src={business.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={`Map showing the location of ${business.name}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-navy-900 py-10">
        <div className="container-x">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-graphite-300">
              Looking for a specific service or service area?
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/services" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                View Services
              </Link>
              <span className="text-graphite-600">|</span>
              <Link to="/service-areas" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                View Service Areas
              </Link>
              <span className="text-graphite-600">|</span>
              <Link to="/faqs" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
