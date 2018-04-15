import React from "react";
import {Marker} from "react-mapbox-gl";
import {object, string} from "prop-types";

const Item = ({coords, name}) => (
  <Marker coordinates={coords.slice()}>
    <div>{name}</div>
  </Marker>
);

Item.propTypes = {
  coords: object, //eslint-disable-line
  name: string,
};

export default Item;
