import type { Metadata } from 'next';
import Projects from '@/components/projects';

export const metadata: Metadata = {
  title: 'KnowAnkit | Projects',
  alternates: { canonical: '/projects' }
};

export default function Page() {
  return <Projects />;
}
