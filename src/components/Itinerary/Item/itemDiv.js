import React from "react";
import {object, string} from "prop-types";
import {observer} from "mobx-react";

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: "16px",
  marginBottom: "8px",
  background: isDragging ? "#bbb" : "#eee",
  fontFamily: "sans-serif",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const ItemDiv = ({providedItem, snapshotItem, name}) => (
  <div
    ref={providedItem.innerRef}
    {...providedItem.draggableProps}
    {...providedItem.dragHandleProps}
    style={getItemStyle(
      snapshotItem.isDragging,
      providedItem.draggableProps.style,
    )}
  >
    {name}
  </div>
);

ItemDiv.propTypes = {
  providedItem: object, //eslint-disable-line
  snapshotItem: object, //eslint-disable-line
  name: string,
};

export default observer(ItemDiv);
