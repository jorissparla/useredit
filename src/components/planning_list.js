import React, {Component} from 'react'
import { connect} from 'react-redux';
import { fetchPlanning } from '../actions/index';
import { Link} from 'react-router';
import Griddle from 'griddle-react';
import {PlanningLinkComponent} from './linkcomponent';
import NiceDate from './nice_date';


class PlanningList extends Component {
    componentWillMount() {
        this.props.fetchPlanning();
    }
columnMetaData() {
        return ([/*{
            "columnName": "UIC",
            "order": 1,
            "locked": true,
            "displayName": "Id",
             "customComponent": PlanningLinkComponent
        }, */{
            "columnName": "company_name",
            "order": 2,
            "locked": true,
            "displayName": "Customer",
            "customComponent": PlanningLinkComponent
        }, {
            "columnName": "company_id",
            "order": 3,
            "locked": true,
            "displayName": "Customer#",
            // "customComponent": LinkComponent
        }, {
            "columnName": "team_member",
            "order": 4,
            "locked": true,
            "displayName": "WorkedOnBy",
            // "customComponent": LinkComponent
        }, {
            "columnName": "action_changed_date",
            "order": 4,
            "locked": true,
            "displayName": "ChangedOn",
            "customComponent": NiceDate
        }, {
            "columnName": "action",
            "order": 4,
            "locked": true,
            "displayName": "Status",
           // "customComponent": NiceDate
        }])
    }

    render() {
    	//console.log(this.columnMetaData())
        return ( 
          <div className = "list-group col-md-6">
            <div className = "text-xs-right">
              <Link to = "/planning/new" className="btn btn-primary"> Add Planning </Link>
        
              <Griddle resultsPerPage={20}
              	results = {this.props.plannings} 
                columnMetadata={this.columnMetaData()} 
              	showSettings={true} 
              	showFilter={true} 
              	columns = {["UIC","company_name","company_id", "team_member", "action_changed_date", "action"]}
                />
            </div>
      
         </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        plannings: state.plannings.all
    }
}

export
default connect(mapStateToProps, {
    fetchPlanning
})(PlanningList);