import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import InspoPic from './InspoPic'
import ApptDetailPage from './ApptDetailPage'
// import ReactIntl from 'react-intl'

// const FormattedDate = ReactIntl.FormattedDate

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

export default class ApptCard extends Component {

  // ApptPage = () => {
  //   return(
  //   <ApptDetailPage appointments={this.props.appointment.appointment}/>
  // )
  // }

  date = new Date(this.props.appointment.appointment.date)
  time = new Date(this.props.appointment.appointment.time)

  render(){
    console.log('date', formatTime(this.time));
    return(
      <div className='appointment-card'>
        <Link to={`/appointments/${this.props.appointment.appointment.id}`}>
          <div>
          <h4>{this.props.appointment.appointment.first_name} {this.props.appointment.appointment.last_name}</h4>
          <p>{formatDate(this.date)}</p>
          <p>{formatTime(this.time)}</p>
          </div>
        </Link>
      </div>
    )
  }
}
