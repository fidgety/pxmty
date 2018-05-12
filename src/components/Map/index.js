import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import {array} from "prop-types";
import {observer} from "mobx-react";

import store from "../../store";
import getBounds from "utils/getBounds";

import Marker from "./Marker";

const london = [-0.127758, 51.507351];
const boundsChanged = (bounds, newBounds) =>
  newBounds && newBounds.toString() !== bounds.toString();

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmlkZ2V0eSIsImEiOiJjamgwc2Fyc2UxaHV1MnFvNHBhbzA0NWVlIn0.izRT8Sc5cHAZrsIgkxyrmQ",
});

let bounds;

const MapAndMarkers = () => {
  const Items = store.items.map(item => (
    <Marker {...store} {...item} key={item.name} />
  ));

  // const {coords: focusedThing} = store.items.find(item => item.hovered) || {};
  console.log(store.selectedItemDetails, store);
  const {coords: focusedThing} = store.selectedItemDetails || {};

  let a;
  if (focusedThing) {
    a = [[focusedThing[0]], [focusedThing[1]]];
  }

  const newBounds = getBounds(store.items.map(({coords}) => coords));
  if (!bounds || boundsChanged(bounds, newBounds)) {
    bounds = newBounds;
  }

  return (
    <Map
      style="mapbox://styles/fidgety/cjg0ze2xx0zo22rqkfae914qm" //eslint-disable-line
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      center={a || london}
      fitBounds={bounds}
      fitBoundsOptions={{
        offset: [200, 0],
      }}
      flyToOptions={{
        offset: [200, 0],
      }}
    >
      {Items}
    </Map>
  );
};

MapAndMarkers.propTypes = {
  items: array, //eslint-disable-line
};

MapAndMarkers.defaultProps = {
  items: [],
};

export default observer(MapAndMarkers);
