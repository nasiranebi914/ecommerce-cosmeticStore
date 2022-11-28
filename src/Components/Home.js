import React from "react";
import face from "../imgs/face.jpg";
import eyes from "../imgs/eyes.jpg";
import lips from "../imgs/lips.jpg";
import cheeks from "../imgs/cheeks.jpg";
import paletts from "../imgs/paletts.jpg";
import vegan from "../imgs/vegan.jpg";
import brushes from "../imgs/brushes.jpg";
import nail from "../imgs/nail.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./app.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [best, setBest] = useState([]);
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

  const options = {
    method: 'GET',
    url: 'https://sephora.p.rapidapi.com/products/search',
    params: { q: 'fenty', pageSize: '10', currentPage: '1' },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data.products);
      setBest(response.data.products);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  return (
    <div>

      <div className='cover'><p className='is-size-1 title'>L E P H O R A <br></br><p className='is-size-4'>your beauty store</p></p></div>

      <div className='section'>
        <div className="mt-6">
          <p className='subtitle is-3'>Bestsellers</p>
          <div className='section is-small'>
            <Carousel responsive={responsive}>
              {best.map((b, i) => (
                <div className="card m-2" key={i}>
                  <div class="card-image">
                    <figure className="image">
                      <img src={b.image450}></img>
                    </figure>
                  </div>
                </div>))}
            </Carousel>
          </div>


        </div>
      </div>
      <div className='band'></div>

      <div className='section category '>
        <p className='subtitle is-3'>Categories</p>
        <p className='subtitle is-5'>Shop what's popular now</p>
        <div className='section is-small'>
          <div className='is-flex is-justify-content-space-evenly'>
            <figure className="image">
              <img src={face}></img>
              <a class="overlay" href='/Face'>
                <div class="text">Face</div>
              </a>
            </figure>
            <figure className="image">
              <img src={eyes}></img>
              <a class="overlay" href='/Eyes'>
                <div class="text">Eyes</div>
              </a>
            </figure>
            <figure className="image">
              <img src={lips}></img>
              <a class="overlay" href='/Lips'>
                <div class="text">Lips</div>
              </a>
            </figure>
            <figure className="image">
              <img src={cheeks}></img>
              <a class="overlay" href='/Cheeks'>
                <div class="text">Cheeks</div>
              </a>
            </figure>
          </div>
          <div className='is-flex is-justify-content-space-evenly'>
            <figure className="image">
              <img src={paletts}></img>
              <a class="overlay" href='/Paletts'>
                <div class="text">Paletts</div>
              </a>
            </figure>
            <figure className="image">
              <img src={vegan}></img>
              <a class="overlay" href='/Vegan'>
                <div class="text">Vegan</div>
              </a>
            </figure>
            <figure className="image">
              <img src={brushes}></img>
              <a class="overlay" href='/Brushes'>
                <div class="text">Brushes</div>
              </a>
            </figure>
            <figure className="image">
              <img src={nail}></img>
              <a class="overlay" href='/Nails'>
                <div class="text">Nails</div>
              </a>
            </figure>
          </div>
        </div>
      </div >
    </div >



  );
}

export default Home;
