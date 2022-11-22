import { React, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFaceProducts } from "../actions/faceProductAction";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Products from "./Products";

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
        console.log(response.data.products);
        console.log(faceProducts);
      })
      .catch(function (error) {
        console.error(error.response.data);
      });
  }, []);

  return <Products productType={faceProducts} link={"/Face"} />;
}

export default Face;
