import React from "react";
import {Marker} from "react-mapbox-gl";
import {object, string} from "prop-types";
import styled from "styled-components";

const MarkerDiv = styled.div`
  background: lightblue;
  padding: 8px;
  font-size: 16px;
`;

const Item = ({coords, name}) => (
  <Marker
    coordinates={coords.slice()}
    style={{
      zIndex: 2,
    }}
  >
    <MarkerDiv>{name}</MarkerDiv>
  </Marker>
);

Item.propTypes = {
  coords: object, //eslint-disable-line
  name: string,
};

export default Item;
