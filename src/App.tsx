import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { runBadFunc } from "./services/bad-func";
import { runBadFuncTwo } from "./services/bad-func-js";

class App extends Component {

  private runMethod() {
    console.log("running bad func...added some more stuff");

    [1,2,3,4].map((item) => {
      if (item) {
        if (item / 2 === 4) {
          return true;
        }
      }
    });
    runBadFunc(1,2,4,8);
    runBadFuncTwo(2,3,5,3);
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
