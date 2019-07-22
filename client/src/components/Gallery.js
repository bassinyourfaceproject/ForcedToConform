import React from 'react';

class Gallery extends React.Component {
	componentDidMount() {
		document.querySelector('body').className = 'gallery'
	}
	componentWillUnmount() {
		document.querySelector('body').className = '';
	}
render() {
return (
	<>
		<h1><span>gallery</span></h1>
		<ul class='gallery'>
			<li><a href='gallery-single-post.html'><img src='images/gallery/mustache1.jpg' alt=''/></a></li>
			<li><a href='gallery-single-post.html'><img src='images/gallery/mustache2.jpg' alt=''/></a></li>
			<li><a href='gallery-single-post.html'><img src='images/gallery/mustache3.jpg' alt=''/></a></li>
			<li><a href='gallery-single-post.html'><img src='images/gallery/mustache4.jpg' alt=''/></a></li>
			<li><a href='gallery-single-post.html'><img src='images/gallery/mustache5.jpg' alt=''/></a></li>
			<li><a href='gallery-single-post.html'><img src='images/gallery/mustache6.jpg' alt=''/></a></li>
			<li><a href='gallery-single-post.html'><img src='images/gallery/mustache7.jpg' alt=''/></a></li>
			<li><a href='gallery-single-post.html'><img src='images/gallery/mustache8.jpg' alt=''/></a></li>
			<li><a href='gallery-single-post.html'><img src='images/gallery/mustache9.jpg' alt=''/></a></li>
		</ul>
	</>

    );
}
}
export default Gallery;