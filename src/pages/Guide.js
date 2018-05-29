import React from "react";
import {object} from "prop-types";
import styled from "styled-components";
import breakpoints from "constants/breakpoints";
import colours from "constants/colours";
import Map from "components/Map";
import GuideList from "components/GuideList";
import store from "store";

import Guides from "data/guides";

const GuideDiv = styled.div`
  background: ${colours.grey};
`;

const Guide = ({match}) => {
  const {slug} = match.params;
  const selectedGuide = Guides.find(d => d.slug === slug.toLowerCase());

  return (
    <GuideDiv className="App">
      <Map />
      <GuideList selectedGuide={selectedGuide} />
    </GuideDiv>
  );
};

Guide.propTypes = {
  match: object //eslint-disable-line
};

export default Guide;
