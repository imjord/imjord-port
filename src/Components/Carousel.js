import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample(props) {
  return (
    <Carousel id="carousel" fade>
      <Carousel.Item id="caro-div">
        <img
          className="d-block w-100"
          src={props.projects[0].image}
          alt="First slide"
        />
        <Carousel.Caption className="caro-p">
          <h3>{props.projects[0].title}</h3>
          <h4>Skills: {props.projects[0].skills}</h4>
          <a href={props.projects[0].liveSite} target="_blank">
            <h4 id="link">Github Repo</h4>{" "}
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="caro-div">
        <img
          className="d-block w-100"
          src={props.projects[1].image}
          alt="First slide"
        />
        <Carousel.Caption className="caro-p">
          <h3>{props.projects[1].title}</h3>
          <h4>Skills: {props.projects[1].skills}</h4>
          <a href={props.projects[1].liveSite} target="_blank">
            <h4 id="link">Live Site</h4>{" "}
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="caro-div">
        <img
          className="d-block w-100"
          src={props.projects[2].image}
          alt="Second slide"
        />

        <Carousel.Caption className="caro-p">
          <h3>{props.projects[2].title}</h3>
          <h4>Skills: {props.projects[2].skills}</h4>
          <a href={props.projects[2].liveSite} target="_blank">
            <h4 id="link">Live Site</h4>{" "}
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="caro-div">
        <img
          className="d-block w-100"
          src={props.projects[3].image}
          alt="Third slide"
        />

        <Carousel.Caption className="caro-p">
          <h3>{props.projects[3].title}</h3>
          <h4>Skills: {props.projects[3].skills}</h4>
          <a href={props.projects[3].liveSite} target="_blank">
            <h4 id="link">Github Repo</h4>{" "}
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="caro-div">
        <img
          className="d-block w-100"
          src={props.projects[4].image}
          alt="Fourth slide"
        />

        <Carousel.Caption className="caro-p">
          <h3>{props.projects[4].title}</h3>
          <h4>Skills: {props.projects[4].skills}</h4>
          <a href={props.projects[4].liveSite} target="_blank">
            <h4 id="link">Live Site</h4>{" "}
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="caro-div">
        <img
          className="d-block w-100"
          src={props.projects[5].image}
          alt="Fifth slide"
        />

        <Carousel.Caption className="caro-p">
          <h3>{props.projects[5].title}</h3>
          <h4>Skills: {props.projects[5].skills}</h4>
          <a href={props.projects[5].liveSite} target="_blank">
            <h4 id="link">Github Repo</h4>{" "}
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="caro-div">
        <img
          className="d-block w-100"
          src={props.projects[6].image}
          alt="Fifth slide"
        />

        <Carousel.Caption className="caro-p">
          <h3>{props.projects[6].title}</h3>
          <h4>Skills: {props.projects[6].skills}</h4>
          <a href={props.projects[6].liveSite} target="_blank">
            <h4 id="link">Live Site</h4>{" "}
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="caro-div">
        <img
          className="d-block w-100"
          src={props.projects[7].image}
          alt="Fifth slide"
        />

        <Carousel.Caption className="caro-p">
          <h3>{props.projects[7].title}</h3>
          <h4>Skills: {props.projects[7].skills}</h4>
          <a href={props.projects[7].liveSite} target="_blank">
            <h4 id="link">Live Site</h4>{" "}
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
