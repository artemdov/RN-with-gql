import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://45.12.74.28/graphql',
  cache: new InMemoryCache(),
});

export const loginQuery = gql`
      query Login($login: String!, $password: String!) {
        login(login: $login, password: $password) {
           ... on TokenPair {
              __typename
               accessToken
               refreshToken
    }
           ... on ErrorWithFields {
              __typename
                fields
                status
    }
        }
      }
    `;
