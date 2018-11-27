import React, {Component} from 'react'

export default class ApptCard extends Component {
  render(){
    return(
      <div>
      <p>{this.props.appointment.stylist}</p>
      <p>{this.props.appointment.service}</p>
      <p>{this.props.appointment.time}</p>
      </div>
    )
  }
}
