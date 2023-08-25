import React from 'react'
import classes from './Chat.module.css';
import ContactActions from './Chat Items/ContactActions';
import Chats from './Chat Items/Chats';
import SendMessage from './Chat Items/SendMessage';

const Chat = () => {
  return (
    <div className={classes.chat}>
      <ContactActions/>
      <Chats/>
      <SendMessage/>
    </div>
  )
}

export default Chat