import React from 'react';
import { connect } from 'react-redux';
import { fetchPhotos, fetchVideos, fetchLyrics } from '../actions';

class ShowGallery extends React.Component {
	componentDidMount() {
		this.props.fetchPhotos();
		this.props.fetchVideos();
		this.props.fetchLyrics();
	}

	renderPhotos = () => {
		if (this.props == null) {
			return <div>Loading</div>;
		}
		return this.props.photos.map(photo => {
			return (
				<div key={photo.id} className="ui card">
					<div className="image">
						<img src={photo.acf.photo.url} />
					</div>
					<div className="content">
						<div className="header">{photo.acf.description}</div>
					</div>
				</div>
			);
		});
	};

	render() {
		console.log(this.props.selctedMedia);
		return <div className="gallery-wrap">hi</div>;
	}
}

const mapToStateProps = state => {
	// console.log(state.photos);
	return {
		photos: Object.values(state.photos),
		videos: Object.values(state.videos),
		lyrics: Object.values(state.lyrics)
	};
};

export default connect(
	mapToStateProps,
	{
		fetchPhotos,
		fetchVideos,
		fetchLyrics
	}
)(ShowGallery);
