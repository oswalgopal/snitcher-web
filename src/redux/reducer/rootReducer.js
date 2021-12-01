import {combineReducers} from 'redux';
import {platformReducer} from './platformReducer';
import {contestReducer} from './contestReducer';
import {loaderReducer} from './loaderReducer';

const rootReducer = combineReducers({
  platformReducer,
  contestReducer,
  loaderReducer,
});

export default rootReducer;
