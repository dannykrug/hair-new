import React, {Component} from 'react'
import ApptCard from './ApptCard'
import './Appointment.css'

export default class ApptContainer extends Component {
  render(){
    console.log(this.props);

    let appointmentCards = this.props.appointments.map(appointment => <ApptCard key={appointment.appointment.id} appointment={appointment} id={appointment.appointment.id}/>)

    return(
      <div className='day-list'>
      <h2>Upcoming Appointments:</h2>
      {appointmentCards}
      </div>
    )
  }
}
