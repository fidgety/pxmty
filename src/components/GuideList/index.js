import React from "react";
import styled from "styled-components";
import Card from "./Card";
import {object} from "prop-types";

const GuideDiv = styled.div`
  width: 300px;
  height: calc(100% - 48px);
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  top: 16px;
  left: 16px;
  overflow: scroll;
  padding: 0 16px 16px 16px;
  z-index: 10;
`;

const GuideList = ({guides}) => {
  const list = guides.items.map(guide => <Card {...guide} key={guide.gid} />);

  return <GuideDiv>{list}</GuideDiv>;
};

GuideList.propTypes = {
  guides: object,  //eslint-disable-line
};

export default GuideList;
