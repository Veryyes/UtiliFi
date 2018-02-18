import React, { Component } from 'react';
import './App.css';
import Graph from './Graph.js';
import Sidebar from './Sidebar.js';
import Banner from './Banner.js';
import gas from './gas-station.png';
import water from './water-tap.png';
import power from './plug.png';

class App extends Component {
  constructor(props){
	super(props);
		this.state = {
			url: "https://env-83226.customer.cloud.microstrategy.com:443/MicroStrategy/servlet/mstrWeb?evt=3186&src=mstrWeb.3186&subscriptionID=A14EF33C11E8145F406F0080EFD58D96&Server=ENV-83226LAIOUSE1&Project=MicroStrategy%20Tutorial&Port=0&share=1&hiddensections=dockTop,dockLeft"
		}
		this.onChangeGraph = this.onChangeGraph.bind(this);
	}	

	onChangeGraph(text){
		switch(text){
			case "Usage":
				this.setState((prevState, props) =>{ return{url: "https://env-83226.customer.cloud.microstrategy.com:443/MicroStrategy/servlet/mstrWeb?evt=3186&src=mstrWeb.3186&subscriptionID=A14EF33C11E8145F406F0080EFD58D96&Server=ENV-83226LAIOUSE1&Project=MicroStrategy%20Tutorial&Port=0&share=1&hiddensections=dockTop,dockLeft"};
			});
			break;
			case "Cost":
				this.setState((prevState, props) =>{ return{url: "https://env-83226.customer.cloud.microstrategy.com:443/MicroStrategy/servlet/mstrWeb?evt=3186&src=mstrWeb.3186&subscriptionID=BB86AEF211E8146E406F0080EFD58D96&Server=ENV-83226LAIOUSE1&Project=MicroStrategy%20Tutorial&Port=0&share=1&hiddensections=dockTop,dockLeft"};
			});
			break;
			case "Total Cost":
				this.setState((prevState,props)=>{return{url: "https://env-83226.customer.cloud.microstrategy.com:443/MicroStrategy/servlet/mstrWeb?evt=3186&src=mstrWeb.3186&subscriptionID=1AB355DE11E8146E406F0080EF75CC95&Server=ENV-83226LAIOUSE1&Project=MicroStrategy%20Tutorial&Port=0&share=1&hiddensections=dockTop,dockLeft"};
			});
			break;
			default:
			break;
		}
	
	}

  render() {
    return (
      <div className="App">
		<Banner />
		<Sidebar onChangeGraph={this.onChangeGraph}/>
		<div style={{height: "25px"}}> </div>
		<Icon src={gas} dim={128}/>
		<Icon src={water} dim={128}/>
		<Icon src={power} dim={128}/>
		<Graph url={this.state.url}/>

      </div>
    );
  }
}

class Icon extends Component{
	render(){
		return(
			<div className="Icon">
				<img src={this.props.src} alt="" style={{width: this.props.dim, height: this.props.dim}}/>
			</div>
		);
	}
}

export default App;
