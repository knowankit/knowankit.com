import Blog from '@/components/blog';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const BlogPage = ({ posts }) => {
  return <Blog posts={posts} />;
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default BlogPage;
