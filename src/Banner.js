import React, { Component } from 'react';
import front from './front1.png';
class Banner extends Component {

  render() {
    return (
      <div className="Banner">
		<img src={front} alt="" style={{width: "20%", height: "20%"}}/>
	  </div>
    );
  }
}

export default Banner;
