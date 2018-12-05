import React, {Component} from 'react'
import {Link, Route, Redirect, withRouter} from 'react-router-dom';
import './Login.css'

const UserURL = 'http://localhost:3002/users'

class Login extends Component {

  // changeHandler = (e)=>{
  //   this.setState({
  //     [e.target.name]:e.target.value
  //   })
  // }
  //
  // submitHandler = (e) => {
  //   e.preventDefault()
  // const username = this.state.username
  // const password = this.state.password
  // console.log('username', username, 'password', password)
  // let data = {username, password}
  // fetch(UserURL, {
  //   method:"POST",
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })
  // .then(res => res.json())
  // .then(console.log)
  // .then(res => this.setState({
  //     user: res
  //   }))
  // // .then(console.log(this.state))
  // .then(() => {this.props.history.push("/stylist-page")})
  //
  // }

  pageChangeSubmit = (e) => {
    e.preventDefault()
    this.props.submitHandler()
    this.props.history.push("/stylist-page")
  }

  render(){
    return(
      <div className='login-wrapper'>
      <div className='bg-stylist-image'>
      <div class='login-container'>
      <div className='login'>
        <form className='signup-fields' onSubmit={this.pageChangeSubmit}>
          <div>
            <input type='text' name='username' placeholder='username' onChange={this.props.changeHandler}/>
            <label name='username'>username</label>
          </div>
          <div>
            <input type='password' name='password' placeholder='password' onChange={this.props.changeHandler}/>
            <label name='password'>password</label>
          </div>
          <input type='submit' value='login'/>
        </form>
        </div>
        </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)
