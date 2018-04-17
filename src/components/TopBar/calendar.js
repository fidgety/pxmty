import React from "react";
import DayPicker, {DateUtils} from "react-day-picker";
import moment from "moment";
import styled from "styled-components";

const Dates = styled.div`
  font-family: sans-serif;
  padding: 16px;
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
      from: moment().toDate(),
      to: moment()
        .add(1, "day")
        .toDate(),
      show: false,
    };
  }

  handleDayClick(day) {
    const {from, to} = this.state;
    // if (from && to && day >= from && day <= to) {
    //   this.handleResetClick();
    //
    //   return;
    // }
    if (isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
      });
    } else {
      this.setState({
        to: day,
        show: false,
      });
    }
  }

  render() {
    const {from, to, show} = this.state;
    const modifiers = {start: from, end: to};

    return (
      <div className="RangeExample">
        <Dates onClick={() => this.setState({show: !show})}>
          {from &&
            to &&
            `${moment(from).format("ddd Do MMMM")} -
                ${moment(to).format("ddd Do MMMM")}`}{" "}
        </Dates>
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
