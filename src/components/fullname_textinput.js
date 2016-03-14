import React from 'react';

export default class FullNameTextInput extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };


  constructor(props) {
    super(props);
      	console.log(this.props.text);
    this.state = {
      defaultValue: this.props.defaultValue ? this.props.defaultValue :  this.props.FullName
    }
  }

	componentWillMount() {
		
	}



	handleChange(e) {
		this.setState({
      value: e.target.value,
    });
	}

  render() {
  	  let dvalue = this.state.defaultValue;
    	console.log(this.props, dvalue);
    	this.props.defaultValue ? dvalue = this.props.defaultValue : dvalue;

    return (

      <input type="text"  onChange={this.handleChange} placeholder="Full Name"  value={dvalue} />
    );
  }
}
