import React from 'react';
import dateFormat from 'dateformat';

export default class nice_date extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    let fmtdate=  dateFormat(this.props.rowData.action_changed_date,"dddd, mmmm dS, yyyy");
    return (

      <div>{fmtdate}</div>
    )
  }
}

