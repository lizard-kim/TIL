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
    ["Busan", 10],
  ]
  const WorldClockList = cityTimeData.map((citytime, index)=>
    <WorldClock city={citytime[0]} time = {citytime[1]} key = {index}/>
  )
  return (
    <div className="App">
      <h1 className={"myStyle"}> Welcome! </h1> 
      <div className={"post"}>
        this is first posting!
      </div>
        {WorldClockList}
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
function WorldClock2(props) {// props are citytime and index
  return(//div는 한개씩만 쓸 수 있다. div안에 div추가 불가
    <div className = {"WorldClock"}>
      <h2> City: {props.city} </h2>
      <p> Time: {props.time} </p>
    </div>
  )
}

class WorldClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0
    }
  
    setInterval(()=>{
      this.setState((state)=>(
        state.minute === 59
        ?{hour: state.hour + 1, minute: 0}
        :{minute: state.minute + 1}
      ))
    },1000)

  }
  render() {
    return(//div는 한개씩만 쓸 수 있다. div안에 div추가 불가
      <div className = {"WorldClock"}>
        <h2> City: {this.props.city} </h2>
        <p> Time: {this.state.hour}:{this.state.minute} </p>
      </div>
    )
  }

}
                           

// component export
// default : this file export only one component (defalut) 
export default App;
// App.js -> index.js -> index.html