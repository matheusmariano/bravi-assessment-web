import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  chessPreviewRequest: ['pieces', 'cols', 'rows'],
  chessPreviewRequestSuccess: ['highlights'],
  chessPreviewRequestFailure: null,
});

export const ChessTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  highlights: null,
  requesting: false,
  requestSuccess: null,
});

export const previewRequest = state =>
  state.merge({
    requesting: true,
    requestSuccess: null,
  });

export const previewRequestSuccess = (state, { highlights }) =>
  state.merge({
    highlights,
    requesting: false,
    requestSuccess: true,
  });

export const previewRequestFailure = state =>
  state.merge({
    requesting: false,
    requestSuccess: false,
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHESS_PREVIEW_REQUEST]: previewRequest,
  [Types.CHESS_PREVIEW_REQUEST_SUCCESS]: previewRequestSuccess,
  [Types.CHESS_PREVIEW_REQUEST_FAILURE]: previewRequestFailure,
});
