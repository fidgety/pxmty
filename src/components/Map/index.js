import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import {array} from "prop-types";
import {observer} from "mobx-react";

import store from "../../store";
import getBounds from "utils/getBounds";

import Marker from "./Marker";
import SelectedItem from "./SelectedItem";

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

  const SelectedItemMarker = store.selectedItemDetails ? (
    <SelectedItem {...store.selectedItemDetails} key="selectedItem" />
  ) : null;

  const {coords: focusedItemCoords} = store.items.find(item => item.focused) ||
    store.selectedItemDetails || {coords: {}};

  const center = focusedItemCoords.toJS ? focusedItemCoords.toJS() : london;

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
      center={center}
      fitBounds={bounds}
      fitBoundsOptions={{
        offset: [200, 0],
      }}
      flyToOptions={{
        offset: [200, 0],
      }}
    >
      {Items}
      {SelectedItemMarker}
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
