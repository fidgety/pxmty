/* eslint camelcase: 0 */
import React from "react";
import {observer} from "mobx-react";

import styled from "styled-components";

import store from "store";

import Carousel from "./carousel";
import OpeningTimes from "./openingTimes";
import Reviews from "./reviews";

const Sidebar = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 300px;
  z-index: 50;
  background: white;
  padding: 16px;
`;

const Name = styled.h1`
  font-size: 16px;
`;

const SelectedItemDetails = () => {
  if (!store.selectedItemDetails) {
    return null;
  }
  console.log(store.selectedItemDetails);
  const {
    name,
    formatted_address,
    international_phone_number,
    website,
    photos,
    reviews,
    opening_hours = {},
  } = store.selectedItemDetails;

  return (
    <Sidebar>
      <button onClick={store.hideItemDetail}>close</button>
      <Name>{name}</Name>
      <div>{formatted_address}</div>
      <div>{international_phone_number}</div>
      <a href={website} target="_blank">
        {website}
      </a>
      <Carousel photos={photos} />
      <OpeningTimes {...opening_hours} />
      <Reviews reviews={reviews} />
    </Sidebar>
  );
};

export default observer(SelectedItemDetails);
