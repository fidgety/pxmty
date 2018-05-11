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

export default () => (
  <Hero>
    <div className="fb" />
  </Hero>
);
