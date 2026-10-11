'use client';

import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import FrontMatter from '@/components/front-matter';

const Comments = dynamic(() => import('@/components/comments'), {
  ssr: false
});

type Props = {
  children: ReactNode;
  frontMatter: Record<string, any>;
};

const BlogLayout = ({ children, frontMatter }: Props) => {
  return (
    <Box className="mdx">
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
        <Comments />
      </Box>
    </Box>
  );
};

export default BlogLayout;
