import React from 'react'
import classes from './Home.module.css'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className={classes.container}>
      <Sidebar/>
      <Chat/>
    </div>
  )
}

export default Home