import { Link } from 'react-router-dom';
import {
  Shield, Zap, ClipboardCheck, Wrench, Home, Building2,
  ArrowRight, CheckCircle2, Phone, MapPin,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import { business, images } from '@/data/business';
import { localBusinessSchema } from '@/components/StructuredData';

const values = [
  { icon: Shield, title: 'Safety First', description: 'Every job — large or small — is performed with safety as the top priority. We follow code requirements and best practices on every project.' },
  { icon: ClipboardCheck, title: 'Clear Communication', description: 'We explain what we find, what we recommend, and what the work involves in plain language. No jargon, no surprises.' },
  { icon: Wrench, title: 'Quality Workmanship', description: 'We do the job right the first time, using proper materials and methods. We stand behind the work we perform.' },
  { icon: Zap, title: 'Honest Assessment', description: 'If something does not need to be replaced, we tell you. If something is a safety concern, we tell you that too — clearly and directly.' },
];

const servicesList = [
  'Electrical repairs and troubleshooting',
  'Electrical installation for new fixtures and appliances',
  'Wiring and rewiring for older and renovated homes',
  'Electrical panel upgrades and replacement',
  'Circuit breaker repair and replacement',
  'Lighting installation — indoor, outdoor, and LED',
  'Outlet and switch installation, including GFCI and smart switches',
  'Electrical safety inspections',
  'Dedicated circuits and electrical system upgrades',
  'Light-commercial electrical services',
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title={`About Us | ${business.name} | Zachary, LA Electrician`}
        description={`Learn about Nobles Electrical Services, LLC — a Zachary, LA-based electrical contractor providing residential and light-commercial electrical services with a focus on safety and quality. Call ${business.phone}.`}
        canonicalPath="about"
        structuredData={localBusinessSchema}
      />

      <Breadcrumbs crumbs={[{ label: 'About Us' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-24">
        <img
          src={images.electricianPanel}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Home className="h-3.5 w-3.5" />
              About Us
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
              About Nobles Electrical Services, LLC
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-200 text-balance">
              We are a Zachary, Louisiana-based electrical contractor providing dependable electrical services to homeowners and small businesses across the surrounding communities.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Who We Are</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                A Local Electrician You Can Trust
              </h2>
              <p className="mt-5 text-base leading-relaxed text-graphite-600">
                {business.name} is based in {business.primaryCity}, {business.primaryStateAbbr}. We provide electrical services to residential customers and light-commercial businesses throughout the greater Zachary area and surrounding Louisiana communities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-graphite-600">
                We focus on doing the job right — diagnosing problems accurately, installing safely, and communicating clearly from start to finish. Whether it is a single outlet replacement or a full panel upgrade, we approach every project with the same attention to detail and commitment to safety.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CallCTA variant="primary" label={`Call ${business.phone}`} />
                <Link to="/contact" className="btn-outline">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20">
              <img
                src={images.electricianDrill2}
                alt="Electrician working on electrical equipment with precision and focus"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Our Services</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              What We Do
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              We provide a full range of electrical services for homes and small businesses.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-graphite-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                  <Home className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900">Residential Electrical</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-graphite-600">
                From troubleshooting a flickering light to rewiring an entire home, we handle the full range of residential electrical work — including panel upgrades, lighting, outlets, safety inspections, and dedicated circuits for new appliances and EV chargers.
              </p>
            </div>
            <div className="rounded-2xl border border-graphite-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900">Light-Commercial Electrical</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-graphite-600">
                We provide light-commercial electrical services for small offices, retail spaces, restaurants, and similar businesses — including panel upgrades, LED lighting conversions, new circuits, and troubleshooting.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-graphite-100 bg-white p-6">
            <h3 className="font-display text-lg font-bold text-navy-900">Our Service Offerings</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {servicesList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                  <span className="text-sm text-graphite-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Link to="/services" className="btn-outline">
                Explore All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Our Approach</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              How We Work
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              We believe electrical work should be done safely, communicated clearly, and completed to a high standard.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <div key={i} className="rounded-2xl border border-graphite-100 bg-graphite-50 p-6 transition-all duration-300 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-amber-500">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-pad bg-navy-950">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-amber-400">Our Location</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
                Based in {business.primaryCity}, {business.primaryStateAbbr}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-graphite-300">
                We are proud to call {business.primaryCity} home. Being local means we can respond quickly to calls from our neighbors across the greater Zachary area and surrounding Louisiana communities.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-graphite-300">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <a href={business.phoneHref} className="text-sm hover:text-amber-400">{business.phone}</a>
                </div>
                <div className="flex items-center gap-3 text-graphite-300">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span className="text-sm">{business.primaryCity}, {business.primaryStateAbbr}</span>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/service-areas" className="inline-flex items-center gap-2 rounded-lg border-2 border-amber-400/40 px-6 py-3.5 text-sm font-semibold text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-400 hover:text-navy-950">
                  View All Service Areas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-950/40">
              <img
                src={images.outdoorPanel}
                alt="Electrician working on an outdoor electrical panel ensuring safety"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
