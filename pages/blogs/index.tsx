import { FC } from 'react';
import Blog from '@/components/blogs';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { Posts } from '@/types/blog';
import Head from 'next/head';

type IProps = {
  setTheme: () => void;
  isLightTheme: boolean;
};

const BlogPage: FC<Posts & IProps> = ({ posts, setTheme, isLightTheme }): JSX.Element => {
  return (
    <>
      <Head>
        <title>KnowAnkit | Blogs</title>
      </Head>
      <Blog posts={posts} setTheme={setTheme} isLightTheme={isLightTheme} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default BlogPage;
