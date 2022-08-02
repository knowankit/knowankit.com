import React, { FC } from 'react';
import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';
import ArticleCard from '@/components/blogs/card';
import { Posts } from '@/types/blog';
import Footer from '@/components/footer';

const Blog: FC<Posts> = (props): JSX.Element => {
  return (
    <>
      <Box height="90vh" id="profile">
        <Navbar />
        <Box color="textColor" minHeight="90vh" height="100%" p="2rem">
          {props.posts.map((post, index) => (
            <ArticleCard key={index} post={post} />
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Blog;
