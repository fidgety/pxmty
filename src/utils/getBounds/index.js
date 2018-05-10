/* eslint no-param-reassign: 0 */
export default latlngs => {
  if (!latlngs.length) {
    return undefined;
  }

  const nesw = latlngs.reduce(
    ({north, east, south, west}, [lng, lat]) => {
      if (!north || lat > north) {
        north = lat;
      }
      if (!south || lat < south) {
        south = lat;
      }
      if (!west || lng < west) {
        west = lng;
      }
      if (!east || lng > east) {
        east = lng;
      }

      return {
        north,
        east,
        south,
        west,
      };
    },
    {
      north: null,
      east: null,
      south: null,
      west: null,
    },
  );

  return [[nesw.west, nesw.south], [nesw.east, nesw.north]];
};
