import React from "react";
import styled from "styled-components";
import {string} from "prop-types";

const HeaderDiv = styled.div`
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid red;
  padding: 16px;
  background: #eee;
  margin: 16px 0 8px 0;
`;

const Header = props => <HeaderDiv>{props.children}</HeaderDiv>;

Header.propTypes = {
  children: string,
};

export default Header;
