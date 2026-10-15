import { business } from '@/data/business';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: business.name,
  telephone: business.phone,
  url: business.website,
  image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
  areaServed: [
    'Zachary, LA',
    'Baton Rouge, LA',
    'Baker, LA',
    'Central, LA',
    'St. Francisville, LA',
    'Clinton, LA',
    'Port Allen, LA',
    'Brusly, LA',
    'Denham Springs, LA',
    'Prairieville, LA',
  ],
  hasMap: business.mapsListing,
  address: {
    '@type': 'PostalAddress',
    addressLocality: business.primaryCity,
    addressRegion: business.primaryStateAbbr,
    addressCountry: 'US',
  },
};

export const serviceSchema = (serviceName: string, serviceUrl: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  provider: {
    '@type': 'Electrician',
    name: business.name,
    telephone: business.phone,
  },
  serviceType: 'Electrical Services',
  areaServed: {
    '@type': 'State',
    name: 'Louisiana',
  },
  url: `${business.website}${serviceUrl.replace(/^\//, '')}`,
  description,
});

export const breadcrumbSchema = (crumbs: { label: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: business.website,
    },
    ...crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: c.label,
      item: `${business.website}${c.path.replace(/^\//, '')}`,
    })),
  ],
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
});
