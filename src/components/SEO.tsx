import { useEffect } from 'react';
import { business } from '@/data/business';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SEO({ title, description, canonicalPath, ogImage, structuredData }: SEOProps) {
  const canonical = `${business.website}${canonicalPath.replace(/^\//, '')}`;
  const image = ogImage || 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200';

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('canonical', canonical);

    // Open Graph
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:site_name', business.name, 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);

    // Structured data
    const existingScript = document.getElementById('structured-data');
    if (existingScript) existingScript.remove();

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'structured-data';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const sd = document.getElementById('structured-data');
      if (sd) sd.remove();
    };
  }, [title, description, canonical, image, structuredData]);

  return null;
}
