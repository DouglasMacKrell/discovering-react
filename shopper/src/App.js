import React, { useState } from "react";
import Nav from "./Nav";
import ItemPage from './ItemPage'
import { items } from './static-data'
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState('items')
  return (
    <div className="app">
      <Nav activeTab={ activeTab } onTabChange={ setActiveTab } />
      <main className="app-content">
        <Content tab={activeTab} />
      </main>
    </div>
  );
};

const Content = ({tab}) => {
  switch (tab) {
    default: 
    case 'items' :
      return <ItemPage items={ items } />
    case 'cart' :
      return <span>The Cart</span>
  }
}

export default App;
