import React from "react";
import styled from "styled-components";
import {object} from "prop-types";

const CardDiv = styled.div``;

const Card = () => <CardDiv />;

Card.propTypes = {
  guides: object,  //eslint-disable-line
};

export default Card;
