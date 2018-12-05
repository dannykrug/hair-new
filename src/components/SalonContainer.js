import React, {Component} from 'react'

import CalendarContainer from './CalendarContainer'
import ApptContainer from './ApptContainer'
import './Login.css'

// <img src={this.props.user.user.pic} alt=''/>
// <h1>{this.props.user.user.name}</h1>
// <CalendarContainer appointments={this.props.appointments}/>
// <ApptContainer appointments={this.props.appointments}/>

export default class SalonContainer extends Component {

  render(){
    console.log('loggedin props', this.props.user.app.user);
    return(
      <div className='stylist-wrapper'>
      <div className='bg-stylist-image'>
      <div className='stylist-container'>
      <div className='stylist'>
      <div className='signup-fields'>
      <img className='picture' src={this.props.user.app.user.user.pic} alt=''/>
      <h1>{this.props.user.app.user.user.first_name} {this.props.user.app.user.user.last_name}</h1>
      <ApptContainer id={this.props.user.app.user} appointments={this.props.user.app.user.appointments}/>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
