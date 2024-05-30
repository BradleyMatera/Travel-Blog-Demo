import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import BookingForm from './components/BookingForm';
import Destinations from './components/Destinations';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/booking" component={BookingForm} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
