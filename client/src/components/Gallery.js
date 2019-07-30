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
				<li
					onClick={() => this.props.selectMedia(media.media)}
					key={media.id}
					className="gallery-media"
				>
					<img src={media.img} />
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
					<div className="ui container">
						<ul className="gallery content-padding">{this.renderMedias()}</ul>
						<div className="flex-container">
							<ShowGallery />
						</div>
					</div>
				</div>
			</>
		);
	}
}

const mapToStateProps = state => {
	console.log(state.medias);
	return {
		medias: state.medias,
		selectedMedia: state.selectedMedia
	};
};

export default connect(
	mapToStateProps,
	{ selectMedia }
)(Gallery);
