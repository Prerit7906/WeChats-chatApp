import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../assets/add avatar.png'
import classes from './LoginSignup.module.css'

const Signup = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form className={classes.form}>
        <div className={classes.heading}>
          <div>WeChats</div>
          <span>Register</span>
        </div>
        <input type='text' placeholder='Name' ></input>
        <input type='email' placeholder='E-mail' ></input>
        <input type='password' placeholder='Password' ></input>
        <input style={{display:"none"}} type='file' id='file'></input>
        <label htmlFor='file'>
          <span>
            <img src={avatar} alt='add avatar'/>
          </span>
          Add an avatar
        </label>
        <button type='submit' >Signup</button>
        <hr/>
        <span className={classes.bottomtext}>Already have an account? <NavLink to='/login'>Login</NavLink> </span>
        </form>
      </div>
    </div>
  )
}

export default Signup