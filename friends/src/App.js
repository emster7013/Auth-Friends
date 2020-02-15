import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from '../src/components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends With Auth</h1>
        <ul>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
