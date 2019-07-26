import React from 'react';
import { connect } from 'react-redux';
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
				<li className="gallery-media">
					<button className="ui button primary">{media}</button>
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
							alt="sample image"
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
	console.log(state.medias);
	return {
		medias: state.medias
	};
};

export default connect(mapToStateProps)(Gallery);
