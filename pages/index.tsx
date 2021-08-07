import React from 'react';
import HomePage from '@/components/homepage';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>KnowAnkit | Home</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
