import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { faPaperclip,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import classes from './SendMessage.module.css'

const SendMessage = () => {
  return (
    <div className={classes.sendmssg}>
      <form>
        <input type='text' placeholder='Type Something...'></input>
        <div className={classes.formright}>

        <div >
        <input style={{display:"none"}} type="file" name="fileUpload" id="fileUpload"/>
        <label htmlFor='fileUpload'><FontAwesomeIcon className={classes.icon} icon={faPaperclip} style={{color: "#b7b7b7",cursor:"pointer"}} /></label>
        </div>
        <div >
        <input style={{display:"none"}} type="file" name="imageUpload" id="imageUpload" accept=".jpeg, .jpg"/>
        <label htmlFor='imageUpload'><FontAwesomeIcon className={classes.icon} icon={faImage} style={{color: "#b7b7b7",cursor:"pointer"}} /></label>
        </div>
        <button type='submit'>
          <FontAwesomeIcon icon={faPaperPlane} style={{color: "#fff",height:"1.2rem"}} />
        </button>
        </div>
      </form>
    </div>
  )
}

export default SendMessage