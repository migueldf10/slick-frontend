import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/home';
import Login from './views/login';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
