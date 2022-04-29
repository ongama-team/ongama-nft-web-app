import { GraphQLClient, Variables } from "graphql-request";

const endpoint = `https://api.thegraph.com/subgraphs/${process.env.NEXT_PUBLIC_SUBGRAPH_NAME}`;

const client = new GraphQLClient(endpoint);

export const gqlFetch = async (query: string, variables?: Variables) => {
  try {
    const data = await client.request(query, variables);
    return data;
  } catch (error) {
    return error;
  }
};

export default client;
