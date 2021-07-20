import React from 'react';
import Navbar from '@/src/components/navbar';
import { Box } from '@chakra-ui/react';
import ArticleCard from '@/src/components/blog/card';

const Blog = ({ posts }) => {
  return (
    <Box height="100vh" backgroundColor="black" id="profile">
      <Navbar />
      <Box color="white" bg="white" minHeight="90vh" height="100%" p="4rem">
        {posts.map((post, index) => (
          <ArticleCard key={index} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
