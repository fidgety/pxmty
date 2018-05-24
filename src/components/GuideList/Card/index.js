import React from "react";
import styled from "styled-components";
import {object, string} from "prop-types";

const CardDiv = styled.div``;

const Card = ({name}) => <CardDiv>{name}</CardDiv>;

Card.propTypes = {
  name: string,  //eslint-disable-line
};

export default Card;
