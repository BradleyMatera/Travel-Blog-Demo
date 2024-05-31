import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Blog from './pages/Blog';
import BookingForm from './pages/BookingForm';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/tours" component={Destinations} />
          <Route path="/blog" component={Blog} />
          <Route path="/book" component={BookingForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
