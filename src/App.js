import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import MessageDetails from './components/messages/MessageDetails';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateMessage from './components/messages/CreateMessage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/message/:id' component={MessageDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateMessage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
