import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'

class login extends Component {
  constructor(){
    super()
    this.state = {
      employeeNumber: '',
      firstNumber: '',
      lastNumber: '',
      username: '',
      email: '',
      password: '',
    }
    this.changeEmployeeNumber = this.changeEmployeeNumber.bind(this)
    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeLastName = this.changeLastName.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  changeEmployeeNumber(event){
    this.setState({
      employeeNumber:event.target.value
    })
  }
  changeFirstName(event){
    this.setState({
      firstName:event.target.value
    })
  }
  changeLastName(event){
    this.setState({
      lastName:event.target.value
    })
  }
  changeUsername(event){
    this.setState({
      username:event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  
  onSubmit(event){
    event.preventDefault()

    const registered = {
      employeeNumber: this.state.employeeNumber,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:4000/app/signup', registered)
      .then(response => console.log(response.data))

    this.setState({
      employeeNumber: '',
      firstNumber: '',
      lastNumber: '',
      username: '',
      email: '',
      password: '',
    })

    alert('Signed-up Successfully')
  }

  render(){
    return (
      <div id="Login_container">
          <div className="login-logo">
              <h1 id='welcome-text'>Welcome!</h1>
              <p id='signin-text'>Please sign-in to continue</p>
          </div>
          <div id="login-details">
              <form>
                  <input type="text" name='username' placeholder='Username'/>
                  <input type="password" name='password' placeholder='Password'/>
                  <a href="#">Forgot Password?</a>
                  <button type='sumbit' id='login-btn'>Sign-In</button>
                  <p>Doesn't have an account?<a href="#" id='goto-register' onClick={toggle}>Sign-up</a></p>
              </form>
          </div>
          <div id="registration-details">
              <form onSubmit={this.onSubmit}>
                  <input type="text" name='ID' placeholder='Employee Number'
                   onChange={this.changeEmployeeNumber}
                   value={this.state.employeeNumber}
                   />
                  <input type="text" name='firstname' placeholder='First Name'
                  onChange={this.changeFirstName}
                  value={this.state.firstName}/> 
                  <input type="text" name='lastname' placeholder='Last Name'
                  onChange={this.changeLastName}
                  value={this.state.lastName}/>
                  <input type="email" name='email' placeholder='Email Address'
                  onChange={this.changeEmail}
                  value={this.state.email}/>
                  <input type="text" name='username' placeholder='Username'
                  onChange={this.changeUsername}
                  value={this.state.username}/>
                  <input type="password" name='password' placeholder='Password'
                  onChange={this.changePassword}
                  value={this.state.password}/>
                  <input type='submit' id='register-btn'value="Sign-Up"/>
                  <p>Want to Sign-in?<a href="#" id='goto-login' onClick={toggle2}>Sign-in</a></p>
              </form>
          </div>
      </div>
    )
    function toggle()
  {
    var container = document.getElementById("Login_container").style.cssText='max-height:840px;';
    var signup = document.getElementById("login-details").style.cssText='display:none;';
    var signin = document.getElementById("registration-details").style.cssText='display:block';
    var welcome =document.getElementById("welcome-text").textContent='Register Here!';
    var label2 = document.getElementById("signin-text").textContent='Fill up all the forms';
  }
  function toggle2(){
    var container = document.getElementById("Login_container").style.cssText='max-height:650px;';
    var signup = document.getElementById("login-details").style.cssText='display:block'
    var signin = document.getElementById("registration-details").style.cssText='display:none';
    var welcome =document.getElementById("welcome-text").textContent='Welcome!';
    var label2 = document.getElementById("signin-text").textContent='Please sign-in to continue';
  }
  }
  
  
  
}

export default login
