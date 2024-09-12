import type { Metadata } from 'next';
import {
  getPostBySlug,
  getListOfPosts,
  markdownToHtml,
} from '@/lib/client/markdown-parser';
import { SlugParams } from '@/types/slug';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export function generateMetadata({ params: { slug } }: SlugParams): Metadata {
  const { data } = getPostBySlug(slug);
  return data || {};
}

export default async function Blog({ params: { slug } }: SlugParams) {
  const { data, content } = getPostBySlug(slug);
  const html_content = await markdownToHtml(content);

  return (
    <article>
      <Container maxWidth="md">
        <Paper component="header" sx={{ p: 2, m: 4 }}>
          <Typography variant="h3" component="h1" align='center' gutterBottom color='textPrimary'>
            {data.title}
          </Typography>
          <Typography variant="body1" component="h2" align='center' color='textSecondary' gutterBottom>
            {data.description}
          </Typography>
          <Box
            component="div"
            sx={{ mt: 4, mb: 4 }}
            dangerouslySetInnerHTML={{ __html: html_content }}
          />
          <Typography variant="subtitle1" component="p" align='right' color='textSecondary'>
            {data.creator}
          </Typography>
          <Typography variant="subtitle2" component="p" align='right' color='textSecondary'>
            {data.date}
          </Typography>
        </Paper>
      </Container>
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
