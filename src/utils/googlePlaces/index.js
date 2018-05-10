const {google} = window;

const service = new google.maps.places.PlacesService(
  document.getElementById("thing-for-maps-to-work"),
);
const cachedPlaceDetails = {};

export const nearbySearch = ({keyword, location}) =>
  new Promise((resolve, reject) => {
    service.nearbySearch(
      {
        keyword,
        location: new google.maps.LatLng(location[0], location[1]),
        rankBy: google.maps.places.RankBy.PROMINENCE,
        radius: 1000000,
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          return resolve(results);
        }

        return reject();
      },
    );
  });

export const getPlaceDetails = id =>
  // eslint-disable-next-line consistent-return
  new Promise((resolve, reject) => {
    if (cachedPlaceDetails[id]) {
      return resolve(cachedPlaceDetails[id]);
    }

    service.getDetails(
      {
        placeId: id,
      },
      (details, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          cachedPlaceDetails[id] = details;

          return resolve(details);
        }

        return reject(new Error("problem getting place detail"));
      },
    );
  });
