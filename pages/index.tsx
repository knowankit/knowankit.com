import React from 'react';
import HomePage from '@/components/homepage';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const meta = {
  type: 'website',
  title: 'My personal portfolio',
  summary: 'I will post my learning and projects here'
};

const Home = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>KnowAnkit | Home</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.summary} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://knowankit.com${router.asPath}`} />
        <link rel="canonical" href={`https://knowankit.com${router.asPath}`} />
        <meta property="og:site_name" content="Know Ankit" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content="https://knowankit.com/myself.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@knowankit" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.summary} />
        <meta name="twitter:image" content="https://knowankit.com/myself.png" />
      </Head>
      <HomePage posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default Home;
