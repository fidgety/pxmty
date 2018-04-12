import React from "react";
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmlkZ2V0eSIsImEiOiJjamZ2bHFqaTMwMWxhMzNxYWRwazRsZnI1In0.9cE8KDydvJF8MatzYAwVQQ",
});

// in render()
export default () => (
  <Map
    // style="mapbox://styles/fidgety/cjfvmfqdr30ql2ssyt4n3mtm2"
    style="mapbox://styles/fidgety/cjfvmmbgy22e62rn2rvubheh5" // eslint-disable-line
    containerStyle={{
      height: "100vh",
      width: "100vw",
    }}
  >
    <Layer type="symbol" id="marker" layout={{"icon-image": "marker-15"}}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
    </Layer>
  </Map>
);
