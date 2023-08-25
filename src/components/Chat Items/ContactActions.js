import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo,faPhone,faUserPlus, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import classes from './ContactActions.module.css'

const ContactActions = () => {
  return (
    <div className={classes.actions}>
      <span>Keshav Saraswat</span>
      <div>
      <FontAwesomeIcon icon={faVideo} style={{color: "#ffffff", cursor:"pointer"}} />
      <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff", cursor:"pointer"}} />
      <FontAwesomeIcon icon={faUserPlus} style={{color: "#ffffff", cursor:"pointer"}} />
      <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff", cursor:"pointer"}} />
      </div>
    </div>
  )
}

export default ContactActions