import React, { FC } from 'react';
import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';
import ArticleCard from '@/components/blogs/card';
import { Posts } from '@/types/blog';
import Footer from '@/components/footer';
import DevTo from '@/components/blogs/dev.to';

const Blog: FC<Posts> = (props): JSX.Element => {
  const dev = [
    {
      title: 'How to setup ESLint and Prettier in react app?',
      description: 'Learn and implement linting in your app to make it clean',
      publishedAt: '2021-09-25',
      slug: 'https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b'
    }
  ];

  return (
    <Box height="100vh" id="profile">
      <Navbar />
      <Box color="textColor" minHeight="90vh" height="100%" p="2rem">
        {props.posts.map((post, index) => (
          <ArticleCard key={index} post={post} />
        ))}

        {dev.map((post, index) => (
          <DevTo post={post} key={index} />
        ))}
        <Footer />
      </Box>
    </Box>
  );
};

export default Blog;
