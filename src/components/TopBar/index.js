import React from "react";
import styled from "styled-components";

const TopBar = styled.div`
  width: calc(100% - 32px);
  height: 64px;
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  top: 16px;
  left: 16px;
  box-shadow: 0px 0px 8px 2px rgba(100, 100, 100, 0.3);
  z-index: 10;
`;

export default () => <TopBar />;
