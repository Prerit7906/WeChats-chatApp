import React from 'react'
import { NavLink} from 'react-router-dom'
import classes from './LoginSignup.module.css'

const Login = () => {
  return (
    <>
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <form className={classes.form}>
        <div className={classes.heading}>
          <div>WeChats</div>
          <span>Login</span>
        </div>
        <input type='email' placeholder='E-mail' ></input>
        <input type='password' placeholder='Password' ></input>
        <span className={classes.forgotpsswd}><NavLink style={{textDecoration:"none", color:'#6C42CA'}} to='/login/recovery'>Forgot your password?</NavLink></span>
        <button type='submit' >Login</button>
        <hr/>
        <span className={classes.bottomtext}>You don't have an account? <NavLink to='/signup'>Signup</NavLink> </span>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login