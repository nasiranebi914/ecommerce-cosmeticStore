import { React, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { setNailProducts } from "../actions/faceProductAction";
import Products from "./Products";

function Nail() {
  const nailProducts = useSelector((state) => state.nailProducts);
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    url: "https://sephora.p.rapidapi.com/products/list",
    params: { categoryId: "cat180012", pageSize: "60", currentPage: "1" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "sephora.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        dispatch(setNailProducts(response.data.products));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return <Products productType={nailProducts} link={"/Nails"} />;
}

export default Nail;
