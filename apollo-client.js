import { ApolloClient, InMemeryCache, InMemoryCache } from "@apollo/client";

//Setup apollo client

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export default client;
