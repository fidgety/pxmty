import moment from "moment";

export default [
  {
    date: moment(),
    items: [
      {
        name: "Tate Modern",
        id: `id-${Math.random()}`,
        coords: [-0.099843, 51.507653],
        hovered: false,
      },
      {
        name: "Sunspel",
        id: `id-${Math.random()}`,
        coords: [-0.076147, 51.524773],
        hovered: false,
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
        hovered: false,
      },
      {
        name: "Serpentine Gallery",
        id: `id-${Math.random()}`,
        coords: [-0.172257, 51.507209],
        hovered: false,
      },
    ],
  },
];
