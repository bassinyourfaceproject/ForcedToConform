import { FETCH_BLOGS } from '../actions/type';
import _ from 'lodash';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_BLOGS:
			return { ...state, ..._.mapKeys(action.payload, 'slug') };
		default:
			return state;
	}
}
