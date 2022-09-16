import { React, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFaceProducts } from "./actions/faceProductAction";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Face() {
  const faceProducts = useSelector((state) => state.faceProducts);
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://sephora.p.rapidapi.com/products/list",
    params: { categoryId: "cat130058", pageSize: "60", currentPage: "1" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "sephora.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        dispatch(setFaceProducts(response.data.products));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div
      className="column "
      style={{
        overflowY: "auto",
        scrollbarWidth: "thin",
        height: "600px",
        width: "500px",
        display: "flex",
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
                <img key={f.id} src={f.image450}></img>
              </figure>
            </div>
            <div className="card-content">
              <Link to={`/Shop/Face/${f.productId}`}>{f.displayName}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Face;
