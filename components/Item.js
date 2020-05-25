import React, { Component } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import DeleteItem from "./DeleteItem";
import AddToCart from "./AddToCart";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {/* '&&' is another way to make that JS run like a ternerary, but you won't 
          have to return null if it is false*/}
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          {/* We actually want to put a query param at the end of our href.
              We use use an object literal. In JSX, you pass reference to something, like a variable, with {}
              But if an object literal. The second set is the object literal {{}}
              pathname is the route they will go
              query will finish off the link with the 'item?id=...'
          */}
          <Link
            href={{
              pathname: "/item",
              query: { id: item.id },
            }}
          >
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: "update",
              query: { id: item.id },
            }}
          >
            <a>Edit</a>
          </Link>
          <AddToCart id={item.id} />
          <DeleteItem id={item.id}>Delete this item</DeleteItem>
        </div>
      </ItemStyles>
    );
  }
}
