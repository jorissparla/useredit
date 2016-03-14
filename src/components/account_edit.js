import React, {PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import { showAccount , updateAccount , fetchLanguages, fetchRegions} from '../actions/index';
import FullNameTextInput from './fullname_textinput';
import TestListBox from './generic_list';
import RegionListBox from './region_list';
import WorkLoadBox from './workload';


export const fields = ["acc_uic","acc_login", "acc_firstname","acc_lastname","acc_fullname", "acc_team","acc_location", "acc_region", "acc_email", "acc_navid", "acc_info","acc_active","acc_workload", "acc_waitsupp","acc_waitcust","acc_solproposed"];
const possibleRegions = ['EMEA','NA','APJ','GLB', 'M3'];


export default class AccountEdit extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  
  constructor(props) {
     super(props);
     this.updateregion = this.updateregion.bind(this);
     this.submitform  = this.submitform.bind(this);
  }

  componentWillMount() {
   // console.log('showAccount this props', this.props);
    this.props.showAccount(this.props.params.id);
    this.props.fetchLanguages();
    this.props.fetchRegions();
    this.state = {'value': ''}
  }

  submitform(props)  {
  // console.log('Props',props)
    this.props.updateAccount(props).
    then(()=> {
      this.context.router.push('/');
    });
  }



  onEmailClick(props) {
  	console.log(props);
  }


  showRegions(selVal) {
       // console.log('State', this);   
    			return possibleRegions.map ((region) => {
  				  return (<option key = {region}  
  				  	 value={region}>{region}</option>)
  			});
  
  }

  updateregion(e) {
   console.log('handleRegionChange',e.target.value, this.props.values);
  //  this.setState({'regionvalue': e.target.value})
    //this.props.values.acc_region = e.target.value;
    console.log('->handleRegionChange',this.props.values);

  }

  render() {
    

  	const {fields : {acc_uic, acc_login, acc_navid,acc_firstname,acc_lastname,acc_fullname, acc_email, acc_team,acc_location, acc_region, acc_info,acc_active,  acc_workload, acc_waitsupp,acc_waitcust,acc_solproposed}, regions, lang,handleSubmit, handleChange,handleEmailclick} = this.props;

  
    return (
    <div className="row">
    	<form onSubmit={handleSubmit(this.submitform)} className="col s12"> 
    		<div className="row" >
    			<div className="col s4 ">
    				<i className="material-icons prefix">account_box</i>
    				<label>ID</label>
    				<input disabled type="text"  {...acc_uic}/>
    			</div>
	    		<div className="col s4 ">
	    			<i className="material-icons prefix">account_box</i>
	  				<label>Login</label>
	  				<input disabled type="text"  {...acc_login}/>
	  			</div>	    		
	  			<div className="col s4 ">
	    			<i className="material-icons prefix">account_box</i>
	  				<label>Navigator ID</label>
	  				<input disabled type="text"  {...acc_navid}/>
	  			</div>
    		</div>
    		<div className="row" >
  				<div className="col s4">
  				<i className="material-icons prefix">account_circle</i>
	    				<label>First Name</label>
	    				<input type="text" placeholder="First Name" {...acc_firstname}/>
    			</div>
    			<div className="col s4">
        		<i className="material-icons prefix">account_circle</i>
    				<label>Last Name</label>    			
    				<input type="text" placeholder="Last Name" {...acc_lastname}/>
    			</div>
    			<div className="col s3" >
    			<i className="material-icons prefix">supervisor_account</i>
    				<label>Full Name</label>
    				<input type="text" placeholder="Full Name" {...acc_fullname}/>
    			</div>  
            <div className="chip">
            <img src="http://materializecss.com/images/yuna.jpg" alt="Contact Person"/>
             {acc_fullname.initialValue}
            </div>     			  
    		</div>
    		<div className="row" >

    			<div className="col s4"> 
    			<i className="material-icons prefix" onClick={this.onEmailClick.bind(this)}>email</i>   			
    				<label>email</label>
    				<input type="text" placeholder="email" {...acc_email}/>
    			</div>
    			<WorkLoadBox wl={acc_workload.initialValue} ws={acc_waitsupp.initialValue} wc={acc_waitcust.initialValue} sp={acc_solproposed.initialValue} />
    		</div>
    		<div className="row" >
    			<div className="col s4">
    				<i className="material-icons prefix">group_work</i>
    				<label>team</label>    			
    				<input type="text" placeholder="Team" {...acc_team}/>
    			</div>
    			<div className="col s4">
    			<i className="material-icons prefix">my_location</i>
    				<label>Location</label>
    				<input type="text" placeholder="Location" {...acc_location}/>
    			</div>
           <div className="col s4 ">
            <i className="material-icons prefix">my_location</i>
            <label>Region</label>
            
            <TestListBox  value={acc_region.initialValue} handleChange={this.updateregion} options={regions} field={acc_region} />
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
    return { account: state.accounts.account, lang: state.codes.alllang, regions: state.codes.allregions, initialValues: state.accounts.account }
  }


export default reduxForm({
	form: 'accountEditForm',
	fields
	, 
initialValues: {
	regions : ['EMEA', 'NA', 'APJ', 'GLOBAL']
  }
},
 mapStateToProps, { showAccount, updateAccount, fetchLanguages, fetchRegions }) (AccountEdit);
