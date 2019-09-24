import React from 'react';
import Notifications from './Notifications';
import MessageList from '../messages/MessageList.js';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <MessageList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
