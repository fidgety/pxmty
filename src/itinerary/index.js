import React, {Component} from "react";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";

import Item from "./item";
import Header from "./header";

const getItems = (count, startingList) =>
  Array.from({length: count}, (v, k) => k).map(k => ({
    id: `item-${k}-${startingList}`,
    content: `item ${k} ${startingList}`,
  }));

const reorder = (
  list,
  startIndex,
  startDroppableId,
  endIndex,
  endDroppableId,
) => {
  const result = Array.from(list);
  const [removed] = result[startDroppableId].splice(startIndex, 1);
  result[endDroppableId].splice(endIndex, 0, removed);

  return result;
};

const Day = styled.div`
    background: ${props => (props.isDraggingOver ? "lightblue" : "lightgrey")},
    padding: grid,
    width: 250,
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [getItems(5, "list 1"), getItems(5, "list 2")],
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const days = reorder(
      this.state.days,
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
    const Droppables = this.state.days.map((day, i) => (
      <div>
        <Header>Monday 12th April</Header>
        <Droppable droppableId={`${i}-day`} key={`${day}-day`}>
          {(provided, snapshot) => (
            <Day
              innerRef={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {day.map((item, index) => <Item index={index} {...item} />)}
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

// Put the thing into the DOM!
export default App;
