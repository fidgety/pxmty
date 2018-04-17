import {extendObservable} from "mobx";
import testData from "./testData";

const findItemById = (days, id) => {
  for (let i = 0; i < days.length; i += 1) {
    const foundItem = days[i].items.find(item => item.id === id);
    if (foundItem) {
      return foundItem;
    }
  }

  return undefined;
};

const itinerary = extendObservable(this, {
  days: testData,
  get items() {
    return this.days.reduce(
      (prev, next) => prev.concat(next.items.slice()),
      [],
    );
  },
  moveItem(startIndex, movedFromDay, endIndex, movedToDay) {
    const [removed] = this.days[movedFromDay].items.splice(startIndex, 1);
    this.days[movedToDay].items.splice(endIndex, 0, removed);
  },
  hoverItem: id => {
    findItemById(this.days, id).hovered = true;
  },
  leaveItem: id => {
    findItemById(this.days, id).hovered = false;
  },
});

export default itinerary;
