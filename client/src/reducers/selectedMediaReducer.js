import { SELECT_MEDIA } from '../actions/type';

export const mediasReducer = () => {
	return ['Photo', 'Video', 'Lyric', 'Other'];
};

export const selectedMediaReducer = (selectedMedia = null, action) => {
	if (action.type === SELECT_MEDIA) {
		return action.payload;
	}
	return selectedMedia;
};
