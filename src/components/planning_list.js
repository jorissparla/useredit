import React, {Component} from 'react'
import { connect} from 'react-redux';
import { fetchPlanning } from '../actions/index';
import { Link} from 'react-router';
import Griddle from 'griddle-react';
import LinkComponent from './linkcomponent';


class PlanningList extends Component {
    componentWillMount() {
        this.props.fetchPlanning();
    }

    render() {
    	//console.log(this.columnMetaData())
        return ( 
          <div className = "list-group col-md-6">
            <div className = "text-xs-right">
              /*<Link to = "/accounts/new" className="btn btn-primary"> Add account </Link>*/
        
              <Griddle resultsPerPage={20}
              	results = {this.props.plannings} 
              	showSettings={true} 
              	showFilter={true} 
              	columns = {["company_name","source","team_member","action","action_changed_date","plan","plan_date","linked_incident","free_text","isa3","company_id",]}
/ >
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