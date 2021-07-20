import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '@/lib/mdx';
import MDXComponents from '@/src/components/mdx';

const Blog = ({ mdxSource }) => {
  return (
    <div>
      <MDXRemote
        {...mdxSource}
        components={{
          ...MDXComponents
        }}
      />
    </div>
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
