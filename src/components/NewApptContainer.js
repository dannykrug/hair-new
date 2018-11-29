import React, {Component} from 'react'

export default class NewApptContainer extends Component {

  state={
    clientName:'',
    stylistName:'',
    month:'',
    day:'',
    service:'',
    inspoPic:''
  }

  changeHandler = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render(){
    console.log(this.state);
    return(
      <div>
      <h1>Book an Appointment!</h1>
        <form>
          <div>
            <label type='clientName'>Name:</label>
            <input type='text' name='clientName' placeholder='Name' onChange={this.changeHandler}/>
          </div>
          <div>
            <label type='stylistName'>Stylist:</label>
            <input type='text' name='stylistName' placeholder='Stylist' onChange={this.changeHandler}/>
          </div>
          <div>
            <label type='date'>Date:</label>
            <input type='text' name='month' placeholder='Month' onChange={this.changeHandler}/>
            <input type='text' name='day' placeholder='Day' onChange={this.changeHandler}/>
          </div>
          <div>
            <label type='service'>Service:</label>
            <input type='text-field' name='service' placeholder='What would you like done?' onChange={this.changeHandler}/>
          </div>
          <div>
            <label type='inspoPic'>Inspiration Pic:</label>
            <input type='text' name='inspoPic' placeholder='Paste a Link to Your Inspo Pic' onChange={this.changeHandler}/>
          </div>
          <input type='submit' value='Book It!'/>
        </form>
      </div>
    )
  }
}
