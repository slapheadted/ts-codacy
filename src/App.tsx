import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { runBadFunc } from "./services/bad-func";

class App extends Component {

  private runMethod() {
    console.log("running bad func");
    runBadFunc(1,2,4,8);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.runMethod}>Run Bad Func</button>
      </div>
    );
  }
}

export default App;
