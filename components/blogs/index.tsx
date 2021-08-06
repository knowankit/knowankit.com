import React, { FC } from 'react';
import Navbar from '@/components/navbar';
import { Box } from '@chakra-ui/react';
import ArticleCard from '@/components/blogs/card';
import { Posts } from '@/types/blog';

type IProps = {
  setTheme: () => void;
  isLightTheme: boolean;
};

const Blog: FC<Posts & IProps> = (props): JSX.Element => {
  return (
    <Box height="100vh" id="profile" bg="bgColor">
      <Navbar setTheme={props.setTheme} isLightTheme={props.isLightTheme} />
      <Box color="textColor" bg="bgColor" minHeight="90vh" height="100%" p="2rem">
        {props.posts.map((post, index) => (
          <ArticleCard key={index} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
