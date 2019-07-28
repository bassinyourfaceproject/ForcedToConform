import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div id="footer">
			<div>
				<p>&copy; 2019 by Keith. All rights reserved.</p>
				<ul>
					<li>
						<Link to="/">
							<i className="fa fa-facebook" />
						</Link>
						Facebook
					</li>
					<li>
						<Link to="/">
							<i className="fa fa-twitter" />
						</Link>
						Twitter
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
