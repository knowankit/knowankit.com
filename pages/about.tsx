import About from '@/components/about';
import Head from 'next/head';

const AboutPage = (props) => {
  return (
    <>
      <Head>
        <title>KnowAnkit | About</title>
      </Head>
      <About {...props} />
    </>
  );
};
export default AboutPage;
