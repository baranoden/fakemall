import { ActionTypes } from "../contants/action-types";

const initialState = {
  produts: [
    {
      id: 1,
      title: "Baran",
      category: "Frontend Dev.",
    },
  ],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
