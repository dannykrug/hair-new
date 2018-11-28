import React, {Component} from 'react'

export default class NavBar extends Component {
  render(){
    return(
      <div>
      <h2>NavBar</h2>
      <form>
      <input type='text' name='name' placeholder='name'/>
      <input type='text' name='password' placeholder='password'/>
      <input type='submit' name='submit'/>
      </form>
      </div>
    )
  }
}
