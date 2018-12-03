import React, {Component} from 'react'

const ApptURL = 'http://localhost:3002/appointments'

export default class NewApptContainer extends Component {

  state={
    first_name:'',
    last_name:'',
    user_id:'',
    date:'',
    time:'',
    service:'',
    inspo_pic:'',
    email:'',
    phone:'',
    approved: false
  }

  changeHandler = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log('submitted state', this.state);
    const first_name = this.state.first_name
    const last_name = this.state.last_name
    const phone = this.state.phone
    const email = this.state.email
    const user_id = this.state.user_id
    const service = this.state.service
    const date = this.state.date
    const time = this.state.time
    const inspo_pic = this.state.inspo_pic
    const approved = this.state.approved
    let data = {first_name, last_name, phone, email, user_id, service, date, time, inspo_pic, approved}
    fetch(ApptURL, {
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(console.log)
    // .then(console.log(this.state))
    // .then(() => {this.props.history.push("/stylist-page")})

    }

  render(){
    console.log(this.state);
    return(
      <div>
      <h1>Book an Appointment!</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label type='first_name'>First Name:</label>
            <input type='text' name='first_name' placeholder='First Name' onChange={this.changeHandler}/>
            <label type='last_name'>Last Name:</label>
            <input type='text' name='last_name' placeholder='Last Name' onChange={this.changeHandler}/>
          </div>
          <div>
            <label type='email'>Email:</label>
            <input type='text' name='email' placeholder='email' onChange={this.changeHandler}/>
          </div>
          <div>
            <label type='phone'>Phone:</label>
            <input type='phone' name='phone' placeholder='phone' onChange={this.changeHandler}/>
          </div>
          <div>
            <label type='user_id'>Stylist:</label>
            <select name='user_id'onChange={this.changeHandler}>
              <option>Select Stylist</option>
              <option value={5}>Franchely</option>
              <option value={6}>Amy</option>
              <option value={7}>Lundy</option>
              <option value={8}>April</option>
            </select>
          </div>
          <div>
            <label type='date'>Date:</label>
            <input type='date' name='date' onChange={this.changeHandler}/>
          </div>
          <div>
            <label type='time'>Time:</label>
            <input type='time' name='time' min='12:00' max='19:00' onChange={this.changeHandler}/>
          </div>
          <div>
            <label type='service'>Service:</label>
            <textarea name='service' placeholder='What would you like done?' onChange={this.changeHandler}/>
          </div>
          <div>
            <label type='inspo_pic'>Inspiration Pic:</label>
            <input type='text' name='inspo_pic' placeholder='Paste a Link to Your Inspo Pic' onChange={this.changeHandler}/>
          </div>
          <input type='submit' value='Book It!'/>
        </form>
      </div>
    )
  }
}
