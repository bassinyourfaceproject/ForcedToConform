import React from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions';

class Blog extends React.Component {
	componentDidMount() {
		document.querySelector('body').className = 'blog';
		this.props.fetchBlogs();
	}

	componentWillUnmount() {
		document.querySelector('body').className = '';
	}

	renderBlogList = () => {
		if (this.props.blogs === null) {
			return <div>Loading</div>;
		}
		return this.props.blogs.map(blog => {
			console.log(blog);
			return (
				<li>
					<div className="blog-thumbnail">
						<img src={blog.acf.image.url} />
					</div>
					<div className="blog-details">
						<h3>{blog.acf.title}</h3>
						<p>{blog.acf.content}</p>
					</div>
				</li>
			);
		});
	};

	render() {
		if (!this.props.blogs) {
			return <div>Loading</div>;
		} else {
			return (
				<>
					<div>
						<h1>
							<span>blog</span>
						</h1>
						<div>
							<ul>{this.renderBlogList()}</ul>
						</div>
					</div>
				</>
			);
		}
	}
}

const mapToStateProps = (state, ownProps) => {
	console.log(state, ownProps);
	return {
		blogs: Object.values(state.blogs)
	};
};

export default connect(
	mapToStateProps,
	{ fetchBlogs }
)(Blog);
