/* eslint camelcase: 0 */
import React from "react";
import styled from "styled-components";

import {object, bool} from "prop-types";

import Panel from "./Shared/Panel";

const OpeningTimesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Row = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const Day = styled.span`
  font-weight: bold;
`;

const OpeningTimes = ({weekday_text, open_now}) => {
  if (!weekday_text) {
    return null;
  }

  const times = weekday_text.map(openingTime => {
    const [day, time] = openingTime.split(": ");

    return (
      <Row key={day}>
        <Day>{day}</Day>
        <span>{time}</span>
      </Row>
    );
  });

  return (
    <Panel>
      {open_now && <div>open now</div>}
      <OpeningTimesList>{times}</OpeningTimesList>
    </Panel>
  );
};

OpeningTimes.propTypes = {
  weekday_text: object, //eslint-disable-line
  open_now: bool,
};

export default OpeningTimes;
