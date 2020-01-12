import React from 'react';
import'./App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends React.Component{
  render(){
    const comment = "Hello world!" //no change
    let comment2= "Hello world 2" //changeable
    return(
      <div className="App">
        <h1> {comment} </h1>
        <h2> {comment2} </h2>
        {list.map((item)=>{
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;