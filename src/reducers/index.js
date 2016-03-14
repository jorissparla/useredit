import { combineReducers } from 'redux';
import AccountReducer from './reducer_accounts';
import CodeReducer from './reducer_codes';
import PlanningReducer from './reducer_planning';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  accounts:AccountReducer,
  codes: CodeReducer,
  plannings: PlanningReducer,
  form: formReducer
});

export default rootReducer;