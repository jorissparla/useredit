import React,{Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchRegions} from '../actions/index';

class RegionListBox extends Component {

    constructor(props) {
      super(props);
      
    }


  componentWillMount() {
    this.props.fetchRegions();

  };

  componentWillReceiveProps(props) {
      this.state={'value':this.props.value, 'selected': this.props.value};
      //console.log('CWR',this.state)
  }

  render() {
 //   console.log('render RegionListBox')
    const { regions, value} = this.props;
   // console.log('Render', this.props);
    if (!this.props.regions) {
      return <div>Loading</div>
    }
    let componentLabel = this.props.label ? <label>{this.props.label}</label> : <label>Regions</label>
    let regionlist = this.props.regions.map ((region) => {
            return (<option key={region.cod_UIC} value={region.cod_key}>{region.cod_description}</option>)
          });
    return (
      <div className="input-field col s4">
       {componentLabel}
        <select className="browser-default" onChange={this.props.handleChange} value={this.props.initialValue}  >
          {regionlist}
        </select>
       
      </div>
    )

  }
};

function mapStateToProps(state) {
    return { regions: state.codes.allregions}
  }

export default connect(mapStateToProps, {fetchRegions})(RegionListBox);