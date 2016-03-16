import React, {PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import { showPlanning , updatePlanning} from '../actions/index';


export const fields = ["isp_UIC","isp_company_id", "isp_company_name", "isp_free_text", "isp_team_member","isp_action","isp_linked_incident"]
const possibleRegions = ['EMEA','NA','APJ','GLB', 'M3'];


export default class PlanningEdit extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  
  constructor(props) {
     super(props);
     this.submitform  = this.submitform.bind(this);
  }

  componentWillMount() {
   // console.log('showAccount this props', this.props);
    this.props.showPlanning(this.props.params.id);

    this.state = {'value': ''}
  }

  submitform(props)  {
   console.log('Props',props)
    this.props.updatePlanning(props).
    then(()=> {
      this.context.router.push('/planninglist');
    });
  }





  render() {
    

  	const {fields : {isp_UIC,isp_datetime,isp_company_name,isp_source,isp_team_member,isp_action,isp_action_changed_date,isp_plan,isp_plan_date,isp_linked_incident,isp_free_text,isp_isa3,isp_company_id}, handleSubmit} = this.props;

  
    return (
    <div className="row">
    	<form onSubmit={handleSubmit(this.submitform)} className="col s12"> 
    		<div className="row" >
    			<div className="col s4 ">
    				<i className="material-icons prefix">account_box</i>
    				<label>ID</label>
    				<input disabled type="text"  {...isp_UIC}/>
    			</div>
	    		<div className="col s4 ">
	    			<i className="material-icons prefix">account_box</i>
	  				<label>Customer</label>
	  				<input  type="text"  {...isp_company_name}/>
	  			</div>	    		
	  			<div className="col s4 ">
	    			<i className="material-icons prefix">account_box</i>
	  				<label>Customer ID</label>
	  				<input disabled type="text"  {...isp_company_id}/>
	  			</div>
          <div className="row">
            <div className="col s4">
            <i className="material-icons prefix">account_circle</i>
                <label>Member</label>
                <input type="text" placeholder="Member" {...isp_team_member}/>
            </div>
            <div className="col s4">
              <i className="material-icons prefix">account_circle</i>
              <label>Incident</label>          
              <input type="text" placeholder="Incident" {...isp_linked_incident}/>
            </div>
            <div className="col s3" >
            <i className="material-icons prefix">supervisor_account</i>
              <label>Action</label>
              <input type="text" placeholder="Action" {...isp_action}/>
            </div>  
          </div>
          <div className="row">
            <div className="col s12">
            <label>remarks</label>
            <textarea name="a" id="a2323" cols="30" rows="20" className="materialize-textarea" {...isp_free_text}/>
            </div>

          </div>
    		</div>
    	

    		<button className="btn waves-effect waves-light" type="submit" name="action">Submit
  				<i className="material-icons right">save</i>
				</button>
    	</form>
    </div>
    );
  }
}

function mapStateToProps(state) {
    return { planning: state.plannings.planning,initialValues: state.plannings.planning }
  }


export default reduxForm({
	form: 'planningEditForm',
	fields
	, 
initialValues: {
	regions : ['EMEA', 'NA', 'APJ', 'GLOBAL']
  }
},
 mapStateToProps, { showPlanning, updatePlanning }) (PlanningEdit);
