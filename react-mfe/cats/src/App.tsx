import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router } from "react-router-dom";
import "./App.css";
import GreetingCat from "./GreetingCat";
import RandomCat from "./RandomCat";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/" component={RandomCat} />
      <Route exact path="/cat/:greeting" component={GreetingCat} />
    </Router>
  );
}

export default App;
