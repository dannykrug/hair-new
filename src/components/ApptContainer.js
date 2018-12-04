import React, {Component} from 'react'
import ApptCard from './ApptCard'

export default class ApptContainer extends Component {
  render(){
    console.log(this.props);

    let appointmentCards = this.props.appointments.map(appointment => <ApptCard key={appointment.appointment.id} appointment={appointment} id={appointment.appointment.id}/>)

    return(
      <div>
      <h3>Today's Appointments:</h3>
      {appointmentCards}
      </div>
    )
  }
}
