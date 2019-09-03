import React, {Component} from 'react';
import {connect} from 'react-redux';

// Making it a stateful component so we can use the react lifecyles to trigger async events
class App extends Component {
  // could use the constructor here to initialise the rules(s)) but we will use a non OOP approach
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default connect(undefined)(App);
