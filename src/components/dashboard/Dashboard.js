import React from 'react';
import Notifications from './Notifications';
import MessageList from '../messages/MessageList.js';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  
  render() {
    const { messages } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <MessageList messages={messages}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.message.messages,
  }
}

export default connect(mapStateToProps)(Dashboard)
