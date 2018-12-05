import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import InspoPic from './InspoPic'
import ApptDetailPage from './ApptDetailPage'
// import ReactIntl from 'react-intl'

// const FormattedDate = ReactIntl.FormattedDate

export default class ApptCard extends Component {

  // ApptPage = () => {
  //   return(
  //   <ApptDetailPage appointments={this.props.appointment.appointment}/>
  // )
  // }

  render(){
    console.log('appt card props',this.props.appointment.appointment);
    return(
      <div className='appointment-card'>
        <Link to={`/appointments/${this.props.appointment.appointment.id}`}>
          <div>
          <h4>{this.props.appointment.appointment.first_name} {this.props.appointment.appointment.last_name}</h4>
          <p>{this.props.appointment.appointment.date}</p>
          <p>{this.props.appointment.appointment.time}</p>
          </div>
        </Link>
      </div>
    )
  }
}
