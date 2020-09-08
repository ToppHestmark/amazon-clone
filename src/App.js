import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Router path="/login">
            <h1>Login Page</h1>
          </Router>
          <Route path="/">
            <h1>Home Page!!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


 {/* Localhost.com */}
      {/* Localhost.com/checkout */}
      {/* Localhost.com/login */}