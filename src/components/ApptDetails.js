import React, {Component} from 'react'

class ApptDetails extends Component {
  render() {
    console.log(this.props);
    return(
      <div>
      <h4>{this.props.appt.appointment.first_name} {this.props.appt.appointment.last_name}</h4>
      <p>Date: {this.props.appt.appointment.date}</p>
      <p>Time: {this.props.appt.appointment.time}</p>
      <p>Service: {this.props.appt.appointment.service}</p>
      <img src={this.props.appt.appointment.inspo_pic} alt=''/>
      </div>
    )
  }
}

export default ApptDetails

// <h4>{this.props.appointment.appointment.first_name} {this.props.appointment.appointment.last_name}</h4>
// <p>Date: {this.props.appointment.appointment.date}</p>
// <p>Time: {this.props.appointment.appointment.time}</p>
// <p>Service: {this.props.appointment.appointment.service}</p>
// <img src={this.props.appointment.appointment.service} alt=''/>
