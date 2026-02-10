import React from 'react'

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Header Component</h1>
      <p>{props.name}</p>
    </div>
  )
}

export function sum(a, b){
  return a + b;
}
export function multiply(a, b){
  return a * b;
}

export default Header

// DEFAULT EXPORT
// Used when a file exports one main thing
// Only one default export allowed per file
// Can be imported with any name
// Example:
// export default App;
// import App from "./App";

// NAMED EXPORT
// Used when a file exports multiple things
// Multiple named exports allowed
// Name must be same during import
// Example:
// export const add = () => {};
// import { add } from "./file";

