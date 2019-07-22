import React from 'react';
import Home from './Home';
import Gallery from './Gallery';
import Blog from './Blog';
import Contact from './Contact';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/common.css';
import '../styles/base.css';

class App extends React.Component {
  render() {
    return (
        <>
            <BrowserRouter>
            <Header />
            <div id="body" class='container'>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/blog/" component={Blog} />
            <Route path="/contact/" component={Contact} />
            </div>
            <Footer />
            </BrowserRouter>
        </>
    );
  }
}
export default App;
