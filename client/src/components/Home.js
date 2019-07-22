import React from "react";
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
      <>
          {/* <h1>musician Keith</h1>
          <div>
            <img src='images/photographer.jpg' alt='' />
            <div className='article'>
              <h3>We have free</h3>
              <p>Our website</p>
              <h3>We have more</h3>
              <p>Looking for more</p>
              <h3>Be Part of Our Community</h3>
              <p>If you’re experiencing issues and concerns </p>
              <h3>Details</h3>
              <p>Design version</p>
            </div>
          </div> */}
          <h1><span>mustacchio started</span></h1>
		<div>
			<img src="images/photographer.jpg" alt="" />
			<div class="article">
				<h3>We Have Free Templates for Everyone</h3>
				<p>
					Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <a href="http://www.freewebsitetemplates.com/about/terms/">Terms of Use</a>. You can even remove all our links if you want to.
				</p>
				<h3>We Have More Templates for You</h3>
				<p>
					Looking for more templates? Just browse through all our <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> and find what you’re looking for. But if you don’t find any website template you can use, you can try our <a href="http://www.freewebsitetemplates.com/freewebdesign/">Free Web Design</a> service and tell us all about it. Maybe you’re looking for something different, something special. And we love the challenge of doing something different and something special.
				</p>
				<h3>Be Part of Our Community</h3>
				<p>
					If you’re experiencing issues and concerns about this website template, join the discussion on <a href="http://www.freewebsitetemplates.com/forums/">on our forum</a> and meet other people in the community who share the same interests with you.
				</p>
				<h3>Template details</h3>
				<p>
					Design version 2. Code version 1. Website Template details, discussion and updates for this <a href="http://www.freewebsitetemplates.com/discuss/mustacheenthusiast/">Mustache Enthusiast Website Template</a>. Website Template design by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a>. Please feel free to remove some or all the text and links of this page and replace it with your own About content.
				</p>
			</div>
		</div>
        </>
        );
    }
  }
export default Home;