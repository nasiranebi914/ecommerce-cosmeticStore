import { React, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFaceProducts } from "./actions/faceProductAction";

function Face() {
  const faceProducts = useSelector((state) => state.faceProducts);
  const { id, image, price, category } = faceProducts;
  const dispatch = useDispatch();
  const getFaceProducts = async () => {
    const response = await axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation"
      )
      .catch((err) => {
        console.log("Error: " + err);
      });
    dispatch(setFaceProducts(response.data));
    console.log(response.data);
  };
  useEffect(() => {
    getFaceProducts();
  }, []);

  return (
    <div className="section has-background-white">
      <div className="columns is-mobile">
        <div className="column is-one-quarter">
          <div
            className=""
            style={{
              height: "600px",
            }}
          >
            <ul className="menu-list">
              <li>
                <a>All Face Products</a>
              </li>
              <li>
                <a>Foundation</a>
              </li>
              <li>
                <a>Powder</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="column"
          style={{
            overflowY: "auto",
            scrollbarWidth: "thin",
            height: "600px",
            display: "felx",
          }}
        >
          <div
            className="grid-container"
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto  ",
              gridGap: "10px",
            }}
          >
            {faceProducts.map((f, i) => (
              <div className="card" key={i}>
                <div className="card-image">
                  <figure className="image">
                    <img key={f.id} src={f.image_link}></img>
                  </figure>
                </div>
                <div className="card-content">
                  <p>{f.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Face;
