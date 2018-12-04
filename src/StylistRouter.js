import React, {Component} from 'react'
import {BrowserRouter as Router, Route, NavLink, withRouter} from 'react-router-dom'
import Login from '../src/components/Login'
import ApptDetailPage from '../src/components/ApptDetailPage'
import App from './App';
import StylistNavBar from '../src/components/StylistNavBar'
import StylistAppointments from '../src/components/StylistAppointments'


const UserURL = 'http://localhost:3002/users'


class StylistRouter extends Component {

  state = {
    username:'',
    password:'',
    user:{
      appointments: [{
        appointment: {
        approved: true,
        created_at: "",
        date: '',
        email: "",
        first_name: "",
        id: 1,
        inspo_pic: "",
        last_name: "",
        phone: "",
        service: "",
        time: "",
        updated_at: "",
        user_id:1},
        user:{}
      }],
      user:
      {admin: true,
      apprentice: false,
      created_at: "",
      first_name: "",
      id: 5,
      last_name: "",
      password: "",
      pic: "",
      updated_at: "",
      username: ""}
    }
  }

  changeHandler = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = () => {
  const username = this.state.username
  const password = this.state.password
  console.log('username', username, 'password', password)
  let data = {username, password}
  fetch(UserURL, {
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => this.setState({
      user: res
    }))
  // .then(console.log(this.state))
  // .then(() => {this.props.history.push("/stylist-page")})

  }

  NewLogin = () => {
    console.log('newloginstate', this.state);
    return(
    <Login login={this.state} submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>
  )
  }

  MainApp = () => {
    console.log('mainappstate', this.state);
    return(
      <div>
    <App app={this.state}/>
    </div>
    )
  }

  ApptPage = (e) => {
    const appt = this.state.user.appointments.find((appointment) => appointment.appointment.id === parseInt(e.match.params.id))
    console.log('appt page props', e.match.params.id);
    console.log(appt)
    return(
    <ApptDetailPage appointment={appt}/>
  )
  }

  render(){
    console.log(this.state);
    return(
      <div>
      <Router>
      <div>
      <StylistNavBar/>
      <Route exact path='/stylist' render={this.NewLogin}/>
      <Route exact path='/stylist-page' render={this.MainApp}/>
        <Route exact path='/appointments/:id' render={this.ApptPage}/>
      <Route exact path ='/appointments' component={StylistAppointments}/>
      </div>
      </Router>
      </div>
    )
  }
}

export default StylistRouter
