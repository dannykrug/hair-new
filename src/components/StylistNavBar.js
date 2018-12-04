import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

const link = {
  width:'100px',
  padding:'12px',
  margin:'0 6px 6px',
  background:'blue',
  textDecoration: 'none',
  color:'white'
}

class StylistNavBar extends Component {
  render () {
    return(
      <div>
      <h2>Stylist Nav</h2>


      <div>
        <NavLink
          to='/stylist-page'
          exact
          style={link}
          activeStyle={{
            background: 'darkGrey'
          }}
        >Home</NavLink>
        <NavLink
          to='/appointments'
          style={link}
          activeStyle={{
            background: 'darkGrey'
          }}
          >Appointments</NavLink>

      </div>
      </div>
    )
  }
}

export default StylistNavBar

// <NavLink
//   to='/newappt'
//   style={link}
//   activeStyle={{
//     background: 'darkGrey'
//   }}
//   >Appointments</NavLink>
