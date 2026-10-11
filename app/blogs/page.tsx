import type { Metadata } from 'next';
import Blog from '@/components/blogs';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'KnowAnkit | Blogs',
  alternates: { canonical: '/blogs' }
};

export default async function Page() {
  const posts = await getAllFilesFrontMatter('blog');
  return <Blog posts={posts} />;
}
