import React, { Component } from 'react';
//import './embeddinglib.js'

class Graph extends Component {

  render() {
    return (
      <div className="Graph">
		<iframe id='graph' width="80%" height="480" src="https://env-83226.customer.cloud.microstrategy.com:443/MicroStrategy/servlet/mstrWeb?evt=3186&src=mstrWeb.3186&subscriptionID=70D4FAB811E8145E406F0080EF456C94&Server=ENV-83226LAIOUSE1&Project=MicroStrategy%20Tutorial&Port=0&share=1&hiddensections=dockTop,dockLeft,footer"/>
		<br/>
		<button onClick={this.handleClick}>Update</button>
		
      </div>
    );
  }

	handleClick(event){
		document.getElementById('graph').src = document.getElementById('graph').src
	}
/*
  componentDidMounted(){
	console.log("cunt");
	let url = "http://env-83226.customer.cloud.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/4F4A4A4A11E814241E090080EFC5EF0C";
	let container = document.getElementById('container');
	/*microstrategy.dossier.create({
		url: url,
		enableResponsive: true,
		placeholder: container
	});
	console.log("Done Mounting")
  }*/
}

export default Graph;
