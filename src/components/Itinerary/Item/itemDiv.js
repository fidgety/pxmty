import React from "react";
import {object, string} from "prop-types";
import {observer} from "mobx-react";

const getItemStyle = (isDragging, draggableStyle, hovered) => {
  let background = "#eee";

  if (isDragging) {
    background = "#bbb";
  }

  if (hovered) {
    background = "pink";
  }

  return {
    userSelect: "none",
    padding: "16px",
    marginBottom: "8px",
    background,
    fontFamily: "sans-serif",

    // styles we need to apply on draggables
    ...draggableStyle,
  };
};

const ItemDiv = ({
  providedItem,
  snapshotItem,
  name,
  onMouseOver,
  onMouseOut,
  hovered,
  id,
}) => (
  <div
    ref={providedItem.innerRef}
    {...providedItem.draggableProps}
    {...providedItem.dragHandleProps}
    style={getItemStyle(
      snapshotItem.isDragging,
      providedItem.draggableProps.style,
      hovered,
    )}
    onMouseOver={() => onMouseOver(id)}
    onMouseOut={() => onMouseOut(id)}
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
