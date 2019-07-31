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
                    <a className='figure'><img src='images/gallery/photo.jpg' alt=''/></a>
                        <div>
                            <h3>How I became a musician</h3>
                            <p>aa</p>
                        </div>
                    </li>
                    <li>
                    <a className='figure'><img src='images/gallery/photo.jpg' alt=''/></a>
                        <div>
                            <h3>Piano concerts</h3>
                            <p>aaaa </p>
                        </div>
                    </li>
                    <li>
                    <a className='figure'><img src='images/gallery/photo.jpg' alt=''/></a>
                        <div>
                            <h3>Guitar concerts</h3>
                            <p>aaaaaaa</p>
                        </div>
                    </li>
                </ul>
            </div>
    </>

);
}
}
export default Blog;
