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

export default class NavBar extends Component {
  render(){
    return(
      <div>
      <div>
        <NavLink
          to='/'
          exact
          style={menuitem}
          activeStyle={{
            color: 'black'
          }}
        >Home</NavLink>
        <NavLink
          to='/newappt'
          style={menuitem}
          activeStyle={{
            color: 'black'
          }}
          >Make a New Appointment</NavLink>
      </div>

      </div>
    )
  }
}
