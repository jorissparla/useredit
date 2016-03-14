import React,{Component, PropTypes} from 'react';

class GenericListBox extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.update.bind(this);
    
  }

  update(e)
  {
    console.log('update', e)
    this.props.onUpdate(e);
  }

  componentDidMount() {
  }

  render() {
   // const {myField} = this.props.fields;
    const {options} = this.props;

    if (!this.props.options[0]) {
      return <div>Loading</div>
    }
    let componentLabel = this.props.label ? <label>{this.props.label}</label> : '';
    let optionlist = this.props.options.map ((option) => {
            return (<option key={option.cod_UIC} value={option.cod_key}>{option.cod_description}</option>)
          });
    return (
      <div className="input-field col s12">
      
        <select className="browser-default" onChange={this.props.handleChange} value={this.props.initialValue} {...this.props.field}  >
          {optionlist}
        </select>
        {componentLabel}
      </div>
    )
  }
};



export default GenericListBox;