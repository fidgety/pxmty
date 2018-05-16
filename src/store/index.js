import {extendObservable, transaction} from "mobx";
import {saveItinerary, loadItinerary} from "./api";
import moment from "moment";

import {getPlaceDetails} from "../utils/googlePlaces";

const findItemById = (daylist, id) => daylist.find(item => item.id === id);

const itinerary = extendObservable(this, {
  id: "",
  days: [
    {
      date: moment(),
      items: [],
    },
  ],
  selectedItemDetails: undefined,
  shortlist: [],
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
    this.saveState();
  },
  addItemToShortlist(id, name, coords) {
    this.shortlist.push({
      id,
      name,
      coords,
      hovered: false,
    });
    this.saveState();
  },
  removeItem: id => {
    this.days = this.days.reduce((arr, day) => {
      arr.push({
        date: day.date,
        items: day.items.filter(item => item.id !== id),
      });

      return arr;
    }, []);

    this.shortlist = this.shortlist.filter(item => item.id !== id);
    this.saveState();
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
    this.saveState();
  },
  hoverItem: id => {
    findItemById(this.items, id).hovered = true;
  },
  leaveItem: id => {
    findItemById(this.items, id).hovered = false;
  },
  showItemDetail: id => {
    getPlaceDetails(id).then(details => {
      this.selectedItemDetails = Object.assign(details, {
        coords: [
          details.geometry.location.lng(),
          details.geometry.location.lat(),
        ],
      });
    });
  },
  hideItemDetail: () => {
    this.selectedItemDetails = undefined;
  },
  saveState: () => {
    saveItinerary({
      days: this.days,
      shortlist: this.shortlist,
      id: this.id,
    });
  },
  getSavedState: planId => {
    this.id = planId;
    loadItinerary(planId).then(json => {
      if (json) {
        transaction(() => {
          this.days = json.days.map(({date, items}) => ({
            date: moment(date),
            items,
          }));
          json.shortlist.forEach(item => this.shortlist.push(item));
        });
      }
    });
  },
});

export default itinerary;
