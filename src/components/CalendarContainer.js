import React, {Component} from 'react'
import CalendarCard from './CalendarCard'

export default class CalendarContainer extends Component{

  render(){

    let calendarCards = this.props.appointments.map(appointment => <CalendarCard key={appointment.client} appointment={appointment}/>)

    return(
      <div>
      <h3>Calendar:</h3>
      {calendarCards}
      </div>
    )
  }
}
