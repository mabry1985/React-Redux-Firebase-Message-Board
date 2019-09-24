import React from 'react';

const Message = ({ message }) => (
  <div className='card z-depth-0 project-summary'>
    <div className='card-content grey-text text-darken-3'>
      <span className='card-title'>{message.title}</span>
      <p>Posted by Josh Mabry</p>
      <p className='grey-text'>September 22, 2:30pm</p>
    </div>
  </div>
);

export default Message;
