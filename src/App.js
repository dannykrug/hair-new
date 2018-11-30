import React, { Component } from 'react';
import SalonContainer from './components/SalonContainer'
import appointments from './data/appointments'
import users from './data/users'
import {BrowserRouter as Router, Route} from 'react-router-dom'

// <SalonContainer users={this.state.users} appointments={this.state.appointments}/>
// <SalonContainer user={this.state.user.user} appointments={this.state.user.appointments}/>



class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
      <SalonContainer user={this.props}/>
      </div>
    );
  }
}

export default App;
