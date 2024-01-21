"use client";
import React from "react";
import Slider from "react-slick";
import Card from "./card";

const data = [
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
  {
    img: "/when-sarah-met-duck-book.jpg",
  },
];

const Carousel = () => {
  const setting = {
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative">
        <Slider {...setting}>
          {data.map((el, index) => (
            <Card key={index} img={el.img} />
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Carousel;
