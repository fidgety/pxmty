import React from "react";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";
import {object, string} from "prop-types";

const CardDiv = styled.div`
  padding: 10px 0;
`;

const Heading = styled.h3`
  padding: 10px 0;
`;

const DescriptionDiv = styled.div``;

const Card = ({name, description}) => (
  <CardDiv>
    <Heading>{name}</Heading>

    <DescriptionDiv>{ReactHtmlParser(description)}</DescriptionDiv>
  </CardDiv>
);

Card.propTypes = {
  name: string,  //eslint-disable-line
  description: string,
};

export default Card;
