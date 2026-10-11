import type { Metadata } from 'next';
import HomePage from '@/components/homepage';
import OpenGraph from '@/components/open-graph';
export const metadata: Metadata = {
  title: 'KnowAnkit | Staff Software Engineer',
  description:
    'Staff Software Engineer working across the full stack — from product UI and design systems to backend services and distributed systems.',
  alternates: { canonical: '/' }
};

export default function Page() {
  return (
    <>
      <OpenGraph path="/" title="Ankit Kumar · Staff Software Engineer" image="/myself.png" />
      <HomePage />
    </>
  );
}
