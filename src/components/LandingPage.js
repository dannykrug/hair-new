import React, {Component} from 'react'

import {Link, Router} from 'react-router-dom'

class LandingPage extends Component {
  render() {
    return(
      <div>
      <Link to="/newappt" className="secondary-btn">Book an Appointment!</Link>
      </div>
    )
  }
}

export default LandingPage