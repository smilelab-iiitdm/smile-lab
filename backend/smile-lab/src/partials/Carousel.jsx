import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoader from "./Loading";

const Carousel = () => {
  const [carousel, setCarousel] = useState([
    {
      "_id":"1.jpg",
    },
    {
      "_id":"2.jpg",
    },
    {
      "_id":"3.jpg"
    },
    {
      "_id":"4.jpg"
    },
    {
      "_id":"5.jpg"
    },
    {
      "_id":"6.jpg"
    },
    {
      "_id":"7.jpg"
    },
    {
      "_id":"8.jpg"
    },
    {
      "_id":"9.jpg"
    },
    {
      "_id":"10.jpg"
    },
  ]);
  const [isLoading, setisLoading] = useState(false);

  return (
    <div className="container-fluid px-0">
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators mb-0">
          {carousel.map((slider, index) => (
            <li
              key={slider._id}
              data-target="#demo"
              data-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></li>
          ))}
        </ul>
        <div
          className="carousel-inner"
          style={{ width: "100%", height: "700px" }}
        >
          {isLoading ? (
            <ReactLoader content="loading images..." />
          ) : (
            carousel.map((slider, index) => (
              <div
                className={
                  index + 1 === 1 ? "carousel-item active" : "carousel-item"
                }
                key={index + 1}
              >
                <img
                  src={"/carousal/"+ slider._id}
                  alt=""
                  className="mx-auto page-fade"
                  style={{ width: "100%", height: "700px", objectFit: "cover" }}
                />
                <div className="carousel-caption bg-caption mb-0 w-100">
                  <p>{slider.desc}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
