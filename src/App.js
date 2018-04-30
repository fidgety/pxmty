import React from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import Planner from "pages/Planner";

export default () => (
  <Router>
    <div>
      <Route path="/plan/:location/:id" component={Planner} />
      <Route path="/plan/:location" exact>
        {({match}) => {
          if (!match) {
            return null;
          }

          return (
            <Redirect
              to={`/plan/${match.params.location}/${Math.random() * 1000000}`}
            />
          );
        }}
      </Route>
    </div>
  </Router>
);
