import React from "react";
import {object} from "prop-types";

import {Carousel} from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.css";

const ItemCarousel = props => (
  <div className="sidebar__carousel">
    <Carousel
      axis="horizontal"
      showThumbs={false}
      showArrows
      onChange={() => {}}
      onClickItem={() => {}}
      onClickThumb={() => {}}
      dynamicHeight
      emulateTouch
      showIndicators={false}
      showStatus={false}
      infiniteLoop
    >
      {props.photos.map(photo => {
        const imageUrl = photo.getUrl({
          maxWidth: 300,
          maxHeight: 200,
        });

        return (
          <div key={imageUrl}>
            <img src={imageUrl} alt="" />
          </div>
        );
      })}
    </Carousel>
  </div>
);

ItemCarousel.propTypes = {
    photos: object //eslint-disable-line
};

export default ItemCarousel;
