import React from "react";
import ReactDom from "react-dom";

const HelloWorld = () => {
  return (
    <div>
      <Hello />
    </div>
  );
};

const Hello = () => {
  let name = "World";
  return <span>Hello {name}</span>;
};

const World = () => {
  return <span>World</span>;
};

ReactDom.render(<HelloWorld />, document.querySelector("#root"));
