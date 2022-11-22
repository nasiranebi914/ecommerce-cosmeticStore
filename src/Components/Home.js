import React from "react";
import home1 from "../imgs/home1.jpg";
import home2 from "../imgs/home2.jpg";
import home3 from "../imgs/home3.jpg";
import home4 from "../imgs/home4.jpg";
import home5 from "../imgs/home5.jpg";
import home6 from "../imgs/home6.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        <div className="card m-2">
          <div class="card-image">
            <figure className="image">
              <img src={home1}></img>
            </figure>
          </div>
        </div>
        <div className="card m-2">
          <div class="card-image">
            <figure className="image">
              <img src={home2}></img>
            </figure>
          </div>
        </div>
        <div className="card m-2">
          <div class="card-image">
            <figure className="image">
              <img src={home3}></img>
            </figure>
          </div>
        </div>
        <div className="card m-2">
          <div class="card-image">
            <figure className="image">
              <img src={home4}></img>
            </figure>
          </div>
        </div>
        <div className="card m-2">
          <div class="card-image">
            <figure className="image">
              <img src={home5}></img>
            </figure>
          </div>
        </div>
        <div className="card m-2">
          <div class="card-image">
            <figure className="image">
              <img src={home6}></img>
            </figure>
          </div>
        </div>
      </Carousel>
      <div className="mt-6">
        <p>
          Shop by<br></br> Category
        </p>
      </div>
    </div>
  );
}

export default Home;
