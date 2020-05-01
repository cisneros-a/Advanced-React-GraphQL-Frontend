import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Item from "./Item";
import Pagination from "./Pagination";
import { perPage } from "../config";

const ALL_ITEMS_QUERY = gql`
# this query is reflecting what we have in our schema.graphql file in the backend
#   the arguements will match up.
# DESC stands for descending
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

// we are importing our max-width from Page.js in const Theme
const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;
class Items extends Component {
  render() {
    return (
      <Center>
        <p>Items</p>
        <Pagination page={this.props.page} />
        <Query
          query={ALL_ITEMS_QUERY}
          variables={{ skip: this.props.page * perPage - perPage }}
        >
          {/* The only thing that can be passed inside a query tag is a function */}
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <ItemsList>
                {data.items.map((item) => (
                  <Item item={item} key={item.id}></Item>
                ))}
              </ItemsList>
            );
          }}
        </Query>
        <Pagination page={this.props.page} />
      </Center>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
