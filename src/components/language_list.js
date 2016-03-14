import React,{Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchLanguages} from '../actions/index';

class LanguageListBox extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    
    this.props.fetchLanguages();

  };
  componentDidMount() {
  }

  render() {
    const {languages} = this.props;
    if (!this.props.languages[0]) {
      return <div>Loading</div>
    }
    let langlist = this.props.languages.map ((lang) => {
            return ( <div className="chip" key={lang.cod_UIC}>
             {lang.cod_description}
             <i className="material-icons">close</i>
            </div>  )
          });
    return (
      <div className="col s4">
          {langlist}
        <label>Languages</label>
      </div>
    )

  }
};

function mapStateToProps(state) {
    return { languages: state.codes.alllang}
  }

export default connect(mapStateToProps, {fetchLanguages})(LanguageListBox);