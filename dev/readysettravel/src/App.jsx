import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Destinations from './components/Destinations';
import Blog from './components/Blog';
import Book from './components/Book';
import Tours from './components/Tours';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/blog" component={Blog} />
          <Route path="/book" component={Book} />
          <Route path="/tours" component={Tours} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
