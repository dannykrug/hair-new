import React, {Component} from 'react'

export default class CalendarCard extends Component{
  render(){
    console.log(this.props);
    return(
      <div>
      __________________________________________________
      <h4>Stylist: {this.props.appointment.stylist}</h4>
      <h4>Client: {this.props.appointment.client}</h4>
      <h5>Service: {this.props.appointment.service}</h5>
      <p>Date: {this.props.appointment.month} {this.props.appointment.day} Time: {this.props.appointment.time}</p>
      </div>
    )
  }
}
