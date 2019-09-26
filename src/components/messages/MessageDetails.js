import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const MessageDetails = (props) => {
const { message, auth } = props;
if (!auth.uid) return <Redirect to='/signin' />
if (message) {
  let date = moment(message.createdAt.toDate()).calendar();
  console.log(date);
  return(
    <div className="container section message-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{message.title}</span>
          <p>{message.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By {message.authorFirstName} {message.authorLastName}</div>
          <div>{date}</div>
        </div>
      </div>
    </div>
  )
}
  return (
    <div className="container center">
      <p>Loading project...</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const messages = state.firestore.data['message-board'];
  const message = messages ? messages[id] : null;
  return {
    message: message,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'message-board'}
  ])
)(MessageDetails);
