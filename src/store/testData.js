import moment from "moment";

export default [
  {
    date: moment(),
    items: [
      {
        name: "Tate Modern",
        id: `id-${Math.random()}`,
        coords: [-0.099843, 51.507653],
      },
      {
        name: "Sunspel",
        id: `id-${Math.random()}`,
        coords: [-0.076147, 51.524773],
      },
    ],
  },
  {
    date: moment().add(1, "day"),
    items: [
      {
        name: "Café du Cycliste",
        id: `id-${Math.random()}`,
        coords: [-0.078101, 51.51849],
      },
      {
        name: "Serpentine Gallery",
        id: `id-${Math.random()}`,
        coords: [-0.172257, 51.507209],
      },
    ],
  },
];
