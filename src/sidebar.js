import React from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  width: 300px;
  height: 100%;
  position: absolute;
  background: grey;
  top: 0;
  left: 0;
  opacity: 0.9;
`;

export default () => <Sidebar />;
