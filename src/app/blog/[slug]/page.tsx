import {
  getPostBySlug,
  getListOfPosts,
  markdownToHtml,
} from '@/lib/client/markdown-parser';
import { SlugParams } from '@/types/slug';

export default async function Post({ params: { slug } }: SlugParams) {
  const { data, content } = getPostBySlug(slug);
  const html_content = await markdownToHtml(content);

  return (
    <article>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html_content }} />
    </article>
  );
}

export async function getStaticPaths() {
  const slugs = getListOfPosts();

  return {
    paths: slugs.map((slug: string) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
