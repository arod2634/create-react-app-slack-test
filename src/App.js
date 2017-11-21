import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import slack from './slack.min';
var slack = require('./slack.min');

class App extends Component {

  testSlack = () => {
    // logs {args:{hello:'world'}}
    slack.api.test({hello:'world'}, console.log)

    // :new: opt into promises
    slack.api.test({nice:1}).then(console.log).catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.testSlack()}/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
