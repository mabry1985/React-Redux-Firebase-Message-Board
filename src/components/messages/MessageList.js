import React from 'react';
import Message from './Message';

const MessageList = ({ messages }) => (
  <div className='messages-list section'>
    { messages && messages.map(message => {
      return (
        <Message message={message} key={message.id} />
      )
    })}
  </div>
);

export default MessageList
