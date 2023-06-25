import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          
         
          </div>
          <Xinosin name="gogole" nayika="MikaSing">
            
          </Xinosin>
      </div>
    );
  }
}
function Xinosin(props) {
  return(<div style={{
    backgroundColor:"Green",
    color:"red",
    border:"2px solid Blue"
    }}>
    <p>THis is a paragraph of {props.name} {props.nayika}</p>
    <p>THis is a paragraph of {props.name}</p>
    </div>
  )
}

export default App;
