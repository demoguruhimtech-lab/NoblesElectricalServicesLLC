import { Navigate, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceCard from '@/components/ServiceCard';
import { business } from '@/data/business';
import { services, ServiceData } from '@/data/services';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/components/StructuredData';

export default function ServicePage({ serviceSlug }: { serviceSlug?: string }) {
  const slug = serviceSlug;
  const service = services.find((s) => s.slug === slug) as ServiceData | undefined;

  if (!service) return <Navigate to="/services" replace />;

  const crumbs = [
    { label: 'Services', path: '/services' },
    { label: service.shortTitle, path: `/${service.slug}` },
  ];

  const structuredData = [serviceSchema(service.title, `/${service.slug}`, service.metaDescription), faqSchema(service.faqs), breadcrumbSchema(crumbs)];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={service.slug}
        ogImage={service.image}
        structuredData={structuredData}
      />

      <Breadcrumbs crumbs={crumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-14 lg:py-20">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-900/60" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
              {service.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-200 text-balance">
              {service.summary}
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

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-graphite-600">{service.intro}</p>

              {/* Common Issues */}
              <h3 className="mt-10 font-display text-xl font-bold text-navy-900">Common Issues We Address</h3>
              <ul className="mt-4 space-y-3">
                {service.commonIssues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <span className="text-sm text-graphite-700">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-navy-900/15">
                <img
                  src={service.galleryImages[0]?.url || service.image}
                  alt={service.galleryImages[0]?.alt || service.imageAlt}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
              </div>

              {/* Quick Contact Card */}
              <div className="mt-6 rounded-2xl bg-navy-900 p-6">
                <h3 className="font-display text-lg font-bold text-white">Need This Service?</h3>
                <p className="mt-2 text-sm text-graphite-300">
                  Call us at {business.phone} to schedule or ask a question.
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

      {/* Customer Needs */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">What We Handle</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Common Needs We Address
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {service.needs.map((need, i) => {
              const Icon = (Icons[need.icon as keyof typeof Icons] || Icons.Zap) as Icons.LucideIcon;
              return (
                <div key={i} className="rounded-2xl border border-graphite-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{need.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-600">{need.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Our Process</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              How We Approach This Service
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <div key={i} className="relative rounded-2xl border border-graphite-100 bg-graphite-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-amber-500 font-display text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-600">{step.description}</p>
                {i < service.process.length - 1 && (
                  <ChevronRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-graphite-300 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {service.galleryImages.length > 0 && (
        <section className="section-pad bg-graphite-50">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Gallery</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                See the Work
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {service.galleryImages.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-xl shadow-navy-900/15">
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">FAQs</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              {service.shortTitle} FAQs
            </h2>
          </div>
          <div className="mt-10">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Related Services
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              These services are often requested alongside {service.shortTitle.toLowerCase()}.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.relatedServices.map((slug) => (
              <ServiceCard key={slug} slug={slug} compact />
            ))}
          </div>
        </div>
      </section>

      {/* Links back */}
      <section className="bg-navy-900 py-10">
        <div className="container-x">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/services" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                All Services
              </Link>
              <span className="text-graphite-600">|</span>
              <Link to="/contact" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                Contact Page
              </Link>
              <span className="text-graphite-600">|</span>
              <Link to="/service-areas" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                Service Areas
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
