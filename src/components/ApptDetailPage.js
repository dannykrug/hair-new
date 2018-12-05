import React, {Component} from 'react'
import ApptDetails from "./ApptDetails"
import './Login.css'

class ApptDetailPage extends Component {

  // const appt = this.props.appointments.find((appointment) => appointment.id === this.props.appointments.appointment.id)
  // <ApptDetails  appt={appt}/>

  render() {
    console.log('detail page props', this.props);

    return(
      <div className='bg-stylist-image'>
        <ApptDetails appointment={this.props.appointment}/>
      </div>
    )
  }
}

export default ApptDetailPage
