import React from "react";
import styled from "styled-components";

import Calendar from "./calendar";

const TopBar = styled.div`
  width: calc(100% - 64px);
  height: 64px;
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  top: 16px;
  left: 16px;
  padding: 0 16px 16px 16px;
  box-shadow: 0px 0px 8px 2px rgba(100, 100, 100, 0.3);
  z-index: 10;
`;

const DayPickerWrapper = styled.div`
  background: white;
  display: inline-block;
`;

export default () => (
  <TopBar>
    <DayPickerWrapper>
      <Calendar />
    </DayPickerWrapper>
  </TopBar>
);
