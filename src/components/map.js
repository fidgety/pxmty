import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import {array} from "prop-types";

import Marker from "./Marker";

const london = [-0.127758, 51.507351];

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmlkZ2V0eSIsImEiOiJjamZ2bHFqaTMwMWxhMzNxYWRwazRsZnI1In0.9cE8KDydvJF8MatzYAwVQQ",
});

const MapAndMarkers = props => {
  // const Items = props.items.map(item => <Item {...item} />);
  const Items = props.items.map(item => (
    <Marker coords={item.coords} name={item.name} key={item.name} />
  ));

  return (
    <Map
      // style="mapbox://styles/fidgety/cjfvmfqdr30ql2ssyt4n3mtm2"
    style="mapbox://styles/fidgety/cjg0ze2xx0zo22rqkfae914qm"// eslint-disable-line
      // style="mapbox://styles/fidgety/cjfvmmbgy22e62rn2rvubheh5" // eslint-disable-line
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
      center={london}
    >
      {Items}
    </Map>
    // <div />
  );
};

MapAndMarkers.propTypes = {
  items: array, //eslint-disable-line
};

MapAndMarkers.defaultProps = {
  items: [],
};

export default MapAndMarkers;
