import React from "react";
import "./Items.css";

const Item = ({ item, onAddToCart }) => (
  <div className="item">
    <div className="item-left">
      <div className="item-image">
        <div className="item-title">{item.name}</div>
        <div className="item-description">{item.description}</div>
      </div>
    </div>
    <div className="item-right">
      <div className="item-price">${item.price}</div>
      <button className="item-add-to-cart" onClick={onAddToCart}>
        Add To Cart
      </button>
    </div>
  </div>
);

export default Item;
