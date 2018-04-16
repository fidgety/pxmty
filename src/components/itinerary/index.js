import React, {Component} from "react";
import {observer} from "mobx-react";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {object} from "prop-types";

import Header from "./Header";

import Day from "./Day";

class _App extends Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    this.props.itinerary.moveItem(
      result.source.index,
      parseInt(result.source.droppableId, 10),
      result.destination.index,
      parseInt(result.destination.droppableId, 10),
    );
  }

  render() {
    const Droppables = this.props.itinerary.days.map((day, i) => (
      <div key={`${day.date.format()}`}>
        <Header>{day.date.format("dddd Do MMMM")}</Header>
        <Droppable droppableId={`${i}-day`}>
          {(provided, snapshot) => (
            <Day
              provided={provided}
              snapshot={snapshot}
              items={day.items}
              hoverItem={this.props.itinerary.hoverItem}
            />
          )}
        </Droppable>
      </div>
    ));

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>{Droppables}</DragDropContext>
    );
  }
}

_App.propTypes = {
  itinerary: object, // eslint-disable-line
};

export default observer(_App);
