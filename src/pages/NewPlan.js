import React from "react";
import {Redirect} from "react-router-dom";
import {object} from "prop-types";

const GUID = parseInt(Math.random() * 10000000000, 10);

const NewPlan = ({match}) => {
  if (!match) {
    return null;
  }

  return <Redirect to={`/plan/${match.params.location}/${GUID}`} />;
};

NewPlan.propTypes = {
    match: object.isRequired //eslint-disable-line
};

export default NewPlan;
