import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <div id='footer'>
          <div>
            <p>&copy; 2019 by Keith. All rights reserved.</p>
            <ul>
              <li><a href='#'><i className="fa fa-facebook" /></a>Facebook</li>
              <li><a href='#'><i className="fa fa-twitter" /></a>Twitter</li>
            </ul>
          </div>
        </div>
    );
}

export default Footer;