import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { business } from '@/data/business';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/80" />
      <div className="container-x relative section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            Ready to Get Your Electrical Project Started?
          </h2>
          <p className="mt-5 text-lg text-graphite-300 text-balance">
            Call Nobles Electrical Services at {business.phone} for dependable electrical work in {business.primaryCity}, {business.primaryStateAbbr} and the surrounding communities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-base font-semibold text-navy-950 transition-all duration-200 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30"
            >
              <Phone className="h-5 w-5" />
              Call {business.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/60 hover:bg-white/10"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
