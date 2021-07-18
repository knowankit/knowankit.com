import React from 'react';
import Navbar from '@/src/components/navbar';
import { Box } from '@chakra-ui/react';
import ArticleCard from '@/src/components/articles/article-card';

const Articles = () => {
  return (
    <Box height="100vh" backgroundColor="black" id="profile">
      <Navbar />
      <Box color="white" bg="white" minHeight="90vh" height="100%" p="4rem">
        <ArticleCard />
      </Box>
    </Box>
  );
};

export default Articles;
