import { SELECT_MEDIA } from '../actions/type';

export const mediasReducer = () => {
	return [
		{
			media: 'Photo',
			img: `${process.env.PUBLIC_URL}/images/gallery/mediaPhoto.jpg`
		},
		{
			media: 'Video',
			img: `${process.env.PUBLIC_URL}/images/gallery/mediaVideo.jpg`
		},
		{
			media: 'Lyric',
			img: `${process.env.PUBLIC_URL}/images/gallery/mediaLyric.jpg`
		},
		{
			media: 'Other',
			img: `${process.env.PUBLIC_URL}/images/gallery/mediaOther.jpg`
		}
	];
};

export const selectedMediaReducer = (selectedMedia = null, action) => {
	if (action.type === SELECT_MEDIA) {
		return action.payload;
	}
	return selectedMedia;
};
