import React from "react";
import homepage_img from "./imgs/homepage_img.jpg";
function Home() {
  return (
    <div>
      <div className="columns">
        <div className="column">
          <div className="columns is-mobile">
            <div className="column">
              <div className="section is-medium has-text-left-fullhd mt-6">
                <h1
                  className="mb-5"
                  style={{
                    color: "#B83022",
                    "font-family": "Italiana",
                    "font-style": "normal",
                    "font-weight": "400",
                    "font-size": "100px",
                    "line-height": "90px",
                  }}
                >
                  LEFORA
                </h1>
                <h2 className="is-size-6 mb-5">
                  Choose your beauty products that suit you the best, and we
                  will take care of the rest.
                </h2>
                <a href="/ShopAll">Learn More </a>
              </div>
            </div>
            <div className="column">
              <img src={homepage_img}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
