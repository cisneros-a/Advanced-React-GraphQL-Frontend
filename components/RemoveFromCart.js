import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:over {
    color: ${(props) => props.theme.red};
    cursor: pointer;
  }
`;

class RemoveFromCart extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  // this gets called as soon as we get a response from the server
  // after a mutation has been performed
  //the cache is the apollo cache, and the payload of info from the server
  update = (cache, payload) => {
    console.log("running from remove cart update function");
    //first we are going to read the cache
    const data = cache.readQuery({
      query: CURRENT_USER_QUERY,
    });
    console.log(data);
    // second, remove the item from the cart
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(
      (cartItem) => cartItem.id !== cartItemId
    );
    // third, write it back to the cache
    cache.writeQuery({
      query: CURRENT_USER_QUERY,
      data,
    });
  };
  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{ id: this.props.id }}
        //we are doing this update function because we don't want to make
        // another query, we just want to update cache instead
        update={this.update}
        //optimistic response is what allows the cart to empty right away
        // normally, we let the mutation go off and we get the response, which we
        // then update the cache with. This allows us to show the change on the
        // client and then update the DB in the background
        optimisticResponse={{
          __typeName: "Mutation",
          removeFromCart: {
            __typename: "CartItem",
            id: this.props.id,
          },
        }}
      >
        {(removeFromCart, { loading, error }) => (
          <BigButton
            disabled={loading}
            onClick={() => {
              removeFromCart().catch((err) => alert(err.message));
            }}
            title="Delete Item"
          >
            &times;
          </BigButton>
        )}
      </Mutation>
    );
  }
}

export default RemoveFromCart;
