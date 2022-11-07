import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const productId = params.productId;
  const skuId = params.skuId;
  const [detail, setDetail] = useState([]);

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
        console.log(detail);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {!detail ? " " : (detail.displayName, detail.quickLookDescription)}
    </div>
  );
}

export default ProductDetail;
