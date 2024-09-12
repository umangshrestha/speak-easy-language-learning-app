import { PATH_TO_POSTS } from '@/config/config';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export function getListOfPosts() {
  const paths = fs.readdirSync(PATH_TO_POSTS);
  return paths.map((path) => path.replace(/\.mdx?$/, ''));
}

export async function markdownToHtml(markdown: string) {
  const output = await remark().use(html).process(markdown);
  return output.toString();
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(PATH_TO_POSTS, `${realSlug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return matter(fileContents);
  } catch (e) {
    return null;
  }
}
