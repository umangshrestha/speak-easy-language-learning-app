import { getSchema } from './schema';
import { ApolloServer } from '@apollo/server';
import resolvers from './resolvers';
import dataSource from './datasource';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import { IS_PRODUCTION } from '@/config/config';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';

const typeDefs = getSchema();
console.log(process.env.NODE_ENV);
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: !IS_PRODUCTION,
  ...(IS_PRODUCTION
    ? { plugins: [ApolloServerPluginLandingPageDisabled()] }
    : {}),
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req) => ({ req, dataSource }),
});

export default handler;
