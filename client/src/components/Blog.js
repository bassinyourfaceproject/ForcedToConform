import React from 'react';

class Blog extends React.Component {
    componentDidMount() {
		document.querySelector('body').className = 'blog';
	}

	componentWillUnmount() {
		document.querySelector('body').className = '';
	}
render() {
return (
    <>
        <h1><span>blog</span></h1>
            <div>
                <ul>
                    <li>
                        <div>
                            <h3>why i grew a mustache</h3>
                            <p>Our website checked for quality</p>
                            {/* <a href='blog-single-post.html' class='more'>read this</a> */}
                        </div>
                    </li>
                    <li>
                        {/* <a href='blog-single-post.html' className='figure'><img src='images/in-the-country.jpg' alt=''/></a> */}
                        <div>
                            <h3>in the country</h3>
                            <p>Our website </p>
                        {/* <a href='blog-single-post.html' className='more'>read this</a> */}
                        </div>
                    </li>
                    <li>
                        {/* <a href='blog-single-post.html' className='figure'><img src='images/mustache-brothers.jpg' alt=''/></a> */}
                        <div>
                            <h3>the mustache brothers</h3>
                            <p>Our website</p>
                            {/* <a href='blog-single-post.html' className='more'>read this</a> */}
                        </div>
                    </li>
                </ul>
            </div>
    </>

);
}
}
export default Blog;