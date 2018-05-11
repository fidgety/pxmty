import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import {array} from "prop-types";
import {observer} from "mobx-react";

import store from "../../store";
import getBounds from "utils/getBounds";

import Marker from "./Marker";

const london = [-0.127758, 51.507351];

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmlkZ2V0eSIsImEiOiJjamgwc2Fyc2UxaHV1MnFvNHBhbzA0NWVlIn0.izRT8Sc5cHAZrsIgkxyrmQ",
});

let bounds;

const MapAndMarkers = () => {
  const Items = store.items.map(item => (
    <Marker {...store} {...item} key={item.name} />
  ));

  const newBounds = getBounds(store.items.map(({coords}) => coords));
  if (!bounds || (newBounds && newBounds.toString() !== bounds.toString())) {
    bounds = newBounds;
  }

  return (
    <Map
      style="mapbox://styles/fidgety/cjg0ze2xx0zo22rqkfae914qm" //eslint-disable-line
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      center={london}
      fitBounds={bounds}
      fitBoundsOptions={{
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
