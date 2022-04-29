import { gql } from "graphql-request";

export const FETCH_NFTS = gql`
  query {
    nfts {
      tokenID
      tokenUri
    }
  }
`;
