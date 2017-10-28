import merge from 'lodash/merge';
import { RECEIVE_MOVES, RECEIVE_MOVE } from '../actions/move_actions';

const MovesReducer = ( state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case (RECEIVE_MOVES):
      return merge({}, state, action.moves);
    case (RECEIVE_MOVE):
      return merge({}, state, {[action.move.id]: action.move});
    default:
      return state;
  }
};

export default MovesReducer;
