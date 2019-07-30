import React from 'react';
import ReadMoreReact from 'read-more-react';
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
					<div key={photo.id} className="photo-wrapper">
						<div className="photo">
							<img src={photo.acf.photo.url} />
						</div>
						<div className="photo-description-wrapper">
							<div className="photo-description">{photo.acf.description}</div>
						</div>
					</div>
				);
			});
		} else if (selectedMedia === 'Video') {
			return this.props.videos.map(video => {
				console.log(video);
				return (
					<div key={video.id} className="video-wrapper">
						<div className="video">
							<iframe src={video.acf.video} allowfullscreen="true" />
						</div>
						<div className="video-description">{video.slug}</div>
					</div>
				);
			});
		} else if (selectedMedia === 'Lyric') {
			return this.props.lyrics.map(lyric => {
				return (
					<div className="ui card">
						<div className="content">
							<div className="header">{lyric.acf.title}</div>
							<div className="description">
								<p>{lyric.acf.lyric}</p>
							</div>
						</div>
					</div>
				);
			});
		} else {
			return <div>No content</div>;
		}
	}
}

const mapToStateProps = state => {
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
