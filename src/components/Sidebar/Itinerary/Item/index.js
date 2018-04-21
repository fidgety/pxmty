import React from "react";
import {Draggable} from "react-beautiful-dnd";
import {number, string, bool, func} from "prop-types";

import ItemDiv from "./itemDiv";

const Item = props => (
  <Draggable key={props.id} draggableId={props.id} index={props.index}>
    {(providedItem, snapshotItem) => (
      <ItemDiv
        providedItem={providedItem}
        snapshotItem={snapshotItem}
        name={props.name}
        hovered={props.hovered}
        id={props.id}
        hoverItem={props.hoverItem}
        leaveItem={props.leaveItem}
        clickItem={props.clickItem}
      />
    )}
  </Draggable>
);

Item.propTypes = {
  id: string,
  index: number,
  name: string,
  hovered: bool,
  hoverItem: func,
  leaveItem: func,
  clickItem: func,
};

export default Item;
