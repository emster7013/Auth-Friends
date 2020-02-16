import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import ProtectedRoute from './components/ProtectedRoute';
import Edit from './components/Edit';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/friends">Friends List</Link>
          </nav>
        <Switch>
        <ProtectedRoute exact path="/friends" component={FriendsList} />
          <ProtectedRoute exact path="/edit-friends" component={Edit} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
