import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Head from "next/head";
import Link from "next/link";
import PaginationStyles from "./styles/PaginationStyles";
import { perPage } from "../config";

const PAGINATION_QUERY = gql`
  # we don't need any arguments for this query. look at schema.graphql!
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = (props) => {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p></p>;
        const count = data.itemsConnection.aggregate.count;
        const pages = Math.ceil(count / perPage);
        return (
          <PaginationStyles>
            <Head>
              <title>
                Sick Fits! Page {props.page} of {pages}
              </title>
            </Head>
            <Link
              prefetch //This is used for production mode. Pre-fetches the info on link pages to make loading them quicker.
              href={{
                pathname: "items",
                query: { page: props.page - 1 },
              }}
            >
              <a className="prev" aria-disabled={props.page <= 1}>
                {"<- Prev"}
              </a>
            </Link>
            <p>
              Page {props.page} of {pages}
            </p>
            <p>{count} items total</p>
            <Link
              prefetch //This is used for production mode. Pre-fetches the info on link pages to make loading them quicker.
              href={{
                pathname: "items",
                query: { page: props.page + 1 },
              }}
            >
              <a className="prev" aria-disabled={props.page >= pages}>
                {"Next ->"}
              </a>
            </Link>
          </PaginationStyles>
        );
      }}
    </Query>
  );
};

export default Pagination;
