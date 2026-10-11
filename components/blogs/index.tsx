import React from 'react';
import { Box } from '@chakra-ui/react';
import ArticleCard from '@/components/blogs/card';
import { Posts } from '@/types/blog';

const Blog = (props: Posts) => {
  return (
    <Box p="2rem">
      {props.posts.map((post, index) => (
        <ArticleCard key={index} post={post} />
      ))}
    </Box>
  );
};

export default Blog;
