import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Planner from "./pages/Planner";
import NewPlan from "./pages/NewPlan";
import Home from "./pages/Home";

export default () => (
  <Router>
    <Switch>
      <Route path="/plan/:id" component={Planner} />
      <Route path="/plan" exact component={NewPlan} />
      <Route path="*" component={Home} />
    </Switch>
  </Router>
);
