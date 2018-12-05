import React, {Component} from 'react'
import StylistApptContainer from './StylistApptContainer'
import './Login.css'
import './Appointment.css'

class StylistAppointments extends Component {
  render() {
    console.log('appt page props', this.props);
    return(
      <div className='stylist-wrapper'>
      <div className='bg-stylist-image'>
      <div className='stylist-container'>
      <div className='stylist'>
      <div className='signup-fields'>
      <div className='day-list'>
      <StylistApptContainer appointments={this.props}/>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default StylistAppointments
