import React from "react";
import styled from "styled-components";

const {google} = window;

const Result = styled.li`
  list-style: none;
  padding: 8px 16px;
  margin: 0px;

  &:hover {
    background: lightblue;
    cursor: pointer;
  }
`;

const Results = styled.ul`
  padding: 0;
  margin: 0;
  width: 300px;
  background: white;
`;

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
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
    const list = this.state.results.map(result => (
      <Result>{result.name}</Result>
    ));

    return (
      <div>
        <input type="text" onChange={this.onChange} />
        <Results>{list}</Results>
      </div>
    );
  }
}
