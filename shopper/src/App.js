import React, { useState } from "react";
import Nav from "./Nav";
import ItemPage from "./ItemPage";
import { items } from "./static-data";
import "./App.css";

const summarizeCart = (cart) => {
  const groupedItems = cart.reduce((summary, item) => {
    summary[item.id] = summary[item.id] || {
      ...item,
      count: 0,
    };
    summary[item.id].count++;
    return summary;
  }, {});
  return Object.values(groupedItems);
};

const App = () => {
  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="app">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="app-content">
        <Content tab={activeTab} onAddToCart={addToCart} />
      </main>
    </div>
  );
};

const Content = ({ tab, onAddToCart }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case "cart":
      return <span>The Cart</span>;
  }
};

export default App;
