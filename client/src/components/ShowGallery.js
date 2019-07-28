import React from 'react';
import { connect } from 'react-redux';
import { fetchPhotos, fetchVideos, fetchLyrics, selectMedia } from '../actions';

class ShowGallery extends React.Component {
	componentDidMount() {
		this.props.fetchPhotos();
		this.props.fetchVideos();
		this.props.fetchLyrics();
	}

	render() {
		const selectedMedia = this.props.selectedMedia;
		if (selectedMedia === null) {
			return null;
		} else if (selectedMedia === 'Photo') {
			return this.props.photos.map(photo => {
				return (
					<div key={photo.id} className="ui card">
						<div className="image">
							<img src={photo.acf.photo.url} alt={photo.acf.description} />
						</div>
						<div className="content">
							<div className="header">{photo.acf.description}</div>
						</div>
					</div>
				);
			});
		} else if (selectedMedia === 'Video') {
			return this.props.videos.map(video => {
				console.log(video);
				return (
					<div key={video.id} className="ui card">
						<div className="image">
							<iframe src={video.acf.videos} />
						</div>
					</div>
				);
			});
		}
	}
}

const mapToStateProps = state => {
	console.log(state.videos);
	return {
		photos: Object.values(state.photos),
		videos: Object.values(state.videos),
		lyrics: Object.values(state.lyrics),
		selectedMedia: state.selectedMedia
	};
};

export default connect(
	mapToStateProps,
	{
		fetchPhotos,
		fetchVideos,
		fetchLyrics,
		selectMedia
	}
)(ShowGallery);
