import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oqn2ty0x8q01xlcfnd1jm7/master',
  cache: new InMemoryCache() 
}); 