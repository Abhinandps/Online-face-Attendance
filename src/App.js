import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Features from './components/pages/features';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Contact' component={Contact} />
          <Route path='/features' component={Features} />
          <Route path='/Login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
