import React from "react";
import Nav from "./Nav";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <main className="app-content">
        <span>Empty</span>
      </main>
    </div>
  );
};

export default App;