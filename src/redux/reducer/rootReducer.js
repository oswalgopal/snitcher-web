import {combineReducers} from 'redux';
import {platformReducer} from '../reducer/platformReducer';
import {contestReducer} from '../reducer/contestReducer';

const rootReducer = combineReducers({
  platformReducer,
  contestReducer,
});

export default rootReducer;
