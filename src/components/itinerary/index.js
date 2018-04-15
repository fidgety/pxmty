/* eslint-disable */

import React, {Component} from "react";
import {observer} from "mobx-react";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import {object} from "prop-types";

import Item from "./item";
import Header from "./header";

const Day = styled.div`
    background: ${props => (props.isDraggingOver ? "lightblue" : "lightgrey")},
    width: 250,
`;

class _App extends Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const days = this.props.itinerary.moveItem(
      result.source.index,
      parseInt(result.source.droppableId, 10),
      result.destination.index,
      parseInt(result.destination.droppableId, 10),
    );

    this.setState({
      days,
    });
  }

  render() {
    const Droppables = this.props.itinerary.days.map((day, i) => (
      <div key={`${day.date.format()}`}>
        <Header>{day.date.format("dddd Do MMMM")}</Header>
        <Droppable droppableId={`${i}-day`}>
          {(provided, snapshot) => (
            <Day
              innerRef={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {day.items.map((item, index) => (
                <Item index={index} {...item} key={item.name} />
              ))}
              {provided.placeholder}
            </Day>
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
  itinerary: object,
};

export default observer(_App);
