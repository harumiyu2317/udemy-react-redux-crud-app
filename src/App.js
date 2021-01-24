import React , { Component } from 'react';

/*
function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked")}} />
    </React.Fragment>
  );
//  const greeting = "Hi!Hi!"
//  const dom = <h1>{greeting}</h1>
//  return dom;
//  return (
//    <h1>Hello World!!</h1>
//  );
}
*/

const App = () => {
  return <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />

  </div>
}

const Cat = () => {
  return <div>Meaw!</div>
}

export default App;