import React from 'react';
import Notifications from './Notifications';
import MessageList from '../messages/MessageList.js';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
class Dashboard extends React.Component {
  
  render() {
    const { messages, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <MessageList messages={messages}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.firestore.ordered['message-board'],
    auth: state.firebase.auth,
    notifications: state.firestore.ordered['notifications'],
  }
}

export default compose (
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'message-board', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)
