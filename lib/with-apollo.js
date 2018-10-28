import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import withApollo from "next-with-apollo";
import { getCookie } from "./session";

export default withApollo(({ ctx, headers, initialState }) => {
  let token;
  if (process.browser || headers) {
    token = getCookie("jwt", headers);
  }
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: "http://localhost:3000/graphql", // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      headers: {
        Authorization: token ? `Bearer ${token}` : ""
      }
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
});
