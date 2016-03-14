import React,{Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { showAccount} from '../actions/index';
import { Link } from 'react-router';

class AccountShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    
    this.props.showAccount(this.props.params.id);

  }

  onDeleteClick() {
/*    this.props.deleteaccount(this.props.params.id).
    then(()=> {
      this.context.router.push('/');
    });*/
  }

  getLink() {
    let url ="api/accounts/edit/"+ this.props.account.acc_uic ;
    console.log(url);
     return (<Link to={url}>Edit</Link>)
  }

  renderAccount() {
    const {account} = this.props;
    return (
        <div className="row">
        <div className="col s6 m7">
          <div className="card medium">
           <span className="card-title"><h3>{account.acc_fullname}</h3></span>
            <div className="card-image">
              <img src="http://api.randomuser.me/portraits/men/50.jpg" width="auto" height="200px"/>
             
            </div>
            <div className="card-content">
              <p>{account.acc_team}, {account.acc_region}</p>
            </div>
            <div className="card-action">
              <a href={this.navlink(account.acc_navid)}>Incident List</a>
              {this.getLink()}
            </div>
          </div>
        </div>
      </div>

      )

  }

  navlink(navid) {
    return "http://navigator.infor.com/n/incident_list.asp?ListType=OWNERID&Value="+navid;
  }

  render() {
    const {account} = this.props;
    console.log('this.props',this.props);
    if (!this.props.account) {
      return <div>Loading</div>
    }
    return (
      <div>
        <Link to ="/">Back to index </Link>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-danger pull-xs-right">Delete</button>
          {this.renderAccount()}


      </div>
    )

  }
}

function mapStateToProps(state) {
    return { account: state.accounts.account}
  }

export default connect(mapStateToProps, {showAccount})(AccountShow);