import React, { Component } from 'react';
import SalonContainer from './components/SalonContainer'
import appointments from './data/appointments'
import users from './data/users'

import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  state = {
    users: users,
    appointments:appointments
  }

  render() {
    return (
      <div>
      <SalonContainer users={this.state.users} appointments={this.state.appointments}/>
      </div>
    );
  }
}

export default App;
