import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id='header'>
            {/* <img href='index.html' className='logo'/> */}
            <img src='images/logo.jpg' alt=''/>
            <ul id='navigation'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Header;