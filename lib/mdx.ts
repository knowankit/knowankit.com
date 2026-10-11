/* eslint-disable */

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import type { ReactElement } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const root = process.cwd();

// remark-code-titles used ```lang:filename fences and emitted raw HTML, which MDX rejects.
function withCodeTitles(source) {
  return source.replace(/```([A-Za-z0-9]+):([^\n]+)\n/g, (_, lang, title) => {
    return `<div className="remark-code-title">${title}</div>\n\n\`\`\`${lang}\n`;
  });
}

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type, slug, components = {}) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);

  const { content: body } = await compileMDX({
    source: withCodeTitles(content),
    components,
    options: {
      // Posts use component props like width={1501 / 2}. v6 blocks all JS by default.
      // blockDangerousJS stays on, so eval/Function/process are still rejected.
      blockJS: false,
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: { className: ['anchor'] }
            }
          ],
          rehypePrism
        ]
      }
    }
  });

  return {
    content: body as ReactElement,
    frontMatter: {
      wordCount: content.split(/\s+/g).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data
    } as Record<string, any>
  };
}

export function getFrontMatterBySlug(type, slug) {
  const source = fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8');
  const { data, content } = matter(source);
  return {
    wordCount: content.split(/\s+/g).length,
    readingTime: readingTime(content),
    slug,
    ...data
  } as Record<string, any>;
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
