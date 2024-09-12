import { getSchema } from './schema';
import { ApolloServer } from '@apollo/server';
import resolvers from './resolvers';

const typeDefs = getSchema();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default apolloServer;
