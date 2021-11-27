import { apiConstants } from "../constant/apiConstants";

const initialState = {
  platforms: [],
};

export const platformReducer = (state= initialState, action) => {
  switch (action.type) {
    case(apiConstants.SET_PLATFORMS): {
      return {...state, platforms: action.payload.data};
    }
    default: {
      return state;
    }
  }
};
