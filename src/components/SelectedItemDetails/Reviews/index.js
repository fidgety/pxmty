/* eslint camelcase: 0 */
import React from "react";
import {object} from "prop-types";
import styled from "styled-components";

import Panel from "../Shared/Panel";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Row = styled.li`
  padding-bottom: 16px;
`;

const Text = styled.p`
  margin: 8px 0 8px 0;
  line-height: 20px;
`;

const Name = styled.span`
  font-weight: bold;
`;

const Rating = styled.span`
  font-weight: bold;
`;

const RatingNumber = styled.span`
  background: pink;
  display: inline-block;
  height: 25px;
  width: 25px;
  text-align: center;
  line-height: 25px;
`;

const Reviews = ({reviews}) => {
  if (!reviews) {
    return null;
  }

  const reviewList = reviews.map(
    ({author_name, rating, relative_time_description, text, author_url}) => (
      <Row key={author_url}>
        <Rating>
          <RatingNumber>{rating}</RatingNumber> out of 5
        </Rating>
        <Text>{text}</Text>
        <Name>{author_name}</Name>
        <span> {relative_time_description}</span>
      </Row>
    ),
  );

  return (
    <Panel>
      <List>{reviewList}</List>
    </Panel>
  );
};

Reviews.propTypes = {
  reviews: object, //eslint-disable-line
};

export default Reviews;
