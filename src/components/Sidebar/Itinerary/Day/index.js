import React from "react";
import {observer} from "mobx-react";
import styled from "styled-components";
import {object, func} from "prop-types";

import Item from "../Item";

const DayStyles = styled.div`
  background: ${props => (props.isDraggingOver ? "lightblue" : "white")};
  min-height: 30px;
`;

const DayDropZone = ({provided, snapshot, items, hoverItem, leaveItem}) => (
  <DayStyles
    innerRef={provided.innerRef}
    isDraggingOver={snapshot.isDraggingOver}
  >
    {items.map((item, index) => (
      <Item
        index={index}
        {...item}
        key={item.name}
        hoverItem={hoverItem}
        leaveItem={leaveItem}
      />
    ))}
    {provided.placeholder}
  </DayStyles>
);

DayDropZone.propTypes = {
  provided: object, //eslint-disable-line
  snapshot: object, //eslint-disable-line
  items: object, // eslint-disable-line
  hoverItem: func,
  leaveItem: func,
};

export default observer(DayDropZone);
