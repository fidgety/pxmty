import React from "react";
import {observer} from "mobx-react";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {object} from "prop-types";

import Header from "./Header";
import Day from "./Day";

import store from "../../../store";

const onDragEnd = result => {
  if (!result.destination) {
    return;
  }

  store.moveItem(
    result.source.index,
    parseInt(result.source.droppableId, 10),
    result.destination.index,
    parseInt(result.destination.droppableId, 10),
  );
};

const Itinerary = () => {
  const Droppables = store.days.map((day, i) => (
    <div key={`${day.date.format()}`}>
      <Header>{day.date.format("dddd Do MMMM")}</Header>
      <Droppable droppableId={`${i}-day`}>
        {(provided, snapshot) => (
          <Day
            provided={provided}
            snapshot={snapshot}
            items={day.items}
            hoverItem={store.focusItem}
            leaveItem={store.leaveItem}
            clickItem={store.showItemDetail}
            removeItem={store.removeItem}
          />
        )}
      </Droppable>
    </div>
  ));

  Droppables.unshift(
    <div key="shortlist">
      <Header>Shortlist</Header>
      <Droppable droppableId="shortlist">
        {(provided, snapshot) => (
          <Day
            provided={provided}
            snapshot={snapshot}
            items={store.shortlist}
            hoverItem={store.focusItem}
            leaveItem={store.leaveItem}
            clickItem={store.showItemDetail}
            removeItem={store.removeItem}
          />
        )}
      </Droppable>
    </div>,
  );

  return <DragDropContext onDragEnd={onDragEnd}>{Droppables}</DragDropContext>;
};

Itinerary.propTypes = {
  itinerary: object, // eslint-disable-line
};

export default observer(Itinerary);
