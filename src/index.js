import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import NavBar from '../src/components/NavBar'
import NewApptContainer from '../src/components/NewApptContainer'
import Login from '../src/components/Login'


ReactDOM.render((
  <Router>
  <div>
    <NavBar/>
    <Route exact path='/' component={App}/>
    <Route exact path='/newappt' component={NewApptContainer}/>
    <Route exact path='/stylist-login' component={Login}/>
  </div>
  </Router>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
