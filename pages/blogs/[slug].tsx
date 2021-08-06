import React, { FC } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '@/lib/mdx';
import MDXComponents from '@/components/mdx';
import BlogLayout from '@/layouts/blog-layout';

type IProps = {
  mdxSource: any;
  frontMatter: any;
  setTheme: () => void;
  isLightTheme: boolean;
};

const Blog: FC<IProps> = ({ mdxSource, frontMatter, setTheme, isLightTheme }): JSX.Element => {
  return (
    <BlogLayout frontMatter={frontMatter} setTheme={setTheme} isLightTheme={isLightTheme}>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents
        }}
      />
    </BlogLayout>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: { ...post } };
}

export default Blog;
