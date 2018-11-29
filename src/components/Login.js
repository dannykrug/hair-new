import React, {Component} from 'react'
const UserURL = 'http://localhost:3002/users'

export default class Login extends Component {

  state={
    username:'',
    password:''
  }

  changeHandler = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
  const username = this.state.username
  const password = this.state.password
  console.log('username', username, 'password', password)
  let data = {username, password}
  fetch(UserURL, {
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(console.log)

  }

  render(){
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type='text' name='username' placeholder='username' onChange={this.changeHandler}/>
            <label name='username'>username</label>
          </div>
          <div>
            <input type='password' name='password' placeholder='password' onChange={this.changeHandler}/>
            <label name='password'>password</label>
          </div>
          <input type='submit' value='login'/>
        </form>
      </div>
    )
  }
}
