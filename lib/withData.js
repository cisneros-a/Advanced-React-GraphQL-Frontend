import withApollo from "next-with-apollo";
// will give us a high order component and exposes our apollo client (a database within the client) via a prop.
// this is because we want to implement SSR with Next.js
import ApolloClient from "apollo-boost";
//apollo-boost is just a package of commonly used apollo packages
// and pre-configures alot of settings
import { endpoint } from "../config";
// our endpoint right now is just our localhost:4444 (our Yoga API)
import { LOCAL_STATE_QUERY } from "../components/Cart";

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    //this is like our express middleware
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: "include",
        },
        headers,
      });
    },
    // this is our local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart(_, variables, { cache }) {
            // read the cartOpen value from the cache
            const { cartOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            //write cart state to the opposite
            const data = {
              data: { cartOpen: !cartOpen },
            };
            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        cartOpen: false,
      },
    },
  });
}

export default withApollo(createClient);
