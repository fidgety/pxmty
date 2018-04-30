import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Planner from "pages/Planner";
import NewPlan from "pages/NewPlan";

export default () => (
  <Router>
    <div>
      <Route path="/plan/:location/:id" component={Planner} />
      <Route path="/plan/:location" exact component={NewPlan} />
    </div>
  </Router>
);
