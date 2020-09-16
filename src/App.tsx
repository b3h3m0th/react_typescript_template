import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";

const pages = {
  home: Home,
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={pages.home} />
        </Switch>
        <div>Simon Ostini React Typescript template</div>
      </Router>
    </div>
  );
};

export default App;
