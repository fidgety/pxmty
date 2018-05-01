import React from "react";
import {node} from "prop-types";
import styled from "styled-components";

const PanelWrapper = styled.div`
  margin-bottom: 16px;
`;

const Panel = ({children}) => <PanelWrapper>{children}</PanelWrapper>;

Panel.propTypes = {
  children: node,
};

export default Panel;
