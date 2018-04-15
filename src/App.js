import React from "react";
import styled from "styled-components";
import Map from "./components/map";
import Sidebar from "./components/sidebar";

const Main = styled.div`
  background: grey;
`;

export default () => (
  <Main className="App">
    <Map />
    <Sidebar />
  </Main>
);
