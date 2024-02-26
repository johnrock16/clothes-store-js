'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderSlickProps = {
  settings: any,
  children: any,
  className: string,
}

export default function SliderSlick ({settings, className, children} : SliderSlickProps) {
  return (
    <Slider className={className} {...settings}>
      {children}
    </Slider>
  );
};
