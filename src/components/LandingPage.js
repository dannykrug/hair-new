import React, {Component} from 'react'

import {Link, Router} from 'react-router-dom'

import './LandingPage.css'

class LandingPage extends Component {
  render() {
    return(
      <div className='landing-wrapper'>
      <div class='bg-image'>
      <div class='container'>

      <Link to="/newappt" className="secondary-btn">Book an Appointment!</Link>

      </div>
      </div>
      </div>
    )
  }
}

export default LandingPage
