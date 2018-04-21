import React from "react";
import styled from "styled-components";

import store from "../../../store";

const {google} = window;

const Input = styled.input`
  width: calc(100% - 18px);
  padding: 16px 8px;
  margin-top: 16px;
  font-size: 18px;
  border: 1px solid lightgrey;
`;

const Result = styled.li`
  list-style: none;
  padding: 8px 16px;
  margin: 0px;

  &:hover {
    background: lightblue;
    cursor: pointer;
  }
`;

const ResultName = styled.p`
  margin: 0 0 4px 0;
`;

const ResultAddress = styled.p`
  margin: 0;
  font-size: 12px;
`;

const Results = styled.ul`
  padding: 0;
  margin: 0;
  width: 300px;
  background: white;
  position: absolute;
`;

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      results: [],
      value: "",
    };
  }

  onChange(e) {
    const {value} = e.target;
    this.setState({
      value,
    });

    if (value.length < 3) {
      return;
    }
    const service = new google.maps.places.PlacesService(
      document.getElementById("thing"),
    );
    service.nearbySearch(
      {
        keyword: value,
        rankBy: google.maps.places.RankBy.PROMINENCE,
        location: new google.maps.LatLng(51.509865, -0.118092),
        radius: 10000,
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.setState({results});
        }

        return [];
      },
    );
  }
  resultSelected({id, name, geometry}) {
    const coords = [geometry.location.lng(), geometry.location.lat()];

    store.addItemToShortlist(id, name, coords);
    this.setState({
      value: "",
      results: [],
    });
  }
  render() {
    const list = this.state.results.map(result => (
      <Result
        key={result.id}
        onClick={() => {
          this.resultSelected(result);
        }}
      >
        <ResultName>{result.name}</ResultName>
        <ResultAddress>{result.vicinity}</ResultAddress>
      </Result>
    ));

    return (
      <div>
        <Input
          placeholder="Add things to your list"
          type="text"
          onChange={this.onChange}
          value={this.state.value}
        />
        <Results>{list}</Results>
      </div>
    );
  }
}
