import React, {Component} from 'react'
import './Login.css'

function formatDate(date) {
  return (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear()
}

function formatTime(time){
  let hours = time.getHours()
  let minutes = time.getMinutes()
  hours = hours + 5
  minutes = minutes < 10 ? '0' + minutes : minutes
  return hours + ':' + minutes
}

class ApptDetails extends Component {

  date = new Date(this.props.appointment.appointment.date)
  time = new Date(this.props.appointment.appointment.time)

  render() {
    console.log(this.props);
    return(
      <div className='stylist-wrapper'>
      <div className='stylist-container'>
      <div className='stylist'>
      <div className='signup-fields'>
      <h4>{this.props.appointment.appointment.first_name} {this.props.appointment.appointment.last_name}</h4>
      <p>Date: {formatDate(this.date)}</p>
      <p>Time: {formatTime(this.time)}</p>
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
