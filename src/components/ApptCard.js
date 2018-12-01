import React, {Component} from 'react'

export default class ApptCard extends Component {
  render(){
    console.log('appt card props',this.props.appointment.appointment);
    return(
      <div>
      <h4>{this.props.appointment.appointment.first_name} {this.props.appointment.appointment.last_name}</h4>
      <p>{this.props.appointment.appointment.service}</p>
      </div>
    )
  }
}
