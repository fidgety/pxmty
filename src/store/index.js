import {extendObservable, computed} from "mobx";
import testData from "./testData";

const itinerary = extendObservable(this, {
  days: testData,
  get items() {
    return this.days.reduce(
      (prev, next) => prev.concat(next.items.slice()),
      [],
    );

    // return this.days.reduce((prev, day) => prev.concat(day.items), []);
  },
  moveItem(startIndex, movedFromDay, endIndex, movedToDay) { //eslint-disable-line
    const [removed] = this.days[movedFromDay].items.splice(startIndex, 1);
    this.days[movedToDay].items.splice(endIndex, 0, removed);
  },
});

export default itinerary;
