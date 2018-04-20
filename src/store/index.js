import {extendObservable} from "mobx";
import {days, shortlist} from "./testData";

const findItemById = (daylist, id) => daylist.find(item => item.id === id);

const itinerary = extendObservable(this, {
  days,
  shortlist,
  get items() {
    return this.days
      .reduce((prev, next) => prev.concat(next.items.slice()), [])
      .concat(this.shortlist.slice());
  },
  get fromDate() {
    return this.days[0].date;
  },
  get toDate() {
    return this.days[this.days.length - 1].date;
  },
  setDates(from, to) {
    const newItinerary = [];
    let currentDay = from;
    let i = 0;

    while (currentDay <= to) {
      newItinerary.push({
        date: currentDay.clone(),
      });
      newItinerary[i].items = this.days.length > i ? this.days[i].items : [];

      currentDay = currentDay.clone().add(1, "day");
      i += 1;
    }

    for (; i < this.days.length; i += 1) {
      this.shortlist = this.shortlist.concat(this.days[i].items);
    }

    this.days = newItinerary;
  },
  addItemToShortlist(id, name, coords) {
    this.shortlist.push({
      id,
      name,
      coords,
      hovered: false,
    });
  },
  moveItem(startIndex, movedFromDay, endIndex, movedToDay) {
    const isShortlist = index => index.toString() === "NaN";

    const fromArray = isShortlist(movedFromDay)
      ? this.shortlist
      : this.days[movedFromDay].items;

    const toArray = isShortlist(movedToDay)
      ? this.shortlist
      : this.days[movedToDay].items;

    const [removed] = fromArray.splice(startIndex, 1);
    toArray.splice(endIndex, 0, removed);
  },
  hoverItem: id => {
    findItemById(this.items, id).hovered = true;
  },
  leaveItem: id => {
    findItemById(this.items, id).hovered = false;
  },
});

export default itinerary;
