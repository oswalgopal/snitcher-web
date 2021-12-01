import {apiConstants} from '../constant/apiConstants';

export const getPlatformApiAction = () => {
  return {
    type: apiConstants.GET_PLATFORMS,
    payload: {},
  };
};

export const setPlatformData = data => {
  // setAsyncData('platformData', data);
  return {
    type: apiConstants.SET_PLATFORMS,
    payload: {
      data,
    },
  };
};

export const getContestApiAction = () => {
  return {
    type: apiConstants.GET_CONTEST,
    payload: {},
  };
};

export const setContestData = data => {
  // setAsyncData('contestData', data);
  return {
    type: apiConstants.SET_CONTEST,
    payload: {
      data,
    },
  };
};

export const setLoader = data => {
  return {
    type: apiConstants.SET_LOADER,
    payload: {
      data
    }
  }
}
