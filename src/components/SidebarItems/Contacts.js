import React from 'react'
import dp from '../../assets/bohemian-man-with-his-arms-crossed.jpg'
import classes from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <div className={classes.contact}>
        <img src={dp} alt='man' />
        <div>
          <span>Prerit Mishra</span>
          <p>Hey, How are you?</p>
        </div>
      </div>
      <div className={classes.contact}>
        <img src={dp} alt='man' />
        <div>
          <span>Mani Mishra</span>
          <p>Kutte</p>
        </div>
      </div>
      <div className={classes.contact}>
        <img src={dp} alt='man' />
        <div>
          <span>Papa G</span>
          <p>Jaldi ghar aaja</p>
        </div>
      </div>
      <div className={classes.contact}>
        <img src={dp} alt='man' />
        <div>
          <span>Papa G</span>
          <p>Jaldi ghar aaja</p>
        </div>
      </div>
      <div className={classes.contact}>
        <img src={dp} alt='man' />
        <div>
          <span>Papa G</span>
          <p>Jaldi ghar aaja</p>
        </div>
      </div>
      <div className={classes.contact}>
        <img src={dp} alt='man' />
        <div>
          <span>Papa G</span>
          <p>Jaldi ghar aaja</p>
        </div>
      </div>
      <div className={classes.contact}>
        <img src={dp} alt='man' />
        <div>
          <span>Papa G</span>
          <p>Jaldi ghar aaja</p>
        </div>
      </div>
      <div className={classes.contact}>
        <img src={dp} alt='man' />
        <div>
          <span>Keshav</span>
          <p>Kha reh go?</p>
        </div>
      </div>
    </div>
  )
}

export default Contacts