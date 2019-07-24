import axios from 'axios';
import { FETCH_BLOGS } from './type';

export const fetchBlogs = () => async dispatch => {
	const response = await axios.get('http://localhost:8888/wp-json/wp/v2/blog');
	console.log(response.data);
	dispatch({ type: FETCH_BLOGS, payload: response.data });
};

// export const fetchBlog = () => async dispatch => {
//     const response = await axios.get('http://localhost:8888/wp-json/wp/v2/blog')
// }
