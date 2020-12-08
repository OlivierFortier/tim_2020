// j'importe le client graphql de la librairie que j'utilise
import { GraphQLClient } from 'graphql-request';

// je crée un client graphql pour faire facilement des requêtes grace à la librairie "GraphQL-request"
export const graphQLClient = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}`,
  {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN}`,
    },
  }
);

// j'exporte ma fonction pour faire des requêtes AJAX GraphQL
export const faireRequeteGql = (maRequete, lesVariables) =>
  graphQLClient.request(maRequete, lesVariables);
