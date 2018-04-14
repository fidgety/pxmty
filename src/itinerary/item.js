import React from "react";
import {Draggable} from "react-beautiful-dnd";
import {integer, string} from "prop-types";

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: 16,
  margin: `0 0 8px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const Item = props => (
  <Draggable key={props.id} draggableId={props.id} index={props.index}>
    {(providedItem, snapshotItem) => (
      <div
        ref={providedItem.innerRef}
        {...providedItem.draggableProps}
        {...providedItem.dragHandleProps}
        style={getItemStyle(
          snapshotItem.isDragging,
          providedItem.draggableProps.style,
        )}
      >
        {props.content}
      </div>
    )}
  </Draggable>
);

Item.propTypes = {
  id: integer,
  index: integer,
  content: string,
};

export default Item;
