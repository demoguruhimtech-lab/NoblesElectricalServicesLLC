import { Link } from 'react-router-dom';
import {
  Phone, ArrowRight, Zap, Shield, Wrench, Lightbulb, Power, Settings,
  AlertTriangle, Home, Building2, Clock, CheckCircle2, MapPin, Star,
  ChevronDown, Plug, ClipboardCheck, CircuitBoard,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import FinalCTA from '@/components/FinalCTA';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceCard from '@/components/ServiceCard';
import { business, images } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { generalFAQs } from '@/data/faqs';
import { localBusinessSchema, faqSchema } from '@/components/StructuredData';

const featuredSlugs = [
  'electrical-repairs', 'electrical-panel-services', 'lighting-installation',
  'outlets-switches', 'electrical-safety-inspections', 'wiring-rewiring',
];

const processSteps = [
  { icon: Phone, title: 'Call Us', description: 'Describe your electrical issue or project and we will schedule a visit at a time that works for you.' },
  { icon: ClipboardCheck, title: 'Inspection & Diagnosis', description: 'We assess the problem, explain what is happening in plain language, and recommend a solution.' },
  { icon: Wrench, title: 'Quality Work', description: 'We perform the repair or installation safely, to code, and with attention to detail.' },
  { icon: CheckCircle2, title: 'Verification', description: 'We test our work to make sure everything is safe and functioning before we leave.' },
];

const whyChooseItems = [
  { icon: Shield, title: 'Safety First', description: 'Every job is performed with safety as the top priority — for your family, your property, and our team.' },
  { icon: Zap, title: 'Dependable Service', description: 'Based in Zachary, we respond to calls across the region and prioritize safety-related issues.' },
  { icon: ClipboardCheck, title: 'Clear Communication', description: 'We explain what we find, what we recommend, and what it involves — in plain language, not jargon.' },
  { icon: Wrench, title: 'Quality Workmanship', description: 'From small repairs to full panel upgrades, we do the job right the first time with proper materials and methods.' },
  { icon: MapPin, title: 'Local to Zachary', description: 'We are a Zachary-based business serving our neighbors across the surrounding Louisiana communities.' },
  { icon: Building2, title: 'Residential & Light Commercial', description: 'We handle both home electrical work and light-commercial projects for small businesses.' },
];

const homeFAQs = generalFAQs.slice(0, 6);

export default function HomePage() {
  const structuredData = {
    ...localBusinessSchema,
    ...faqSchema(homeFAQs),
  };

  return (
    <>
      <SEO
        title={`${business.name} | Electrician in ${business.primaryCity}, ${business.primaryStateAbbr}`}
        description={`Dependable electrical services for your home and business in ${business.primaryCity}, ${business.primaryStateAbbr} and surrounding Louisiana areas. Repairs, panel upgrades, lighting, and more. Call ${business.phone}.`}
        canonicalPath=""
        structuredData={structuredData}
      />

      {/* 1. Hero */}
      <section className="relative min-h-[600px] overflow-hidden bg-navy-950 lg:min-h-[680px]">
        <img
          src={images.heroPanel}
          alt="Electrician working on a circuit breaker panel with color-coded wiring"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container-x relative flex min-h-[600px] items-center py-20 lg:min-h-[680px] lg:py-28">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <MapPin className="h-3.5 w-3.5" />
              {business.primaryCity}, {business.primaryStateAbbr} &amp; Surrounding Areas
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Dependable Electrical Services for Your Home and Business
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite-200 text-balance">
              {business.name} provides professional electrical repairs, installations, panel upgrades, and lighting services to homeowners and businesses throughout the greater Zachary, Louisiana area.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CallCTA variant="primary" label={`Call ${business.phone}`} className="px-8 py-4 text-base" />
              <Link
                to="/services"
                className="btn-secondary px-8 py-4 text-base"
              >
                Explore Our Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/50" />
        </div>
      </section>

      {/* 2. Business Introduction */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Who We Are</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                Your Local Electrical Team in Zachary, Louisiana
              </h2>
              <p className="mt-5 text-base leading-relaxed text-graphite-600">
                {business.name} is a Zachary-based electrical contractor serving homeowners and small businesses across the surrounding Louisiana communities. We handle everything from troubleshooting a single outlet to upgrading your entire electrical panel — with a focus on safety, clear communication, and quality workmanship.
              </p>
              <p className="mt-4 text-base leading-relaxed text-graphite-600">
                Whether you need a repair, a new installation, or a safety inspection, we take the time to understand your needs, explain your options, and do the job right.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/about" className="btn-outline">
                  Learn About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-amber-600 hover:text-amber-500">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20">
                <img
                  src={images.electricianDrill}
                  alt="Professional electrician using a drill on an indoor circuit breaker panel"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-amber-500 p-6 shadow-xl sm:block">
                <Zap className="h-8 w-8 text-navy-950" fill="currentColor" />
                <div className="mt-2 text-sm font-bold text-navy-950">Licensed &amp; Insured LLC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Our Services</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Complete Electrical Services for Every Need
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              From troubleshooting and repairs to panel upgrades and new installations, we cover the full range of residential and light-commercial electrical needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSlugs.map((slug) => (
              <ServiceCard key={slug} slug={slug} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline">
              View All 10 Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Residential Electrical Solutions */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Residential</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                Residential Electrical Solutions
              </h2>
              <p className="mt-5 text-base leading-relaxed text-graphite-600">
                Your home depends on a safe, reliable electrical system. We provide the full range of residential electrical services — from adding a single outlet to rewiring an entire home — with careful attention to code compliance and your family's safety.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Electrical repairs and troubleshooting',
                  'Panel upgrades and replacement',
                  'Wiring and rewiring',
                  'Lighting installation and ceiling fans',
                  'Outlet and switch installation',
                  'Safety inspections and code assessments',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <span className="text-sm text-graphite-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Link to="/electrical-repairs" className="btn-outline">
                  Explore Electrical Repairs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20">
                <img
                  src={images.fuseBoxInspection}
                  alt="Electrician examining a residential fuse box during a service call"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Light-Commercial Electrical Services */}
      <section className="section-pad bg-navy-900">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-950/40">
                <img
                  src={images.commercialPanel}
                  alt="Complex network of electrical wiring and control panels in a commercial setting"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-amber-400">Light Commercial</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
                Light-Commercial Electrical Services
              </h2>
              <p className="mt-5 text-base leading-relaxed text-graphite-300">
                We provide light-commercial electrical services for small offices, retail spaces, restaurants, and similar businesses. Whether you need panel upgrades, new circuits, LED lighting conversions, or troubleshooting, we work efficiently to minimize disruption to your operations.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Office wiring and dedicated circuits',
                  'Retail and display lighting',
                  'Panel upgrades and capacity increases',
                  'Commercial troubleshooting and repairs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />
                    <span className="text-sm text-graphite-200">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Link
                  to="/commercial-electrical"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-amber-400/40 px-6 py-3.5 text-sm font-semibold text-amber-400 transition-all duration-200 hover:border-amber-400 hover:bg-amber-400 hover:text-navy-950"
                >
                  View Commercial Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Electrical Troubleshooting and Repairs */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Troubleshooting</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                Electrical Troubleshooting and Repairs
              </h2>
              <p className="mt-5 text-base leading-relaxed text-graphite-600">
                Flickering lights, tripping breakers, dead outlets, or a burning smell near your panel — these are signs that something is wrong with your electrical system. Our troubleshooting process finds the root cause and fixes it properly, not just the symptom.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { icon: AlertTriangle, text: 'Flickering or dimming lights' },
                  { icon: Power, text: 'Breakers that keep tripping' },
                  { icon: Plug, text: 'Outlets that stopped working' },
                  { icon: AlertTriangle, text: 'Burning smell or buzzing' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border border-graphite-100 bg-graphite-50 p-4">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-navy-800">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <Link to="/electrical-repairs" className="btn-outline">
                  Explore Electrical Repairs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div>
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20">
                <img
                  src={images.multimeterPanel}
                  alt="Electrician using a multimeter to troubleshoot control panel wiring"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Panel and Electrical System Upgrades */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Panel Upgrades</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                Panel and Electrical System Upgrades
              </h2>
              <p className="mt-5 text-base leading-relaxed text-graphite-600">
                If your panel is outdated, too small for your needs, or has a known safety issue, it is time for an upgrade. We install modern panels with the capacity and breaker slots to support your home today and in the future — including dedicated circuits for EV chargers and new appliances.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Panel replacement and capacity upgrades (100A–200A)',
                  'Dedicated circuits for EV chargers and appliances',
                  'Whole-house surge protection',
                  'Subpanel installation for additions and workshops',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-amber-500">
                      <CircuitBoard className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-graphite-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <Link to="/electrical-panel-services" className="btn-outline">
                  View Panel Upgrades
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20">
                <img
                  src={images.breakerPanelOrganized}
                  alt="Organized circuit breaker panel with color-coded electrical wiring after an upgrade"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Lighting, Outlets, and Switches */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Lighting &amp; Devices</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                Lighting, Outlets, and Switches
              </h2>
              <p className="mt-5 text-base leading-relaxed text-graphite-600">
                From recessed lighting and ceiling fans to GFCI outlets and smart switches, we install and upgrade the electrical devices you use every day. We make sure each device is properly wired, grounded, and safe — and that it looks great in your space.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link to="/lighting-installation" className="group rounded-xl border border-graphite-100 bg-graphite-50 p-5 transition-all hover:border-navy-200 hover:shadow-lg">
                  <Lightbulb className="h-7 w-7 text-amber-500" />
                  <h3 className="mt-3 font-display text-base font-bold text-navy-900">Lighting Installation</h3>
                  <p className="mt-1 text-xs text-graphite-600">Recessed lights, ceiling fans, exterior lighting, and LED upgrades.</p>
                  <span className="mt-2 flex items-center gap-1 text-xs font-semibold text-amber-600">Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" /></span>
                </Link>
                <Link to="/outlets-switches" className="group rounded-xl border border-graphite-100 bg-graphite-50 p-5 transition-all hover:border-navy-200 hover:shadow-lg">
                  <Plug className="h-7 w-7 text-amber-500" />
                  <h3 className="mt-3 font-display text-base font-bold text-navy-900">Outlets &amp; Switches</h3>
                  <p className="mt-1 text-xs text-graphite-600">GFCI outlets, dimmer switches, smart switches, and grounded receptacles.</p>
                  <span className="mt-2 flex items-center gap-1 text-xs font-semibold text-amber-600">Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </div>
            </div>
            <div>
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20">
                <img
                  src={images.ceilingLamps}
                  alt="Illuminated geometric ceiling lamps creating a modern interior ambiance"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Why Choose Nobles Electrical Services */}
      <section className="section-pad bg-navy-950">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-400">Why Choose Us</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
              Why Choose Nobles Electrical Services
            </h2>
            <p className="mt-4 text-base text-graphite-300">
              We are a Zachary-based electrical contractor committed to safety, quality, and honest communication on every job.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-navy-800 bg-navy-900/50 p-6 transition-all duration-300 hover:border-amber-400/30 hover:bg-navy-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Service Process */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">How It Works</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Our Service Process
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              From your first call to the final test, we keep the process simple and transparent.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="rounded-2xl border border-graphite-100 bg-graphite-50 p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-amber-500">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <div className="mt-3 text-xs font-bold uppercase tracking-wider text-amber-600">Step {i + 1}</div>
                  <h3 className="mt-1 font-display text-base font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-600">{step.description}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center lg:flex">
                    <ArrowRight className="h-5 w-5 text-graphite-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Customer Reviews - omitted per instructions (no verified reviews available) */}
      {/* Reviews section intentionally omitted - no verified customer reviews to publish */}

      {/* 12. Service Areas */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Service Areas</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Areas We Serve Around Zachary &amp; Beyond
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              Based in Zachary, Louisiana, we serve homeowners and businesses across the surrounding communities.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.serviceSlug}-${loc.slug}`}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-graphite-100 bg-white p-5 text-center transition-all duration-300 hover:border-navy-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors group-hover:bg-amber-500 group-hover:text-navy-950">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-navy-900">{loc.city}</span>
                <span className="text-xs text-graphite-400">{loc.stateAbbr}</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/service-areas" className="btn-outline">
              View All Service Areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. FAQs */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">FAQs</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10">
            <FAQAccordion faqs={homeFAQs} />
          </div>
          <div className="mt-8 text-center">
            <Link to="/faqs" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500">
              View All FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 14. Final CTA */}
      <FinalCTA />

      {/* 15. Contact Details and Map */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Get In Touch</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                Contact Nobles Electrical Services
              </h2>
              <p className="mt-5 text-base leading-relaxed text-graphite-600">
                Call us to schedule service, ask a question, or discuss your project. We are based in {business.primaryCity}, {business.primaryStateAbbr} and serve the surrounding communities.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-4 rounded-2xl border border-graphite-100 bg-white p-5 transition-all hover:border-amber-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-graphite-400">Phone</div>
                    <div className="font-display text-lg font-bold text-navy-900">{business.phone}</div>
                  </div>
                </a>

                <a
                  href={business.mapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-graphite-100 bg-white p-5 transition-all hover:border-amber-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-graphite-400">Location</div>
                    <div className="font-display text-lg font-bold text-navy-900">{business.primaryCity}, {business.primaryStateAbbr}</div>
                  </div>
                </a>

                <a
                  href={business.mapsListing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-graphite-100 bg-white p-5 transition-all hover:border-amber-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-graphite-400">Google Maps</div>
                    <div className="font-display text-lg font-bold text-navy-900">View Our Listing &amp; Get Directions</div>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <CallCTA variant="primary" label={`Call ${business.phone}`} className="px-8 py-4 text-base" />
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20">
              <iframe
                src={business.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={`Map showing the location of ${business.name}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
