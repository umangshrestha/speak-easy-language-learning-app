import fs from 'fs';
import { PATH_TO_SCHEMA } from '@/config/config';
import { gql } from 'graphql-tag';

export function getSchema() {
  const typeDefs = fs.readFileSync(PATH_TO_SCHEMA, 'utf8');
  return gql(typeDefs);
}
