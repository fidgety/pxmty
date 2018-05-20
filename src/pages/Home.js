import React from "react";
import {observer} from "mobx-react";
import styled from "styled-components";
import breakpoints from "constants/breakpoints";
import colours from "constants/colours";
import HeroHeader from "components/HeroHeader";
import DestinationCard from "components/DestinationCard";

import Destinations from "data/destinations";

const HomeDiv = styled.div`
  background: ${colours.white};
`;

const DestinationDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  margin-bottom: 40px;

  @media (min-width: ${breakpoints.small}) {
    display: flex;
    width: 1000px;
  }
`;

const DestinationHeadingDiv = styled.div``;

const DestinationHeading = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 30px;
  margin-bottom: 20px;
`;

const Home = () => {
  const FeaturedDestinations = Destinations.filter(
    dest => dest.img !== undefined,
  ).map(popular => <DestinationCard {...popular} key={popular.name} />);

  return (
    <HomeDiv className="App">
      <HeroHeader />
      <DestinationHeadingDiv>
        <DestinationHeading>Our Featured Destinations</DestinationHeading>
      </DestinationHeadingDiv>
      <DestinationDiv>{FeaturedDestinations}</DestinationDiv>
    </HomeDiv>
  );
};

export default observer(Home);
