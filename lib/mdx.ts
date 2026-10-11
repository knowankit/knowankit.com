/* eslint-disable */

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';

const root = process.cwd();

// remark-code-titles used ```lang:filename fences and emitted raw HTML, which MDX 2 rejects.
function withCodeTitles(source) {
  return source.replace(/```([A-Za-z0-9]+):([^\n]+)\n/g, (_, lang, title) => {
    return `<div className="remark-code-title">${title}</div>\n\n\`\`\`${lang}\n`;
  });
}

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);

  const rehypeSlug = await import('rehype-slug');
  const rehypeAutolinkHeadings = await import('rehype-autolink-headings');
  const rehypePrism = await import('rehype-prism-plus');

  const mdxSource = await serialize(withCodeTitles(content), {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug.default,
        [
          rehypeAutolinkHeadings.default,
          {
            behavior: 'wrap',
            properties: { className: ['anchor'] }
          }
        ],
        rehypePrism.default
      ]
    }
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/g).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data
    }
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, 'data', type, postSlug), 'utf8');
    const { data, content } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
        frontMatter: {
          wordCount: content.split(/\s+/g).length,
          readingTime: readingTime(content)
        }
      },
      ...allPosts
    ];
  }, []);
}
