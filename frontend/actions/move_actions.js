import * as ApiUtil from '../api_util/move_api_util';

export const RECEIVE_MOVES = 'RECEIVE_MOVES';
export const RECEIVE_MOVE = 'RECEIVE_MOVE';

const receiveMoves = (moves) => {
  return ({
    type: RECEIVE_MOVES,
    moves
  });
}

const receiveMove = (move) => {
  return ({
    type: RECEIVE_MOVE,
    move
  });
}

export const fetchMoves = () => dispatch => (
  ApiUtil.fetchMoves().then(moves => dispatch(receiveMoves(moves)))
);

export const createMove = (move) => dispatch => (
  ApiUtil.createMove(move).then(move => dispatch(receiveMove(move)))
);
