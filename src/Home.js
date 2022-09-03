import React from "react";
import homepage_img from "./imgs/homepage_img.jpg";
import homepage_img2 from "./imgs/homepage_img2.jpg";
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
                    fontFamily: "Italiana",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "100px",
                    lineHeight: "90px",
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
      <div className="columns">
        <div className="columns is-mobile">
          <div className="column">
            <img src={homepage_img2} width={"684px"}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
