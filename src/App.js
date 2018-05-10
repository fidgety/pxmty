import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Planner from "./pages/Planner";
import NewPlan from "./pages/NewPlan";
import Home from "./pages/Home";

export default () => (
  <Router>
    <div>
      <Route path="/plan/:location/:id" component={Planner} />
      <Route path="/plan/:location" exact component={NewPlan} />
      <Route path="*" component={Home} />
    </div>
  </Router>
);
