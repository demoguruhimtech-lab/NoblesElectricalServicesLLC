import { useParams, Navigate } from 'react-router-dom';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import ServicePage from '@/pages/ServicePage';
import LocationPage from '@/pages/LocationPage';

export default function DynamicPage() {
  const { pageSlug } = useParams<{ pageSlug: string }>();

  if (!pageSlug) return <Navigate to="/" replace />;

  // Try service page first (slug matches exactly)
  const service = services.find((s) => s.slug === pageSlug);
  if (service) return <ServicePage serviceSlug={pageSlug} />;

  // Try location page (format: serviceSlug-locationSlug, e.g. electrical-repairs-zachary-la)
  const location = locations.find((l) => `${l.serviceSlug}-${l.slug}` === pageSlug);
  if (location) return <LocationPage locSlug={pageSlug} />;

  return <Navigate to="/" replace />;
}
