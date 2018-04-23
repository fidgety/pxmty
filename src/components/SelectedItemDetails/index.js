/* eslint camelcase: 0 */
import React from "react";
import {observer} from "mobx-react";

import styled from "styled-components";

import store from "store";

import MainInfo from "./MainInfo";
import Carousel from "./Carousel";
import OpeningTimes from "./OpeningTimes";
import Reviews from "./Reviews";

import {background} from "utils/style/transitions";

const Sidebar = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 300px;
  z-index: 50;
  background: white;
  padding: 16px;
`;

const Close = styled.button`
  border: none;
  background: lightblue;
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 10px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: ${background}

  &:hover {
      background: pink;
  }
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
      <Close onClick={store.hideItemDetail}>X</Close>
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
