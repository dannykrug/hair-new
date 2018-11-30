import React, {Component} from 'react'
import App from './App';
import {BrowserRouter as Router, Route, NavLink, withRouter} from 'react-router-dom'
import NavBar from '../src/components/NavBar'
import NewApptContainer from '../src/components/NewApptContainer'
import Login from '../src/components/Login'

const UserURL = 'http://localhost:3002/users'





class RootRouter extends Component {

  state = {
    username:'',
    password:'',
    user:{}
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


  render(){
    return(
      <div>
  <Router>
  <div>
    <NavBar/>
    <Route exact path='/' render={this.NewLogin}/>
    <Route exact path='/stylist-page' render={this.MainApp}/>
    <Route exact path='/newappt' component={NewApptContainer}/>
    <Route exact path='/stylist-login' component={Login}/>
  </div>
  </Router>
  </div>
  )
  }
}

export default RootRouter
