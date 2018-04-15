import {extendObservable} from "mobx";
import moment from "moment";

const itinerary = extendObservable(this, {
  days: [
    {
      date: moment(),
      items: [
        {
          name: "item 1",
          id: `id-${Math.random()}`,
        },
        {
          name: "item 2",
          id: `id-${Math.random()}`,
        },
      ],
    },
    {
      date: moment().add(1, "day"),
      items: [
        {
          name: "item 3",
          id: `id-${Math.random()}`,
        },
        {
          name: "item 4",
          id: `id-${Math.random()}`,
        },
      ],
    },
  ],
  moveItem(startIndex, movedFromDay, endIndex, movedToDay) { //eslint-disable-line
    const [removed] = this.days[movedFromDay].items.splice(startIndex, 1);
    this.days[movedToDay].items.splice(endIndex, 0, removed);
  },
});

export default itinerary;
