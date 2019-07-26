import { combineReducers } from 'redux';
import blogsReducers from './blogsReducers';
import videosReducer from './videosReducer';
import photosReducer from './photosReducer';
import lyricsReducer from './lyricsReducer';
import { selectedMediaReducer, mediasReducer } from './selectedMediaReducer';

export default combineReducers({
	blogs: blogsReducers,
	videos: videosReducer,
	photos: photosReducer,
	lyrics: lyricsReducer,
	medias: mediasReducer,
	selectedMedia: selectedMediaReducer
});
