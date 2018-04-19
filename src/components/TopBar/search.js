import React from "react";

const google = window.google;

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      results: [],
    };
  }
  onChange(e) {
    if (e.target.value.length < 3) {
      return;
    }
    const service = new google.maps.places.PlacesService(
      document.getElementById("thing"),
    );
    service.nearbySearch(
      {
        keyword: e.target.value,
        rankBy: google.maps.places.RankBy.PROMINENCE,
        location: new google.maps.LatLng(51.509865, -0.118092),
        radius: 1000,
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.setState({results});
        }

        return [];
      },
    );
  }
  render() {
    const list = this.state.results.map(result => <ul>{result.name}</ul>);

    return (
      <div>
        <input type="text" onChange={this.onChange} />
      </div>
    );
  }
}
