import {observerable} from "mobx";
import moment from "moment";

const itinerary = observerable({
  days: [
    {
      date: moment(),
      items: [
        {
          name: "item 1",
        },
        {
          name: "item 2",
        },
      ],
    },
    {
      date: moment().add(1, "day"),
      items: [
        {
          name: "item 3",
        },
        {
          name: "item 4",
        },
      ],
    },
  ],
});

itinerary.moveItem = (startIndex, movedFromDay, endIndex, movedToDay) => {
  const [removed] = this.days[movedFromDay].items.splice(startIndex, 1);
  this.days[movedToDay].items.splice(endIndex, 0, removed);
};
