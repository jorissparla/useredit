// import types from '/actiontypes';
import axios from 'axios';

const ROOT_URL='http://localhost:3000/api';
export const ACCOUNT_LIST = 'users/LIST';
export const ACCOUNT_SHOW = 'users/SHOW';
export const ACCOUNT_ADD = 'users/ADD';
export const ACCOUNT_EDIT = 'users/EDIT';
export const ACCOUNT_SAVE = 'users/SAVE';
export const ACCOUNT_DELETE = 'users/DELETE';
export const CLEAR_ACTIVE = 'users/ACTIVE';
export const LANG_LIST = 'languages/LIST';
export const REGIONS_LIST = 'regions/LIST';
export const PLANNING_LIST = 'planning/LIST';
export const PLANNING_SHOW = 'planning/SHOW';
export const PLANNING_SAVE = 'planning/SAVE';




export const addAccount = (props) => {
	const request= axios.post(ROOT_URL);
	return {
		type: ACCOUNT_ADD,
		payload: request
	}
}

export const fetchAccounts = () => {
	const request = axios.get(ROOT_URL+'/accounts');
	return {
		type: ACCOUNT_LIST,
		payload: request
	}
}

export const showAccount = (id) => {
	const request = axios.get(ROOT_URL+'/accounts/'+id)
		return {
		type: ACCOUNT_SHOW,
		payload: request
	}
}
export const updateAccount = (props) => {
	const request = axios.put(ROOT_URL+'/accounts/', props)
		return {
		type: ACCOUNT_SAVE,
		payload: request
	}


}

export const fetchLanguages = () => {
	const request = axios.get(ROOT_URL+'/languages');
	return {
		type: LANG_LIST,
		payload: request
	}
}

export const fetchRegions = () => {
	const request = axios.get(ROOT_URL+'/regions');
	return {
		type: REGIONS_LIST,
		payload: request
	}
}

export const fetchPlanning = () => {
	const request = axios.get(ROOT_URL+'/isaplanning');
	return {
		type: PLANNING_LIST,
		payload: request
	}
}

export const showPlanning = (id) => {
	const request = axios.get(ROOT_URL+'/isaplanning/'+id);
	return {
		type: PLANNING_SHOW,
		payload: request
	}
}

export const updatePlanning = (props) => {
	const request = axios.put(ROOT_URL+'/isaplanning/', props)
		return {
		type: PLANNING_SAVE,
		payload: request
	}


}