const {google} = window;
const service = new google.maps.places.PlacesService(
  document.getElementById("thing"),
);

export const nearbySearch = ({keyword, location}) =>
  new Promise((resolve, reject) => {
    service.nearbySearch(
      {
        keyword,
        location: new google.maps.LatLng(location[0], location[1]),
        rankBy: google.maps.places.RankBy.PROMINENCE,
        radius: 10000,
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
  new Promise((resolve, reject) => {
    service.getDetails(
      {
        placeId: id,
      },
      (details, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          return resolve(details);
        }

        return reject(new Error("problem getting place detail"));
      },
    );
  });
