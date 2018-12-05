import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

 const menuitem = {
  listStyle: 'none',
  textDecoration: 'none',
  fontFamily: 'Abel',
  color: '#289bff',
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '0 20px 0 20px'
}

class StylistNavBar extends Component {
  render () {
    return(
      <div>
      <div>
        <NavLink
          to='/stylist-page'
          exact
          style={menuitem}
          activeStyle={{
            color: 'black'
          }}
        >Home</NavLink>
        <NavLink
          to='/appointments'
          style={menuitem}
          activeStyle={{
            color: 'black'
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
