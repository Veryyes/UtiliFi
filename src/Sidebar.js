import React, { Component } from 'react';

class Sidebar extends Component {

  render() {
    return (
      <div className="Sidebar">
			<div className="BoxHeader">
				Select a Graph
			</div>
			<Box text="Usage" onChangeGraph={this.props.onChangeGraph}/>
			<Box text="Cost" onChangeGraph={this.props.onChangeGraph}/>
			<Box text="Total Cost" onChangeGraph={this.props.onChangeGraph}/>
			<div className="BoxFooter">
			</div>
      </div>
    );
  }



}

class Box extends Component{
	render(){
		return(
			<div className="Box" onClick={this.handleclick=this.handleclick.bind(this)}>
				{this.props.text}
			</div>
		);
	}
	handleclick(event){
		let text = this.props.text;
		console.log("Changing Graph to: "+ text);
		this.props.onChangeGraph(text);
	}
}

export default Sidebar;
