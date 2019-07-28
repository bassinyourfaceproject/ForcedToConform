import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends React.Component {
	componentDidMount() {
		document.querySelector('body').className = 'home';
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}

	render() {
		return (
			<>
				<div>
					{/* <section> */}
					<div className="image-wrapper content-padding">
						<img
							className="image"
							src={`${process.env.PUBLIC_URL}/images/sampleImage.jpg`}
							alt="Top-page"
						/>
						<h1 className="main-title">Forced To Conform</h1>
					</div>
					{/* </section> */}
					<section className="content-padding">
						<h2 className="section-title">About me</h2>
						<div className="flex-container">
							<div className="flex-child introduction">
								<h3>Keith</h3>
								<p>
									About meAbout meAbout meAbout meAbout meAbout meAbout meAbout
									meAbout meAbout meAbout meAbout meAbout meAbout meAbout
									meAbout meAbout meAbout meAbout meAbout meAbout meAbout
									meAbout meAbout meAbout meAbout meAbout meAbout meAbout
									meAbout meAbout meAbout meAbout meAbout meAbout meAbout
									meAbout mes
								</p>
							</div>
							<div className="flex-child">
								<img
									src={`${process.env.PUBLIC_URL}/images/keithSample.jpg`}
									alt="sample"
								/>
							</div>
						</div>
					</section>
				</div>
			</>
		);
	}
}
export default Home;
