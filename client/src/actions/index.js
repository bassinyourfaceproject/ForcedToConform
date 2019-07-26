import axios from 'axios';
import {
	FETCH_BLOGS,
	FETCH_VIDEOS,
	FETCH_PHOTOS,
	FETCH_LYRICS,
	SELECT_MEDIA
} from './type';

export const selectMedia = media => {
	return {
		type: SELECT_MEDIA,
		payload: media
	};
};

export const fetchBlogs = () => async dispatch => {
	const response = await axios.get('http://localhost:8888/wp-json/wp/v2/blog');
	dispatch({ type: FETCH_BLOGS, payload: response.data });
};

// export const fetchBlog = () => async dispatch => {
//     const response = await axios.get('http://localhost:8888/wp-json/wp/v2/blog')
// }

export const fetchVideos = () => async dispatch => {
	const response = await axios.get(
		'http://localhost:8888/wp-json/wp/v2/videos'
	);
	// console.log(response.data);
	dispatch({ type: FETCH_VIDEOS, payload: response.data });
};

export const fetchPhotos = () => async dispatch => {
	const response = await axios.get(
		'http://localhost:8888/wp-json/wp/v2/photo?_embed'
	);
	// console.log(response.data);
	dispatch({ type: FETCH_PHOTOS, payload: [...response.data] });
};

export const fetchLyrics = () => async dispatch => {
	const response = await axios.get(
		'http://localhost:8888/wp-json/wp/v2/lyrics'
	);
	// console.log(response.data);
	dispatch({ type: FETCH_LYRICS, payload: response.data });
};
