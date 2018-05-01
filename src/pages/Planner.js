import React from "react";
import {object} from "prop-types";
import styled from "styled-components";
import Map from "components/Map";
import Sidebar from "components/Sidebar";
import SelectedItemDetails from "components/SelectedItemDetails";
// import TopBar from "./components/TopBar";
import DevTools from "mobx-react-devtools";
import store from "store";

const PlannerDiv = styled.div`
  background: grey;
`;

const Planner = ({match}) => {
  store.getSavedState(match.params.id);

  return (
    <PlannerDiv className="App">
      <DevTools />
      <Map />
      <Sidebar />
      <SelectedItemDetails />
    </PlannerDiv>
  );
};

Planner.propTypes = {
    match: object //eslint-disable-line
};

export default Planner;
