import _ from 'lodash';
import { FETCH_PHOTOS } from '../actions/type';

export default function(state = {}, action) {
	if (action.type === FETCH_PHOTOS) {
		return { ...state, ..._.mapKeys(action.payload, 'slug') };
	} else {
		return state;
	}
}
