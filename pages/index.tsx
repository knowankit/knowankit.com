import React from 'react';
import HomePage from '@/components/homepage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ContentWithNavbarFooter from '@/layouts/content-with-navbar-footer';

const meta = {
  type: 'website',
  title: 'Ankit Kumar · Staff Software Engineer',
  summary:
    'Staff Software Engineer working across the full stack — from product UI and design systems to backend services and distributed systems.'
};

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>KnowAnkit | Staff Software Engineer</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.summary} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://knowankit.com${router.asPath}`} />
        <link rel="canonical" href={`https://knowankit.com${router.asPath}`} />
        <meta property="og:site_name" content="Know Ankit" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content="https://knowankit.com/myself.png" />
      </Head>
      <ContentWithNavbarFooter viewportLock>
        <HomePage />
      </ContentWithNavbarFooter>
    </>
  );
};

export default Home;
