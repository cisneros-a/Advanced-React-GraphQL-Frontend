import App, { Container } from "next/app";
import Page from "../components/Page";
import { ApolloProvider } from "react-apollo";
// withData is a high order component
import withData from "../lib/withData";

class MyApp extends App {
  // This is not necessary for CSR, but it is needed for SSR. It's in the documentation for Apollo and Next.js
  //getInitialProps is a lifecycle method of Next.js
  // it will wait to get the initialprops before the first render is executed.
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    // what getInitialProps does is search each page for any queries or mutations in that page
    //that need to be fetched. If we have a list of items and a shopping cart, all of those queries
    //need to be fired on and resolved before we load the page
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    //this exposes the query to the user and to our render,so it will be avaiable to each Next.js Page
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
//wrapping myApp in withData makes props.apollo available to us.
