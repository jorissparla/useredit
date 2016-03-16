import React from 'react';
import {Link} from 'react-router';

export default class LinkComponent extends React.Component {
	render() {
		let url ="edit/" + this.props.rowData.acc_uic;
		//console.log(url);
    	return (<Link to={url}>{this.props.data}</Link>)

	}
}

export class PlanningLinkComponent extends React.Component {
	render() {
		let url ="/planning/edit/" + this.props.rowData.UIC;
		//console.log(url);
    	return (<Link to={url}>{this.props.data}</Link>)

	}
}

export class UICLinkComponent extends React.Component {
	render() {
		let url ="/planning/edit/" + this.props.rowData.UIC;
		//console.log(url);
    	return (<Link to={url}>{this.props.data}</Link>)

	}
}export class IncidentLinkComponent extends React.Component {
	render() {
		let url ="https://www.inforxtreme.com/espublic/en/AnswerLinkDotNet/SoHo/cases/SoHocasedetails.aspx?FromDotNet=Yes&caseid=" + this.props.rowData.linked_incident;
		//console.log(url);
    	return (<a href={url} target="_blank">{this.props.data}</a>)

	}
}