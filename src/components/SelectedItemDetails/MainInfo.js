/* eslint camelcase:0 */
import React from "react";
import {string} from "prop-types";
import styled from "styled-components";

import Panel from "./Shared/Panel";

const Name = styled.h1`
  font-size: 22px;
  margin: 0 0 4px 0;
`;

const Address = styled.div`
  font-size: 14px;
  font-style: italic;
`;

const Rule = styled.hr`
  border: 2px solid pink;
  margin: 8px 0;
  width: 50%;
`;

const Number = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const A = styled.a`
  color: pink;
`;

const MainInfo = ({name, address, phoneNumber, website}) => (
  <Panel>
    <Name>{name}</Name>
    <Address>{address}</Address>
    <Rule />
    <Number>{phoneNumber}</Number>
    <A href={website} target="_blank">
      {website}
    </A>
  </Panel>
);

MainInfo.propTypes = {
  name: string,
  address: string,
  phoneNumber: string,
  website: string,
};

export default MainInfo;
