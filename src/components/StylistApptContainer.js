import React, {Component} from 'react'
import ApptCard from './ApptCard'

class StylistApptContainer extends Component{

  render() {
    console.log('main appt cont props', this.props.appointments.appointments);

    let appointmentCards = this.props.appointments.appointments.map(appointment => <ApptCard key={appointment.appointment.id} appointment={appointment} id={appointment.appointment.id}/>)


    return(
      <div>
      {appointmentCards}
      </div>
    )
  }
}

export default StylistApptContainer
