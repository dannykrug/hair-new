import React, {Component} from 'react'
import ApptCard from './ApptCard'

export default class ApptContainer extends Component {
  render(){
    console.log(this.props);

    let appointmentCards = this.props.appointments.map(appointment => <ApptCard key={appointment.client} appointment={appointment} id={appointment.day}/>)

    return(
      <div>
      <h3>Today's Appointments:</h3>
      {appointmentCards}
      </div>
    )
  }
}
