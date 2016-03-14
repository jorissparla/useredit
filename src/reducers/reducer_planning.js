import { PLANNING_LIST} from '../actions/index';
const INITIAL_STATE={ all: [], planning: null};

export default function(state=INITIAL_STATE, action ) {
  switch (action.type) {
    case PLANNING_LIST:
        return {...state, all:action.payload.data};
/*    case ACCOUNT_SHOW:
      return {...state, account:action.payload.data[0]};*/
    default:
      return state;

  }
}