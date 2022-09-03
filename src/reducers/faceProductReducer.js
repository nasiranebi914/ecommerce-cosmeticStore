import { ActionTypes } from "../actions/actionTypes";

const initialState = {
  faceProducts: [],
};

export const faceProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FACE_PRODUCTS:
      return { ...state, faceProducts: payload };
    default:
      return state;
  }
};
