import React from 'react';
import logo from './logo.svg';
import './App.css';


// component
const myStyle = {
  color: 'blue',
  fontWeight: 900
} // for JS, Use camel naming and string

// JSX -> HTML tag
// JSX -> css using style (jsx)
// JSX -> css using className(css->App.css)

//{{}} is js
function App() {
  return (
    <div className="App">
      <h1 className={'myStyle'}> Welcome! </h1> 
      <div className={'post'}>
        this is first posting!
      </div>
      
      <table>
        <tr><td>1</td></tr>
        <tr><td>2</td></tr>
      </table>
    </div>
  );
}

function App2() {
  return (
    <div className="App">
      <h1 style={myStyle}> Welcome! </h1> 
      <table>
        <tr><td>1</td></tr>
        <tr><td>2</td></tr>
      </table>
    </div>
  );
}

// component export
// default : this file export only one component (defalut) 
export default App;
// App.js -> index.js -> index.html