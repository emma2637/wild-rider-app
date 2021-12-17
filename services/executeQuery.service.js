import { ApolloClient, InMemoryCache, gql, } from '@apollo/client';
// import  detectBrowserLanguage  from 'detect-browser-language';
const apiDefaultUrl = 'https://wild-rider-strapi.herokuapp.com/graphql';

export const client = new ApolloClient({
  uri: apiDefaultUrl,
  cache: new InMemoryCache()
});


export async function ExecuteQueryService(query) {

  const data  = await client.query({
    query: gql `${query}`
  });
  return data
}

export default ExecuteQueryService;


