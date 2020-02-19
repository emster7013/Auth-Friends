import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import ProtectedRoute from './components/ProtectedRoute';
import {FriendsContext} from './context/FriendsContext';

import './App.css';

function App() {
  const [Friends, setFriends] = useState([]);
  return (
    <Router>
      <div className="App">
        <FriendsContext.Provider value = {{Friends, setFriends}}>
        <nav>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/friends">Friends List</Link>
          </nav>
          
        <Switch>
        <ProtectedRoute exact path="/friends" component={FriendsList} />
          {/* For some reason cannot figure out how to edit in our friends list */}
          <Route path="/login" component={Login} />
          
        </Switch>
        </FriendsContext.Provider>
      </div>
    </Router>
  );
}

export default App;
