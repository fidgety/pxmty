import React from "react";
import DayPicker, {DateUtils} from "react-day-picker";
import moment from "moment";
import styled from "styled-components";

import store from "store";
import {background} from "utils/style/transitions";

const ChangeDates = styled.button`
  padding: 16px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: -8px;
  border: none;
  background: #ccc;
  cursor: pointer;
  transition: ${background}

  &:hover {
    background: lightblue;
  }
`;

const DayPickerWrapper = styled.div`
  background: white;
  display: inline-block;
`;

const isSelectingFirstDay = (from, to, day) => {
  const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const isRangeSelected = from && to;

  return !from || isBeforeFirstDay || isRangeSelected;
};

export default class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: store.fromDate.toDate(),
      to: store.toDate.toDate(),
      show: false,
    };
  }

  handleDayClick(day) {
    const {from, to} = this.state;
    if (isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
      });
    } else {
      // dates chosen
      this.setState({
        to: day,
        show: false,
      });

      store.setDates(moment(this.state.from), moment(day));
    }
  }

  render() {
    const {from, to, show} = this.state;
    const modifiers = {start: from, end: to};

    return (
      <div>
        <ChangeDates
          onClick={() => {
            this.setState({
              show: true,
            });
          }}
        >
          Change dates
        </ChangeDates>
        {show && (
          <DayPickerWrapper>
            <DayPicker
              className="Selectable"
              numberOfMonths={2}
              selectedDays={[from, {from, to}]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
            />
          </DayPickerWrapper>
        )}
      </div>
    );
  }
}
