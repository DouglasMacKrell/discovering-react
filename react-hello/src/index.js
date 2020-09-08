import React from "react";
import ReactDom from "react-dom";

const HelloWorld = () => {
  let isHello = false;
  // return <span>{isHello ? "Hello" : "Goodbye"}</span>;
  return (
  <span>
    {isHello && 'Hello'}
    {!isHello && 'Goodbye'}
  </span>
  )
};

// const Hello = () => {
//   let name = "World";
//   return <span>Hello {name}</span>;
// };

// const World = () => {
//   return <span>World</span>;
// };

ReactDom.render(<HelloWorld />, document.querySelector("#root"));
