import { combineReducers } from 'redux';
import MovesReducer from './moves_reducer';

export default combineReducers({
  moves: MovesReducer,
});
