import React from "react";
import {Draggable} from "react-beautiful-dnd";
import {number, string} from "prop-types";

import ItemDiv from "./itemDiv";

const Item = props => (
  <Draggable key={props.id} draggableId={props.id} index={props.index}>
    {(providedItem, snapshotItem) => (
      <ItemDiv
        providedItem={providedItem}
        snapshotItem={snapshotItem}
        name={props.name}
      />
    )}
  </Draggable>
);

Item.propTypes = {
  id: string,
  index: number,
  name: string,
};

export default Item;
