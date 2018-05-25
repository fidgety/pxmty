import React from "react";
import {Marker} from "react-mapbox-gl";
import {object, string, bool, func} from "prop-types";
import styled from "styled-components";
import {background} from "utils/style/transitions";

const MarkerDiv = styled.div`
  background: ${props => (props.focused ? "pink" : "white")};
  transition: ${background};
  cursor: pointer;
  padding: 0 4px;
`;

const Item = ({
  coords,
  name,
  id,
  focused,
  hovered,
  hoverItem,
  leaveItem,
  showItemDetail,
}) => (
  <Marker
    coordinates={coords.slice()}
    style={{
      zIndex: focused || hovered ? 1 : 0,
    }}
  >
    <MarkerDiv
      focused={focused || hovered}
      onMouseOver={() => hoverItem(id)}
      onMouseOut={() => leaveItem(id)}
      onFocus={() => hoverItem(id)}
      onBlur={() => leaveItem(id)}
      onClick={() => showItemDetail(id)}
    >
      {name}
    </MarkerDiv>
  </Marker>
);

Item.propTypes = {
  coords: object, //eslint-disable-line
  name: string,
  id: string,
  focused: bool,
  hovered: bool,
  hoverItem: func,
  leaveItem: func,
  showItemDetail: func,
};

export default Item;
