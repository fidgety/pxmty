/* eslint camelcase: 0 */
import React from "react";

import {object, bool} from "prop-types";

const OpeningTimes = ({weekday_text, open_now}) => {
  if (!weekday_text) {
    return null;
  }

  const times = weekday_text.map(openingTime => {
    const [day, time] = openingTime.split(": ");

    return (
      <li key={day}>
        <span>{day}</span>
        <span>{time}</span>
      </li>
    );
  });

  return (
    <div>
      {open_now && <div>open now</div>}
      <ul>{times}</ul>
    </div>
  );
};

OpeningTimes.propTypes = {
  weekday_text: object, //eslint-disable-line
  open_now: bool,
};

export default OpeningTimes;
