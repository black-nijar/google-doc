import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import TextEditor from "./TextEditor";
import { v4 as uuid } from "uuid";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/document/${uuid()}`} />
        </Route>
        <Route path="/document/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
