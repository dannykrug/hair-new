import React, {Component} from 'react'
import SalonContainer from './SalonContainer'
import {NavLink} from 'react-router-dom'

const link = {
  width:'100px',
  padding:'12px',
  margin:'0 6px 6px',
  background:'blue',
  textDecoration: 'none',
  color:'white'
}

export default class NavBar extends Component {
  render(){
    return(
      <div>
      <h2>NavBar</h2>

      <div>
        <NavLink
          to='/'
          exact
          style={link}
          activeStyle={{
            background: 'darkGrey'
          }}
        >Home</NavLink>
        <NavLink
          to='/newappt'
          style={link}
          activeStyle={{
            background: 'darkGrey'
          }}
          >Make a New Appointment</NavLink>
      </div>

      </div>
    )
  }
}
