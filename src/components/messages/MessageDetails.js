import React from 'react';

const MessageDetails = (props) => {
  const id = props.match.params.id;

  return (
  <div className="container section message-details">
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">Message Title - {id}</span>
        <p>Lorem Ipsum LKljkdf dfjlafadsfj ads;lf d ldfj la;dfj l;dakfj l;dfsj ldajf </p>
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>Posted By Josh Mabry</div>
        <div>Other info</div>
      </div>
    </div>
  </div>
  );
};

export default MessageDetails;
