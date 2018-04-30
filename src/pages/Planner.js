import React from "react";
import styled from "styled-components";
import Map from "components/Map";
import Sidebar from "components/Sidebar";
import SelectedItemDetails from "components/SelectedItemDetails";
// import TopBar from "./components/TopBar";
import DevTools from "mobx-react-devtools";

const Planner = styled.div`
  background: grey;
`;

export default () => (
  <Planner className="App">
    <DevTools />
    <Map />
    <Sidebar />
    <SelectedItemDetails />
  </Planner>
);
