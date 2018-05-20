import React from "react";
import styled from "styled-components";
import {array, string, bool} from "prop-types";
import breakpoints from "constants/breakpoints";
import colours from "constants/colours";

const Card = styled.li`
  border: 1px solid lightgrey;
  height: 300px;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;

  @media (min-width: ${breakpoints.small}) {
    width: 200px;
    margin-left: 10px;

    ${props =>
      props.hovered &&
      `
        height: auto;
        box-shadow: 0px 0px 8px 2px rgba(100,100,100,0.3);
        cursor: pointer;
        overflow: visible;
        z-index: 10;
        `};
  }
`;

const InnerCard = styled.div`
  position: absolute;
  background: white;
  z-index: 10;
  box-shadow: 0px 0px 8px 2px rgba(100, 100, 100, 0.3);
  top: 0;
  left: 0;
  xtransition: all ease-in-out 200ms;
  width: 200px;

  ${props =>
    props.hovered &&
    `
        top: -30px;
        left: -50px;
        width: 300px;
    `};
`;

const InnerImage = styled.img`
  @media (min-width: ${breakpoints.small}) {
    position: absolute;
    left: -250px;

    ${props =>
      props.hovered &&
      `
        width: 100%;
        height: auto;
        left: 0;
        position: initial;
        `};
  }
`;

const DestinationName = styled.h3`
  position: absolute;
  top: 147px;
  color: white;
  width: 100%;
  margin: 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 200px;
  font-size: 23px;

  @media (min-width: ${breakpoints.small}) {
    ${props =>
      props.hovered &&
      `
        padding: 0;
        margin: 20px;
        text-align: center;
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #454545;

        position: relative;
        top: auto;
        width: auto;
        background: none;`};
  }
`;

const Content = styled.div`
  display: ${props => props.hovered && "block"};
`;

const Button = styled.div`
  display: none;
  background: ${colours.logoRed};
  color: white;

  @media (min-width: ${breakpoints.small}) {
    width: calc(100% - 62px);
    text-align: center;
    display: block;
  }
`;

const DestinationCard = ({name, coords, img, hovered}) => (
  <Card hovered={hovered}>
    <a href={`plan/${name.toLowerCase()}`}>
      <InnerCard>
        <InnerImage src={`images/destinations/${img}`} alt={name} />
        <DestinationName>{name}</DestinationName>
        <Content>
          <Button>Start your adventure</Button>
        </Content>
      </InnerCard>
    </a>
  </Card>
);

DestinationCard.propTypes = {
  name: string,
  hovered: bool,
  coords: array, //eslint-disable-line
  img: string,
};

export default DestinationCard;
