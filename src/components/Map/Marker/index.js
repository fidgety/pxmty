import React from "react";
import {Marker} from "react-mapbox-gl";
import {object, string, bool, func} from "prop-types";
import styled from "styled-components";

const MarkerDiv = styled.div`
  background: ${props => (props.hovered ? "pink" : "white")};
`;

const Item = ({coords, name, id, hovered, hoverItem, leaveItem}) => (
  <Marker coordinates={coords.slice()}>
    <MarkerDiv
      hovered={hovered}
      onMouseOver={() => hoverItem(id)}
      onMouseOut={() => leaveItem(id)}
      onFocus={() => hoverItem(id)}
      onBlur={() => leaveItem(id)}
    >
      {name}
    </MarkerDiv>
  </Marker>
);

Item.propTypes = {
  coords: object, //eslint-disable-line
  name: string,
  id: string,
  hovered: bool,
  hoverItem: func,
  leaveItem: func,
};

export default Item;
