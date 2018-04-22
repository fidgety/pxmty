/* eslint camelcase: 0 */

import React from "react";
import {object} from "prop-types";

const Reviews = ({reviews}) => {
  if (!reviews) {
    return null;
  }

  const reviewList = reviews.map(
    ({author_name, rating, relative_time_description, text, author_url}) => (
      <li key={author_url}>
        <div>{rating} out of 5</div>
        <p>{text}</p>
        <span>{author_name}</span>
        <span>{relative_time_description}</span>
      </li>
    ),
  );

  return <ul>{reviewList}</ul>;
};

Reviews.propTypes = {
  reviews: object, //eslint-disable-line
};

export default Reviews;
