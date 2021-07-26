import React, { FC } from 'react';
import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { prismDarkTheme } from '@/styles/style';
import FrontMatter from '@/components/front-matter';

type Props = {
  children: JSX.Element;
  frontMatter: any;
};

const BlogLayout: FC<Props> = ({ children, frontMatter }) => {
  return (
    <Box className="mdx">
      <Global styles={prismDarkTheme} />
      <Navbar />
      <Box
        mx="auto"
        px={['0.5rem', '1rem', '1rem', '1rem']}
        py={['0.5rem', '1rem', '2rem', '2rem']}
        my="2rem"
        width={['full', '34rem', '48rem', '48rem']}
        display="flex"
        flexDirection="column">
        <FrontMatter matter={frontMatter} />
        {children}
      </Box>
    </Box>
  );
};

export default BlogLayout;
