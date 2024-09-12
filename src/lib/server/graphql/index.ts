import Query from './query';
import { getSchema } from './schema';
import { ApolloServer } from '@apollo/server';
import { LocaleResolvers, Resolvers } from './__generated__/types';
import resolvers from './resolvers';

const typeDefs = getSchema();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default apolloServer;
