import React , { Component } from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked")}} />
    </React.Fragment>
  );
  /*
  const greeting = "Hi!Hi!"
  const dom = <h1>{greeting}</h1>
  return dom;
//  return (
//    <h1>Hello World!!</h1>
//  );
*/
}

export default App;