import React, {Component} from 'react'
import App from './App';
import {BrowserRouter as Router, Route, NavLink, withRouter} from 'react-router-dom'
import NavBar from '../src/components/NavBar'
import Login from '../src/components/Login'
import NewApptContainer from '../src/components/NewApptContainer'
import LandingPage from '../src/components/LandingPage'
import ApptDetailPage from '../src/components/ApptDetailPage'
import Thanks from '../src/components/Thanks'

const UserURL = 'http://localhost:3002/users'





class RootRouter extends Component {


  render(){
    return(
      <div>
  <Router>
  <div>
    <NavBar/>
    <Route exact path='/' component={LandingPage}/>
    <Route exact path='/newappt' component={NewApptContainer}/>
    <Route exact path='/thanks' component={Thanks}/>
  </div>
  </Router>
  </div>
  )
  }
}

export default RootRouter
