import { PLANNING_LIST, PLANNING_SHOW} from '../actions/index';
const INITIAL_STATE={ all: [], planning: null};

export default function(state=INITIAL_STATE, action ) {
  switch (action.type) {
    case PLANNING_LIST:
        return {...state, all:action.payload.data};
   case PLANNING_SHOW:
      return {...state, planning:action.payload.data[0]};
    default:
      return state;

  }
}