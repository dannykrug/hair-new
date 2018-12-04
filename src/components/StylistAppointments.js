import React, {Component} from 'react'
import StylistApptContainer from './StylistApptContainer'

class StylistAppointments extends Component {
  render() {
    console.log('appt page props', this.props);
    return(
      <div>
      <img src='https://engl4790writer.trubox.ca/wp-content/uploads/sites/22/2015/12/ask-you-a-few-questions.jpg' alt='butt talk'/>
      <StylistApptContainer appointments={this.props}/>
      </div>
    )
  }
}

export default StylistAppointments
