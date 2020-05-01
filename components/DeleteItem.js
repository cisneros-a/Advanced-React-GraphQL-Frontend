import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_ITEMS_QUERY } from "./Items";

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    #  This is the name of the function on line 40.
    deleteItem(id: $id) {
      # what is written inside here is what we will be returning.
      id
    }
  }
`;

class DeleteItem extends Component {
  update = (cache, payload) => {
    // manually update the chache on the client so it matches the server
    // this is an argument in our Mutation tag. Payload is what is returned from our mutation.
    // 1. Reach the cache for the items we want
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    console.log(data, payload);
    // 2. Filter the deleted item out of the page.
    data.items = data.items.filter(
      (item) => item.id !== payload.data.deleteItem.id
    );
    // 3. Put the items back
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data: data });
  };

  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{
          id: this.props.id,
        }}
        update={this.update}
      >
        {/* We are destruing into error (if no permission to delete) and loading boolean. */}
        {(deleteItem, { error, loading }) => (
          <button
            onClick={() => {
              if (confirm("Are you sure you want to delete this?")) {
                deleteItem();
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
