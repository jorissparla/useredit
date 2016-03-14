import React, { Component } from 'react';

export default class workload extends Component {
	render() {
		return (
			<div>
					<div className="col s2"> 
    				<label>Workload</label>
    					<h2>{this.props.wl}</h2>
    				</div>    				
    				<div className="col s2"> 
    				<label>Waiting</label>
    					<h2>{this.props.ws}</h2>
    				</div>    				
    				<div className="col s2"> 
    				<label>Customer</label>
    					<h2>{this.props.wc}</h2>
    				</div>
       				<div className="col s2"> 
    				<label>Solution</label>
    					<h2>{this.props.sp}</h2>
    				</div>
    			</div>
		);
	}
}



				