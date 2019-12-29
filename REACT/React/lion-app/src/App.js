import React from 'react';
import logo from './logo.svg';
import './App.css';


// component
/* const myStyle = {
  color: 'blue',
  fontWeight: 900
} */ // for JS, Use camel naming and string

// JSX -> HTML tag
// JSX -> css using style (jsx)
// JSX -> css using className(css->App.css)

//{{}} is js
function App() {
  const cityTimeData = [
    ["Seoul", 10],
    ["Beijing", 9],
    ["Sydney", 12],
    ["LA", 17],
    ["Busan", 10]
  ]

  const WorldClockList = cityTimeData.map((citytime, index)=>
    <WorldClock city={citytime[0]} time = {citytime[1]} key = {index}/>
  )

  return (
    <div className="App">
      <h1 className={'myStyle'}> Welcome! </h1> 
      <div className={'post'}>
        this is first posting!
      </div>
        {WorldClockList}
      <table>
        <tr><td>1</td></tr>
        <tr><td>2</td></tr>
      </table>
    </div>
  );
}

/* function App2() {
  return (
    <div className="App">
      <h1 style={myStyle}> Welcome! </h1> 
      <table>
        <tr><td>1</td></tr>
        <tr><td>2</td></tr>
      </table>
    </div>
  );
} */

//12.29
function WorldClock(props) {
  return(//div는 한개씩만 쓸 수 있다. div안에 div추가 불가
    <div className = {"WorldClock"}>
      <h2> City: {props.city} </h2>
      <p> Time: {props.time} </p>
    </div>
  )
}


// component export
// default : this file export only one component (defalut) 
export default App;
// App.js -> index.js -> index.html