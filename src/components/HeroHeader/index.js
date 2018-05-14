import React from "react";
import styled from "styled-components";
import breakpoints from "constants/breakpoints";

const Hero = styled.div`
  height: 200px;
  @media (min-width: ${breakpoints.small}) {
    height: 400px;
  }

  background: url(/images/hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 0;
  opacity: 0.8;
  padding: 10px 10px 0 10px;
`;

const Heading = styled.div`
  display: none;
  position: absolute;
  padding-top: 100px;
  padding-left: 35%;
  text-align: center;

  @media (min-width: ${breakpoints.small}) {
    display: block;
    padding-top: 175px;
    width: 30%;
  }

  @media (min-width: ${breakpoints.medium}) {
    padding-top: 140px;
    padding-left: 32%;
    width: 35%;
  }

  @media (min-width: ${breakpoints.large}) {
    padding-top: 175px;
  }
`;

export default () => (
  <Hero>
    <div className="fb" />
    <Heading>
      <h1>
        Planning to go away? Plot, plan and share your travel itinerary with
        friends.
      </h1>
    </Heading>
  </Hero>
);
