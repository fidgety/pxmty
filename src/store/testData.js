import moment from "moment";

export const days = [
  {
    date: moment(),
    items: [
      {
        name: "Tate Modern",
        id: "ChIJlRl2MakEdkgR55tr4CNv_B8",
        coords: [-0.099843, 51.507653],
        hovered: false,
      },
      {
        name: "Sunspel",
        id: "ChIJA8lp5NIEdkgRO9gj1b5fDdo",
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
        id: "ChIJKRJuvLMcdkgRMH8MEtqwBFI",
        coords: [-0.078101, 51.51849],
        hovered: false,
      },
      {
        name: "Serpentine Gallery",
        id: "ChIJOQxY9E8FdkgRe1P4OVUdwM8",
        coords: [-0.172257, 51.507209],
        hovered: false,
      },
    ],
  },
];

export const shortlist = [
  {
    name: "Barbican Centre",
    id: "ChIJdbJk-1YbdkgRQB_SdWbiVsc",
    coords: [-0.093263, 51.520077],
    hovered: false,
  },
];
