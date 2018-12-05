import React, {Component} from 'react'
import './Login.css'

class ApptDetails extends Component {
  render() {
    console.log(this.props);
    return(
      <div className='stylist-wrapper'>
      <div className='stylist-container'>
      <div className='stylist'>
      <div className='signup-fields'>
      <h4>{this.props.appointment.appointment.first_name} {this.props.appointment.appointment.last_name}</h4>
      <p>Date: {this.props.appointment.appointment.date}</p>
      <p>Time: {this.props.appointment.appointment.time}</p>
      <p>Service: {this.props.appointment.appointment.service}</p>
      <img className='picture' src={this.props.appointment.appointment.inspo_pic} alt=''/>
      </div>
      </div>
      </div>
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
