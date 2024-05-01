import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import ArticleCard from '@/components/blogs/card';
import { Posts } from '@/types/blog';
import ContentWithNavbarFooter from '@/layouts/content-with-navbar-footer';

const Blog: FC<Posts> = (props): JSX.Element => {
  return (
    <ContentWithNavbarFooter>
      <Box color="textColor" p="2rem">
        {props.posts.map((post, index) => (
          <ArticleCard key={index} post={post} />
        ))}
      </Box>
    </ContentWithNavbarFooter>
  );
};

export default Blog;
