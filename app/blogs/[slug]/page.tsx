import type { Metadata } from 'next';
import { getFiles, getFileBySlug, getFrontMatterBySlug } from '@/lib/mdx';
import MDXComponents from '@/components/mdx';
import BlogLayout from '@/layouts/blog-layout';
import OpenGraph from '@/components/open-graph';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getFiles('blog');
  return posts.map((p) => ({ slug: p.replace(/\.mdx/, '') }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const frontMatter = getFrontMatterBySlug('blog', slug);

  return {
    title: `KnowAnkit - ${frontMatter.title}`,
    description: frontMatter.summary,
    alternates: { canonical: `/blogs/${slug}` }
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { content, frontMatter } = await getFileBySlug('blog', slug, MDXComponents);

  return (
    <>
      <OpenGraph path={`/blogs/${slug}`} title={frontMatter.title} image={frontMatter.image} />
      <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
    </>
  );
}
