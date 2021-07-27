import { FC } from 'react';
import Blog from '@/components/blogs';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { Posts } from '@/types/blog';
import Head from 'next/head';

const BlogPage: FC<Posts> = ({ posts }): JSX.Element => {
  return (
    <>
      <Head>
        <title>KnowAnkit | Blogs</title>
      </Head>
      <Blog posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default BlogPage;
