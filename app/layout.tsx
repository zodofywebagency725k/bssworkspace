import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: { default: 'Bangalore Seating Systems | Office Chairs, Workstations & Storage', template: '%s | Bangalore Seating Systems' },
  description: 'Bangalore Seating Systems offers office chairs, workstations and storage solutions in Bengaluru. Explore product catalogues and contact our sales team.',
  metadataBase: new URL('https://bssworkspace.com'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
