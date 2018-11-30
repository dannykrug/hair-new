import React, {Component} from 'react'

import CalendarContainer from './CalendarContainer'
import ApptContainer from './ApptContainer'

// <img src={this.props.user.user.pic} alt=''/>
// <h1>{this.props.user.user.name}</h1>
// <CalendarContainer appointments={this.props.appointments}/>
// <ApptContainer appointments={this.props.appointments}/>

export default class SalonContainer extends Component {


  render(){
    console.log('loggedin props', this.props.user.app);
    return(
      <div>
      {this.props.user.app.username}
      </div>
    )
  }
}
