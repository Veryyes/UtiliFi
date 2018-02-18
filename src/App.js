import React, { Component } from 'react';
import './App.css';
import Graph from './Graph.js';

class App extends Component {
  render() {
	
    return (
      <div className="App">
	  <script type="text/javascript" src="https://env-83226.customer.cloud.microstrategy.com/MicroStrategyLibrary/javascript/embeddinglib.js"></script>
		<Graph/>
      </div>
    );
  }
}

export default App;
