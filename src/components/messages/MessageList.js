import React from 'react';
import Message from './Message';
import { Link } from 'react-router-dom';

const MessageList = ({ messages }) => (
  <div className='messages-list section'>
    { messages && messages.map(message => {
      return (
        <Link key={message.id} to={'/message/' + message.id}>
        <Message message={message}/>
        </Link>
      )
    })}
  </div>
);

export default MessageList
