import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import RandomCat from "./RandomCat";
import GreetingCat from "./GreetingCat";

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
