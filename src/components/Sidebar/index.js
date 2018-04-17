import React from "react";
import styled from "styled-components";

import Itinerary from "./Itinerary";

const Sidebar = styled.div`
  width: 300px;
  height: calc(100% - 122px);
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  top: 86px;
  left: 16px;
  overflow: scroll;
  padding: 0 16px 16px 16px;
  box-shadow: 0px 0px 8px 2px rgba(100, 100, 100, 0.3);
  z-index: 10;
`;

export default () => (
  <Sidebar>
    <Itinerary />
  </Sidebar>
);
