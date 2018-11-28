import React, {Component} from 'react'

export default class NewApptContainer extends Component {
  render(){
    return(
      <div>
      <h1>Book an Appointment!</h1>
        <form>
          <div>
            <label type='clientName'>Name:</label>
            <input type='text' name='clientName' placeholder='Name'/>
          </div>
          <div>
            <label type='stylistName'>Stylist:</label>
            <input type='text' name='stylistName' placeholder='Stylist'/>
          </div>
          <div>
            <label type='date'>Date:</label>
            <input type='text' name='month' placeholder='Month'/>
            <input type='text' name='day' placeholder='Day'/>
          </div>
          <div>
            <label type='service'>Service:</label>
            <input type='text-field' name='service' placeholder='What would you like done?'/>
          </div>
          <div>
            <label type='inspoPic'>Inspiration Pic:</label>
            <input type='text' name='inspoPic' placeholder='Paste a Link to Your Inspo Pic'/>
          </div>
          <input type='submit' value='Book It!'/>
        </form>
      </div>
    )
  }
}
