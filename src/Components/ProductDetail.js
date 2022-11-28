import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const productId = params.productId;
  const skuId = params.skuId;
  const [detail, setDetail] = useState({});

  const options = {
    method: "GET",
    url: "https://sephora.p.rapidapi.com/products/detail",
    params: { productId: productId, preferedSku: skuId },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "sephora.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setDetail(response.data);
        console.log(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* {!detail ? " " : (detail.currentSku.skuId)} */}
      {/* {Object.entries(detail).map(([key, value], i) => {
        return <div key={i}>{key}</div>;
      })} */}
      {Object.keys(detail).map((obj, i) => {
        return (
          <div>{detail[obj].brand}</div>
        )
      })}
    </div>
  );
}

export default ProductDetail;
