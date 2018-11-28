import React, { Component } from 'react';
import SalonContainer from './components/SalonContainer'
import NavBar from './components/NavBar'
import appointments from './data/appointments'
import users from './data/users'

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

class App extends Component {

  state = {
    users: users,
    appointments:appointments
  }

  render() {
    return (
      <div>
      Hair Salon App 2.0
      <SalonContainer users={this.state.users} appointments={this.state.appointments}/>
      </div>
    );
  }
}

export default App;
