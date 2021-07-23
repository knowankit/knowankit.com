import React, { FC } from 'react';
import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { prismDarkTheme } from '@/styles/style';

const BlogLayout: FC = ({ children }) => {
  return (
    <Box>
      <Global styles={prismDarkTheme} />
      <Navbar />
      <Box
        mx="auto"
        px="1rem"
        my="2rem"
        width={['18rem', '34rem', '48rem', '48rem']}
        display="flex"
        flexDirection="column">
        {children}
      </Box>
    </Box>
  );
};

export default BlogLayout;
