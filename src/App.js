import React from "react";
import { Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import TopBar from "./TopBar";
import { createBrowserHistory as createHistory } from "history";
import "./App.css";
import SearchPage from "./SearchPage";
const history = createHistory();

function App({ location }) {

  return (
    <div className="App">
      <Router history={history}>
        <TopBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/" exact component={SearchPage} />
      </Router>
    </div>
  );
}

export default App;
