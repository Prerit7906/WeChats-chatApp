import React from 'react'
import error404 from '../assets/error 404.png'

const NotFound = () => {
  return (
    <>
    <div className='notfoundtext'>Page Not Found</div>
    <img className='notfoundimage' src={error404} alt='error 404'></img>
    </>
  )
}

export default NotFound