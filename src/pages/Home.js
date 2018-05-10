import React from "react";
import styled from "styled-components";
import HeroHeader from "components/HeroHeader";

const HomeDiv = styled.div`
  background: grey;
`;

const Home = () => (
  <HomeDiv className="App">
    <HeroHeader />
  </HomeDiv>
);

export default Home;
