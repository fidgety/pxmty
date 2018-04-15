import {extendObservable, computed} from "mobx";
import testData from "./testData";

const itinerary = extendObservable(this, {
  days: testData,
  get items() {
    return this.days.flatten();
  },
  moveItem(startIndex, movedFromDay, endIndex, movedToDay) { //eslint-disable-line
    const [removed] = this.days[movedFromDay].items.splice(startIndex, 1);
    this.days[movedToDay].items.splice(endIndex, 0, removed);
  },
});

export default itinerary;
