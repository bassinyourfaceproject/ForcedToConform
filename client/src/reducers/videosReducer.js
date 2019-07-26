// import _ from 'lodash';
import { FETCH_VIDEOS } from '../actions/type';

export default function(state = {}, action) {
	if (action.type === FETCH_VIDEOS) {
		return { ...state, ...action.payload };
	} else {
		return state;
	}
}
