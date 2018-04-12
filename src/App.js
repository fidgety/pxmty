import React from "react";
import styled from "styled-components";
import Map from "./map";
import Sidebar from "./sidebar";

const Main = styled.div`
  background: grey;
`;

export default () => (
  <Main className="App">
    <Map />
    <Sidebar />
  </Main>
);
