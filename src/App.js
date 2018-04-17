import React from "react";
import styled from "styled-components";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import DevTools from "mobx-react-devtools";

const Main = styled.div`
  background: grey;
`;

export default () => (
  <Main className="App">
    <DevTools />
    <Map />
    <Sidebar />
    <TopBar />
  </Main>
);
