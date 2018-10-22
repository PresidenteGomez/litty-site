import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Mission from './pages/Mission';
import Properties from './pages/Properties';
import Services from './pages/Services';
import SystemType from './pages/SystemType';
import Why from './pages/Why';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <Router>
  <div>
  <Header />
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/contact" component={Contact} />
  <Route exact path="/mission" component={Mission} />
  <Route exact path="/properties" component={Properties} />
  <Route exact path="/services" component={Services} />
  <Route exact path="/system-type" component={SystemType} />
  <Route exact path="/why" component={Why} />
  </Switch>
      <Footer />
  </div>
  </Router>
)

export default App;
