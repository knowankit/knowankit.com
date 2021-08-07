import React, { FC } from 'react';
import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { prismDarkTheme } from '@/styles/style';
import FrontMatter from '@/components/front-matter';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  children: JSX.Element;
  frontMatter: any;
  setTheme: () => void;
  isLightTheme: boolean;
};

const meta = {
  title: 'KnowAnkit – Frontend Engineer, writer, creator.',
  description: `JavaScript love, and course creator.`,
  image: 'https://www.knowankit.com/myself.jpg',
  type: 'website'
};

const BlogLayout: FC<Props> = ({ children, frontMatter }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>KnowAnkit - {meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://knowankit.com${router.asPath}`} />
        <link rel="canonical" href={`https://knowankit.com${router.asPath}`} />
        <meta property="og:site_name" content="Know Ankit" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@knowankit" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Box className="mdx">
        <Global styles={prismDarkTheme} />
        <Navbar />
        <Box
          mx="auto"
          px={['1rem', '1rem', '1rem', '1rem']}
          py={['0.5rem', '1rem', '2rem', '2rem']}
          my="2rem"
          width={['full', '34rem', '48rem', '48rem']}
          display="flex"
          flexDirection="column">
          <FrontMatter matter={frontMatter} />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default BlogLayout;
