import type { Metadata } from 'next';
import About from '@/components/about';

export const metadata: Metadata = {
  title: 'KnowAnkit | About',
  alternates: { canonical: '/about' }
};

export default function Page() {
  return <About />;
}
