import React, {Component} from 'react'
import { connect} from 'react-redux';
import { fetchAccounts }
from '../actions/index';
import { Link} from 'react-router';
import Griddle from 'griddle-react';
import {LinkComponent} from './linkcomponent';


class AccountList extends Component {
    componentWillMount() {
        this.props.fetchAccounts();
    }

    linkaccount(id) {
        return "/accounts/" + id
    }


    columnMetaData() {
        return ([{
            "columnName": "acc_login",
            "order": 1,
            "locked": true,
            "displayName": "Login",
             "customComponent": LinkComponent
        }, {
            "columnName": "acc_fullname",
            "order": 2,
            "locked": true,
            "displayName": "Name",
            // "customComponent": LinkComponent
        }, {
            "columnName": "acc_navid",
            "order": 3,
            "locked": true,
            "displayName": "navid",
            // "customComponent": LinkComponent
        }, {
            "columnName": "acc_team",
            "order": 4,
            "locked": true,
            "displayName": "Team",
            // "customComponent": LinkComponent
        }, {
            "columnName": "acc_region",
            "order": 5,
            "locked": true,
            "displayName": "Region",
            // "customComponent": LinkComponent
        }, {
            "columnName": "acc_email",
            "order": 6,
            "locked": true,
            "displayName": "E-mail",
            // "customComponent": LinkComponent
        }, {
            "columnName": "acc_firstname",
            "order": 6,
            "locked": false,
            "displayName": "First Name",
            // "customComponent": LinkComponent
        }, {
            "columnName": "acc_location",
            "order": 6,
            "locked": false,
            "displayName": "Location",
            // "customComponent": LinkComponent
        }])
    }

    render() {
    	//console.log(this.columnMetaData())
        return ( 
          <div className = "list-group col-md-6">
            <div className = "text-xs-right">
              <Link to = "/accounts/new" className="btn btn-primary"> Add account </Link>
        
              <Griddle resultsPerPage={20}
              	results = {this.props.accounts} 
              	columnMetadata={this.columnMetaData()} 
              	showSettings={true} 
              	showFilter={true} 
              	columns = {["acc_login", "acc_fullname", "acc_team","acc_location", "acc_region", "acc_email"]}/ >
            </div>
      
         </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        accounts: state.accounts.all
    }
}

export
default connect(mapStateToProps, {
    fetchAccounts
})(AccountList);