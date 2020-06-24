import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/home';
import Login from './views/login';
import Conversation from './views/conversation';
import Signup from './views/signup';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/conversation/:conversationId">
          <Conversation />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
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
