import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthPage from "./Pages/AuthPage/AuthPage";
import UserPage from './Pages/UserPage/UserPage';
import Page404 from "./Pages/Page404/Page404";
import PostPage from "./Pages/PostPage/PostPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/news/:id' component={PostPage}/>
          <Route path='/news' component={UserPage}/>
          <Route exact path='/' component={AuthPage}/>
          <Route component={Page404}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
