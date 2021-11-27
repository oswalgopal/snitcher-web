import {apiConstants} from '../constant/apiConstants';

const initialState = {
  all: [],
  codeChef: [],
  atCoder: [],
  leetCode: [],
  codeForces: [],
  hackerRank: [],
};

export const contestReducer = (state = initialState, action) => {
  switch (action.type) {
    case apiConstants.SET_CONTEST: {
      console.log(action.payload);
      return {...state, all: action.payload.data.all};
    }
    default: {
      return state;
    }
  }
};
