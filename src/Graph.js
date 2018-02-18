import React, { Component } from 'react';
//import './embeddinglib.js'

class Graph extends Component {

  render() {
    return (
      <div className="Graph">
<iframe title="Data!" width="60%" height="480"  src={this.props.url}></iframe>
      </div>
    );
  }

}

export default Graph;
