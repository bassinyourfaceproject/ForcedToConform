import React from 'react';
import { connect } from 'react-redux';
import { selectMedia } from '../actions';
import ShowGallery from './ShowGallery';

class Gallery extends React.Component {
	componentDidMount() {
		document.querySelector('body').className = 'gallery';
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}

	renderMedias = () => {
		if (this.props.medias === null) {
			return <div>Loading...</div>;
		}
		return this.props.medias.map(media => {
			return (
				<li key={media.id} className="gallery-media">
					<button
						onClick={() => this.props.selectMedia(media)}
						className="ui button primary"
					>
						{media}
					</button>
				</li>
			);
		});
	};

	render() {
		return (
			<>
				<div>
					{/* <section> */}
					<div className="image-wrapper content-padding">
						<img
							className="image"
							src={`${process.env.PUBLIC_URL}/images/photographer.jpg`}
							alt="sample"
						/>
						<h2 className="main-title">Gallery</h2>
					</div>
					<h2>
						<span>Media</span>
					</h2>
					<ul className="gallery">{this.renderMedias()}</ul>
					<ShowGallery />
				</div>
			</>
		);
	}
}

const mapToStateProps = state => {
	// console.log(state.selectedMedia);
	return {
		medias: state.medias,
		selectedMedia: state.selectedMedia
	};
};

export default connect(
	mapToStateProps,
	{ selectMedia }
)(Gallery);
