import React, {Component} from 'react'
import Appt from './Appt'

class StylistApptContainer extends Component{

  render() {
    console.log('main appt cont props', this.props.appointments.appointments);

    let appointmentCards = this.props.appointments.appointments.map(appointment => <Appt key={appointment.appointment.id} appointment={appointment} id={appointment.appointment.id}/>)


    return(
      <div>
      <img src='https://i.pinimg.com/originals/54/d2/ca/54d2ca069391336e06df0216a653f366.jpg' alt='nah'/>
      {appointmentCards}
      </div>
    )
  }
}

export default StylistApptContainer
