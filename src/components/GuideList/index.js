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

const Heading = styled.h2``;

const DescriptionDiv = styled.div`
  padding: 10px 0;
`;

const GuideList = ({selectedGuide}) => {
  const list = selectedGuide.items.map(guide => (
    <Card {...guide} key={guide.gid} />
  ));

  return (
    <GuideDiv>
      <Heading>{selectedGuide.name}</Heading>
      <DescriptionDiv>{selectedGuide.description}</DescriptionDiv>
      {list}
    </GuideDiv>
  );
};

GuideList.propTypes = {
    selectedGuide: object,  //eslint-disable-line
};

export default GuideList;
