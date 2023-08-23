import React from 'react'
import classes from './Sidebar.module.css';
import Navbar from './SidebarItems/Navbar';
import Search from './SidebarItems/Search';
import Contacts from './SidebarItems/Contacts';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
        <Navbar/>
        <Search/>
        <hr style={{width:"100%", border:"1px solid #9677DB"}}/>
        <Contacts/>
    </div>
  )
}

export default Sidebar