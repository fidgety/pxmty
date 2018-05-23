import React from "react";
import {observer} from "mobx-react";
import {string} from "prop-types";
import styled from "styled-components";
import breakpoints from "constants/breakpoints";
import colours from "constants/colours";
import Map from "components/Map";
import GuideList from "components/GuideList";

import Guides from "data/guides";

const GuideDiv = styled.div`
  background: ${colours.grey};
`;

const Guide = ({slug}) => {
  const selectedGuide = Guides.find(d => d.slug === slug.toLowerCase());

  return (
    <GuideDiv className="App">
      <Map />
      <GuideList guides={selectedGuide} />
    </GuideDiv>
  );
};

Guide.propTypes = {
  slug: string,
};

export default observer(Guide);
