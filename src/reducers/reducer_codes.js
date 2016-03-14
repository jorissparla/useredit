import { LANG_LIST, REGIONS_LIST} from '../actions/index';
const INITIAL_STATE={ alllang: [], allregions: [], lang: null};

export default function(state=INITIAL_STATE, action ) {
  switch (action.type) {
    case LANG_LIST:
        return {...state, alllang:action.payload.data};    
    case REGIONS_LIST:
        return {...state, allregions:action.payload.data};
    default:
      return state;

  }
}