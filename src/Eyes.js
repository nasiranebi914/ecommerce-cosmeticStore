import { React, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { setEyesProducts } from "./actions/faceProductAction";

function Eyes() {
  const eyesProducts = useSelector((state) => state.eyesProducts);
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://sephora.p.rapidapi.com/products/list",
    params: { categoryId: "cat130054", pageSize: "60", currentPage: "1" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "sephora.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        dispatch(setEyesProducts(response.data.products));
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
        {eyesProducts.map((e, i) => (
          <div className="card" key={i}>
            <div className="card-image">
              <figure className="image">
                <img key={e.id} src={e.image450}></img>
              </figure>
            </div>
            <div className="card-content">
              <Link to={`/Shop/Eyes/${e.id}`}>{e.displayName}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eyes;
