import React from 'react';
import {Link} from 'react-router';

export default class LinkComponent extends React.Component {
	render() {
		let url ="edit/" + this.props.rowData.acc_uic;
		//console.log(url);
    	return (<Link to={url}>{this.props.data}</Link>)

	}
}
