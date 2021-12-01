import {apiConstants} from "../constant/apiConstants";

const initialState = {
    loading: false,
}

export const loaderReducer = (state=initialState, action) => {
    switch (action.type) {
        case apiConstants.SET_LOADER: {
            return {...state, loading: action.payload.data};
        }
        default: {
            return state;
        }
    }
}
