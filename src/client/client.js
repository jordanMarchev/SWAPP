import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import authLink from './auth';
import { typeDefs } from './local';

const httpLink = createHttpLink({
  uri: 'http://softuni-swapp-212366186.eu-west-1.elb.amazonaws.com/graphql'
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs
});

cache.writeData({
  data: {
    authenticated: !!localStorage.getItem('token')
  }
});

export default client;
