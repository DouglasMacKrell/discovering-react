import React from "react";
import ReactDom from "react-dom";

// const HelloWorld = () => {
//   let isHello = false;
//   // return <span>{isHello ? "Hello" : "Goodbye"}</span>;
//   return (
//   <span>
//     {isHello && 'Hello'}
//     {!isHello && 'Goodbye'}
//   </span>
//   )
// };

// const Hello = () => {
//   let name = "World";
//   return <span>Hello {name}</span>;
// };

// const World = () => {
//   return <span>World</span>;
// };

// function Doug() {
//   const fName = "Doug"
//   const lName = "MacKrell"

//   return (
//     <Person age="105" name={fName + " " + lName} />
//   )
// }

// const Person = props => <h1>{props.name + " " + props.age}</h1>

// function Hello (props) {
//   return (
//     <span>
//       Hello {props.name}
//     </span>
//   )
// }

// const Hello = ({ name }) => <span>Hello, {name}</span>;

// const Hello = ({ fName, lName }) => <span>Hello, {fName} {lName}</span>;

const Hello = (props) => {
  const { name } = props
  return (
  <span>
    Hello, { name }
  </span>
  )
  };

ReactDom.render(<Hello name="Doug" />, document.querySelector("#root"));
