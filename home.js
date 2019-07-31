import React from "react";
import './Home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    document.querySelector('body').className = 'home';
  }
  componentWillUnmount() {
    document.querySelector('body').className = '';
  }

  render() {
    return (
      <div className="all">
        <div className="head"></div>

        <div className="box">
          <h1>About</h1>

          <div className='top'>
            <div className="topleft">
              <h2>FORCEDTOCONFORM</h2>
              <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
            <div className="topright">
              <img src="images/gallery/photo5.png" alt="" />
            </div>
          </div>

          <div className='down'>
            <div className="downleft">
              <img src="images/gallery/photo5.png" alt="" />
            </div>
            <div className="downright">
              <h2>MORE</h2>
              <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
          </div>
        </div>
</div>
        );
      }
    }
export default Home;
