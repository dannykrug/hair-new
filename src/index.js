import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootRouter from './RootRouter'
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import StylistRouter from './StylistRouter'
// import NavBar from '../src/components/NavBar'
// import NewApptContainer from '../src/components/NewApptContainer'
// import Login from '../src/components/Login'

ReactDOM.render(
  (<div>
  <Router>
    <div>
    <Route exact path='/' component={RootRouter}/>
    <Route exact path='/stylist' component={StylistRouter}/>
    </div>
  </Router>
  </div>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
