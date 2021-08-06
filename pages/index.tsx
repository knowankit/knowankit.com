import React from 'react';
import HomePage from '@/components/homepage';
import Head from 'next/head';

const Home = (props) => {
  return (
    <>
      <Head>
        <title>KnowAnkit | Home</title>
      </Head>
      <HomePage {...props} />
    </>
  );
};

export default Home;
