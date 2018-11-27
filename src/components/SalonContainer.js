import React, {Component} from 'react'

import CalendarContainer from './CalendarContainer'
import ApptContainer from './ApptContainer'

export default class SalonContainer extends Component {
  render(){
    return(
      <div>
      <img src={this.props.users[0].pic} alt=''/>
      <h1>{this.props.users[0].name}</h1>
      <p>Hours: {this.props.users[0].hours}</p>
      <p>Location: {this.props.users[0].location}</p>
      <CalendarContainer appointments={this.props.appointments}/>
      <ApptContainer appointments={this.props.appointments}/>
      </div>
    )
  }
}
