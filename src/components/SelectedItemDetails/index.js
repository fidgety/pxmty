/* eslint camelcase: 0 */
import React from "react";
import {observer} from "mobx-react";

import styled from "styled-components";

import store from "store";

import MainInfo from "./MainInfo";
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

const SelectedItemDetails = () => {
  if (!store.selectedItemDetails) {
    return null;
  }

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
      <MainInfo
        name={name}
        address={formatted_address}
        phoneNumber={international_phone_number}
        website={website}
      />
      <Carousel photos={photos} />
      <OpeningTimes {...opening_hours} />
      <Reviews reviews={reviews} />
    </Sidebar>
  );
};

export default observer(SelectedItemDetails);
