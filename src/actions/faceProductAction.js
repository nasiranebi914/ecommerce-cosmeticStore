import { ActionTypes } from "./actionTypes";

export const setFaceProducts = (faceProducts) => {
  return {
    type: ActionTypes.SET_FACE_PRODUCTS,
    payload: faceProducts,
  };
};
