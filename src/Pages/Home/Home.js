/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import CarouselHome from "../../Components/CarouselHome/CarouselHome";
import './Home.css'
import girl from "../ImagesPage/girl.png";
import pola from "../ImagesPage/Guy.png";

export default function Home() {
  return (
    <div>
      <CarouselHome></CarouselHome>

      {/* choose style˚*/}
      <div className="my-5 container p-md-5 ps-r">
        <h5 className="fw-bold bg-white px-4 py-3 w-25 mx-auto -mb abs mb-3">Choose your style</h5>
        <hr/>
      <div className="container wf-100 d-flex gap-5 mt-3 ">
        <div className="w-50 my-5 shadow pb-4 ">
          <div className="card-img cardMain">
            <img
              width="100%"
              height="100%"
              src={pola}
              alt="this is a picture of girl"
            />
            <div className="overlay d-flex mx-auto w-100">
            <h1 className="abs  text-light fw-bold p-50p  mx-auto">GENTS</h1>
          </div>
          </div>
          
          <h4 className="fw-bold py-3 text-h my-auto">GENTS</h4>
          <p>
            Explore yourself, be the glamourous persona you always dreamed of.
          </p>
          <button className="btn btn-dark px-5 py-2 rounded-0">
            SHOP THE COLLECTION
          </button>
        </div>

        <div className="w-50 my-5 shadow pb-4">
        <div className="card-img cardMain">
            <img
              width="100%"
              height="100%"
              src={girl}
              alt="this is a picture of girl"
            />
             <div className="overlay d-flex mx-auto w-100">
            <h1 className="abs  text-light fw-bold p-50p  mx-auto">LADIES</h1>
          </div>
          </div>
        
          <h4 className="fw-bold py-3">LADIES</h4>
          <p>
            Be confident with any style you like to own from a large variety of
            styles
          </p>
          <button className="btn btn-dark px-5 py-2 rounded-0">
            SHOP THE COLLECTION
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
