import React from "react";
import styled from "styled-components";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";

const Main = styled.div`
  background: grey;
`;

export default () => (
  <Main className="App">
    <Map />
    <Sidebar />
  </Main>
);
