import React from "react";
import Item from "./Items";
import "./CartPage.css";

function CartPage({ items, onAddOne, onRemoveOne }) {
  return (
    <ul className="cart-page-items">
      {items.map((item) => (
        <li key={item.id} className="cart-page-item">
          <Item item={item}>
            <div className="cart-item-controls">
              <button
                className="cart-item-remove-one"
                onClick={() => onRemoveOne(item)}
              >
                &ndash;
              </button>
              <span className="cart-item-count">{item.count}</span>
              <button
                className="cart-item-add-one"
                onClick={() => onAddOne(item)}
              >
                +
              </button>
            </div>
          </Item>
        </li>
      ))}
    </ul>
  );
}

export default CartPage;
