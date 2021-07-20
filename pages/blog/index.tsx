import { FC } from 'react';
import Blog from '@/components/blog';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { Posts } from '@/types/blog';

const BlogPage: FC<Posts> = ({ posts }): JSX.Element => {
  return <Blog posts={posts} />;
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default BlogPage;
