import React from 'react'
import { NavLink} from 'react-router-dom'
import dp from '../../assets/bohemian-man-with-his-arms-crossed.jpg'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <span >WeChats</span>
      <div>
        <img src={dp} alt='DP'></img>
        <p>Harigopal Sar...</p>
        <NavLink to='./login'>Logout</NavLink>
      </div>
    </div>
  )
}

export default Navbar