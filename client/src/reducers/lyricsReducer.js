// import _ from 'lodash';
import { FETCH_LYRICS } from '../actions/type';

export default function(state = {}, action) {
	if (action.type === FETCH_LYRICS) {
		return { ...state, ...action.payload };
	} else {
		return state;
	}
}
