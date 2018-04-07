import React from 'react'
import Message from './Message'

const Messages = ({list}) => {
  const messages = list.map(message => <Message content={message}/>)
  return(
    <div>
    {messages}
    </div>
  )
}

export default Messages;
