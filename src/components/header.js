import React from 'react';
import {Link} from 'react-router';
export default class header extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
  <nav>
    <div className="nav-wrapper blue-grey">
      <a href="/" className="brand-logo">Home</a>
      <ul className="right hide-on-med-and-down">
        <li><Link to = "planninglist"><i className="material-icons">search</i></Link></li>
        <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
        <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
        <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
      </ul>
    </div>
  </nav>
    );
  }
}
