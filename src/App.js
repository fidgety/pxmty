import React from "react";
import styled from "styled-components";
import Map from "./components/map";
import Sidebar from "./components/sidebar";

import store from "./store";

const Main = styled.div`
  background: grey;
`;

export default () => (
  <Main className="App">
    <Map items={store.items} />
    <Sidebar />
  </Main>
);
