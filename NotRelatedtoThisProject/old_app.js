import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    var Person = {
      name: "Rafiqul",
      age: 23,
      job: "WebDev",
    };

    var style = {
      color: "red",
      backgroundColor: "Black",
      fontSize: 85,
      fontFamily: "'Times New Roman', Times, serif",
      textAlign: "center",
      paddingTop: 40,
    };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>First React App </h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*
          change from html
          tag
          class=className. Cz javascript e class reserve.
          font-family=fontFamily
          direct object diye dite hole {{}} use korte hobe

          */}

        <h1 className="" style={style}>
          {Person.name}
        </h1>
        <h2 style={{color:"blue",textAlign:"right"}}>{Person.job}</h2>
        <h3>{Person.age}</h3>
      </div>
    );
  }
}

export default App;
