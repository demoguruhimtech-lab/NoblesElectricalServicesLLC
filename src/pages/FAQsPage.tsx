import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import { business } from '@/data/business';
import { generalFAQs } from '@/data/faqs';
import { services } from '@/data/services';
import { faqSchema } from '@/components/StructuredData';

export default function FAQsPage() {
  return (
    <>
      <SEO
        title={`FAQs | ${business.name} | Zachary, LA Electrician`}
        description={`Frequently asked questions about electrical services from Nobles Electrical Services, LLC in Zachary, LA. Call ${business.phone} for answers to your electrical questions.`}
        canonicalPath="faqs"
        structuredData={faqSchema(generalFAQs)}
      />

      <Breadcrumbs crumbs={[{ label: 'FAQs' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <HelpCircle className="h-3.5 w-3.5" />
              FAQs
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-200 text-balance">
              Answers to common questions about our electrical services, service areas, and how we work. Have a question that is not answered here? Call us at {business.phone}.
            </p>
          </div>
        </div>
      </section>

      {/* General FAQs */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              General Questions
            </h2>
          </div>
          <div className="mt-10">
            <FAQAccordion faqs={generalFAQs} />
          </div>
        </div>
      </section>

      {/* Service-Specific FAQ Links */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Service FAQs</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Service-Specific FAQs
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              Each of our service pages includes FAQs specific to that service. Explore them below.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-graphite-100 bg-white p-4 transition-all hover:border-navy-200 hover:shadow-md"
              >
                <span className="text-sm font-semibold text-navy-800">{s.shortTitle}</span>
                <ArrowRight className="h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
