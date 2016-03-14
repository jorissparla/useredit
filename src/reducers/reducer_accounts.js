import { ACCOUNT_LIST, ACCOUNT_ADD, ACCOUNT_SHOW} from '../actions/index';
const INITIAL_STATE={ all: [], post: null};

export default function(state=INITIAL_STATE, action ) {
  switch (action.type) {
    case ACCOUNT_LIST:
        return {...state, all:action.payload.data};
    case ACCOUNT_SHOW:
      return {...state, account:action.payload.data[0]};
    default:
      return state;

  }
}