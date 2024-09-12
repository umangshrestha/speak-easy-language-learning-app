import path from 'path';

const CWD = process.cwd();

export const PATH_TO_SCHEMA = path.join(CWD, 'schema', 'schema.graphql');

export const PATH_TO_CONTENT = path.join(CWD, 'content');

export const PATH_TO_POSTS = path.join(CWD, 'content', 'posts');

export const NOT_FOUND_IMAGE = path.join('/images', '404.png');
